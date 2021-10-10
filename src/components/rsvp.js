import React, { useState, useRef, useEffect } from "react"

import { filterAndSortItems } from "../helpers/search"
import { sendRsvpToAirtable, getNamesFromAirtable } from "../helpers/airtable"

import "../styles/rsvp.styl"

import Select from "../components/select"
import { Check } from "./svg"

// TODO
// maybe icons
// steak: https://www.flaticon.com/premium-icon/steak_1886772
// pasta: https://www.flaticon.com/premium-icon/spaghetti_1886769
// lobster: https://www.flaticon.com/premium-icon/lobster_1886716
// french fries: https://www.flaticon.com/premium-icon/french-fries_1886681

const blankRsvp = {
  attendees: [],
  ids: [],
  rsvps: [],
  meals: [],
  restrictions: [],
}
const blankTransform = { transform: `translateY(0)` }
const RSVP = () => {
  // if RSVP'd already, show message
  const [nameInput, setNameInput] = useState("")
  const [allNames, setAllNames] = useState([])
  const [rsvpStage, setRsvpStage] = useState(0)
  const [rsvp, setRsvp] = useState(blankRsvp)
  const [style, setStyle] = useState(blankTransform)
  const [refPositions, setRefPositions] = useState([0, 0, 0])
  const [matchingNames, setMatchingNames] = useState([])
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const stageOneRef = useRef(null)
  const stageTwoRef = useRef(null)
  const stageThreeRef = useRef(null)
  const rightGridRef = useRef(null)

  const missingMeals = rsvp.rsvps
    .map((resp, i) => (!resp ? true : !!rsvp.meals[i]))
    .some(meal => !meal)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const newAllNames = await getNamesFromAirtable()

  //     setAllNames(
  //       newAllNames.map(record => ({
  //         id: record.id,
  //         name: record.fields.name,
  //         meal: record.fields.dinner,
  //         rsvp: record.fields.RSVP,
  //         restrictions: record.fields["dietary restrictions"],
  //         guests: !record.fields["related guests"]
  //           ? []
  //           : record.fields["related guests"].map(id => {
  //               const fullRecord = newAllNames.find(record => record.id === id)
  //               return {
  //                 id: fullRecord.id,
  //                 name: fullRecord.fields.name,
  //                 meal: fullRecord.fields.dinner,
  //                 rsvp: fullRecord.fields.RSVP,
  //                 restrictions: fullRecord.fields["dietary restrictions"],
  //               }
  //             }),
  //       }))
  //     )
  //   }
  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   const positions = [stageOneRef, stageTwoRef, stageThreeRef].map(ref => {
  //     return ref.current.getBoundingClientRect().bottom
  //   })
  //   setRefPositions(positions)
  // }, [stageOneRef, stageTwoRef, stageThreeRef])

  // useEffect(() => {
  //   if (!missingMeals) setError("")
  // }, [missingMeals])

  // useEffect(() => {
  //   const parentY = rightGridRef.current.getBoundingClientRect().y

  //   if (rsvpStage === 1) {
  //     const bottom = refPositions[rsvpStage - 1]
  //     setStyle({
  //       transform: `translateY(-${bottom + 40 - parentY + 48 - 144}px)`,
  //     })
  //   } else if (rsvpStage === 2) {
  //     const height = stageTwoRef.current.offsetHeight
  //     setStyle({
  //       transform: `translateY(-${
  //         refPositions[0] + 40 + height + 40 - parentY + 48 - 144
  //       }px)`,
  //     })
  //   } else if (rsvpStage === 3) {
  //     const height1 = stageTwoRef.current.offsetHeight
  //     const height2 = stageThreeRef.current.offsetHeight
  //     const scrollTop = rightGridRef.current.querySelector(".right-scroll")
  //       .scrollTop
  //     setStyle({
  //       transform: `translateY(-${
  //         refPositions[0] +
  //         56 +
  //         height1 +
  //         40 +
  //         height2 +
  //         80 +
  //         6 -
  //         144 -
  //         parentY -
  //         scrollTop
  //       }px)`,
  //     })
  //   } else {
  //     setStyle(blankTransform)
  //   }
  // }, [refPositions, rsvpStage])

  const onSubmitRsvp = () => {
    if (missingMeals) {
      setError("Please choose a meal for each attendee")
    } else {
      rightGridRef.current.querySelector(".right-scroll").classList.add("fixed")
      setError("")
      setRsvpStage(3)
      sendRsvpToAirtable(rsvp)
      setSubmitted(true)
    }
  }

  const onSelectName = name => {
    setMatchingNames([])
    setRsvpStage(1)
    setNameInput(name.name)
    setRsvp({
      ids: [name.id, ...name.guests.map(g => g.id)],
      attendees: [name.name, ...name.guests.map(g => g.name)],
      rsvps: [
        name.rsvp === undefined ? true : JSON.parse(name.rsvp),
        ...name.guests.map(g =>
          g.rsvp === undefined ? true : JSON.parse(g.rsvp)
        ),
      ],
      meals: [name.meal, ...name.guests.map(g => g.meal)],
      restrictions: [
        name.restrictions,
        ...name.guests.map(g => g.restrictions || ""),
      ],
    })
  }

  return (
    <div className="rsvp" style={submitted ? { color: "white" } : {}}>
      <div className={`left stage-${rsvpStage}`}>
        <div className="rsvp-text">
          <h2>RSVP</h2>
          <div className="line"></div>
        </div>
        {rsvpStage !== 0 && (
          <div className="info">{`Party of ${
            rsvp.rsvps.filter(r => !!r).length
          }`}</div>
        )}
      </div>
      <div className="right" ref={rightGridRef}>
        <div className="right-scroll">
          <div
            className={`name-stage stage-${rsvpStage}`}
            ref={stageOneRef}
            style={style}
          >
            <div className="label">coming soon :)</div>
            {/* <div className="label">What's your name?</div> */}
            <div className="input-container">
              {/* <input
                aria-label="your name"
                value={nameInput}
                onChange={e => {
                  setNameInput(e.target.value)
                  setMatchingNames(filterAndSortItems(allNames, nameInput))
                }}
              /> */}
              <div className="dropdown">
                {matchingNames.map(name => (
                  <div
                    key={name.name}
                    className="dropdown-item"
                    onClick={() => onSelectName(name)}
                    role="menuitem"
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.keyCode === 13) onSelectName(name)
                    }}
                  >
                    {name.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`rsvp-stage stage-${rsvpStage}`}
            ref={stageTwoRef}
            style={style}
          >
            <div
              className="back"
              onClick={() => {
                setRsvpStage(0)
                setNameInput("")
                setRsvp(blankRsvp)
              }}
              role="link"
              tabIndex={0}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setRsvpStage(0)
                  setNameInput("")
                  setRsvp(blankRsvp)
                }
              }}
            >
              ← Wrong name? Go back
            </div>
            <div className="party-rsvp">
              <div className="section-label">Who's coming?</div>
              <div className="attendees">
                {rsvp.attendees.map((person, i) => (
                  <div key={person} className="attendee-rsvp">
                    <Select
                      label={person}
                      selected={rsvp.rsvps[i]}
                      onSelect={() => {
                        const newRsvps = [...rsvp.rsvps]
                        newRsvps.splice(i, 1, true)
                        setRsvp({ ...rsvp, rsvps: newRsvps })
                      }}
                      onDeselect={() => {
                        const newRsvps = [...rsvp.rsvps]
                        newRsvps.splice(i, 1, false)
                        setRsvp({ ...rsvp, rsvps: newRsvps })
                      }}
                    />
                  </div>
                ))}
              </div>
              <div
                className="next"
                onClick={() => setRsvpStage(2)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.keyCode === 13) setRsvpStage(2)
                }}
              >
                Next
              </div>
            </div>
          </div>
          <div
            className={`meal-stage stage-${rsvpStage}`}
            ref={stageThreeRef}
            style={style}
          >
            <div
              className="back"
              onClick={() => setRsvpStage(1)}
              role="link"
              tabIndex={0}
              onKeyDown={e => {
                if (e.keyCode === 13) setRsvpStage(1)
              }}
            >
              ← Missing someone? Go back
            </div>
            <div className="meal-selection">
              <div className="section-label">What should we order?</div>

              <div className="meals">
                {rsvp.attendees
                  .map((person, i) => ({ name: person, idx: i }))
                  .filter(person => !!rsvp.rsvps[person.idx])
                  .map(person => (
                    <div className="person" key={person.name}>
                      <div className="flex">
                        <div className="name">{person.name}</div>
                        <div className="restrictions">
                          <div className="label">Dietary restrictions:</div>
                          <input
                            aria-label="dietary restrictions"
                            value={rsvp.restrictions[person.idx]}
                            onChange={e => {
                              const newRestrictions = [...rsvp.restrictions]
                              newRestrictions.splice(
                                person.idx,
                                1,
                                e.target.value
                              )
                              setRsvp({
                                ...rsvp,
                                restrictions: newRestrictions,
                              })
                            }}
                          />
                        </div>
                      </div>
                      <div className="input meal">
                        {["Steak", "Salmon", "Pasta", "Children's meal"].map(
                          meal => (
                            <Select
                              image={
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="Layer_1"
                                  enableBackground="new 0 0 509.768 509.768"
                                  height="512"
                                  viewBox="0 0 509.768 509.768"
                                  width="512"
                                >
                                  <path d="m495.236 377.316c-1.405-2.184-2.86-4.326-4.38-6.409-16.871-37.08-41.099-65.767-69.329-83.264-9.198-12.363-19.424-23.097-30.441-32.007l7.279-19.335c10.488-27.862.206-58.54-23.094-74.922l48.784-129.589c3.112-8.27-1.067-17.498-9.338-20.611-8.271-3.115-17.498 1.068-20.611 9.337l-48.783 129.589c-28.32-3.049-56.278 13.233-66.767 41.095l-13.248 35.192c-57.567-44.753-142.947-12.597-156.04 59.739-29.297 17.332-54.458 46.606-71.824 84.773-1.504 2.06-2.943 4.178-4.334 6.338h-17.11c-8.837 0-16 7.164-16 16s7.163 16 16 16h25.352l38.634 49.523c19.955 25.582 51.963 40.854 85.619 40.854h178.557c33.656 0 65.664-15.273 85.619-40.854l38.634-49.523h25.352c8.837 0 16-7.164 16-16 .001-8.341-6.383-15.183-14.531-15.926zm-57.808-13.101c5.121 3.171 9.949 6.818 14.423 10.895h-38.091c-5.897-3.708-11.714-7.327-17.448-10.851 43.359 0 40.205.021 41.116-.044zm-37.899-52.37c1.556 2.264 3.07 4.598 4.551 6.985-24.25-3.43-46.891.61-72.866 7.467-9.524-5.212-18.706-10.056-27.568-14.562 35.092-12.5 63.181-17.7 95.883.11zm-36.334-118.385c6.994 8.555 9.387 20.503 5.222 31.567l-4.881 12.966c-4.845-2.356-9.787-4.391-14.809-6.101zm-54.69 9.014c4.165-11.064 13.842-18.468 24.741-20.287l-16.356 43.45c-5.892-.339-11.134-.259-17.218.304zm1.62 54.96c14.681 0 29.026 3.802 42.495 10.906-22.813.697-51.935 8.815-88.46 24.682-12.033-5.228-23.256-9.607-33.72-13.164 39.888-17.381 64.54-22.424 79.685-22.424zm-76.906-13.408c-18.071 7.192-36.212 15.706-53.552 24.508-10.704-.703-21.181.157-31.131 2.215 17.257-29.811 54.11-41.039 84.683-26.723zm-60.719 56.259c25.106 0 76.294 13.82 179.826 74.825h-23.205c-87.061-38.205-149.831-57.572-186.639-57.572-9.186 0-18.224.975-26.998 2.834 17.449-12.983 36.919-20.087 57.016-20.087zm-30.018 49.253c16.38 0 46.576 5.144 101.881 25.572h-167.915c17.784-16.204 41.205-25.572 66.034-25.572zm262.069 89.545c-13.939 17.869-36.515 28.537-60.389 28.537h-178.557c-23.874 0-46.449-10.668-60.389-28.537l-23.279-29.84h345.893z" />
                                </svg>
                              }
                              key={meal}
                              label={meal}
                              selected={rsvp.meals[person.idx] === meal}
                              onSelect={() => {
                                const newMeals = [...rsvp.meals]
                                newMeals.splice(person.idx, 1, meal)
                                setRsvp({ ...rsvp, meals: newMeals })
                              }}
                              onDeselect={() => {}}
                            />
                          )
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className={`submit-stage stage-${rsvpStage}`} style={style}>
            <div className={`submit-container${submitted ? ` submitted` : ``}`}>
              <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <ellipse
                    className="foreground"
                    ry="25"
                    rx="25"
                    cy="24"
                    cx="26"
                    strokeWidth="2"
                  />
                </g>
              </svg>
              <Check className="check" />
              <div
                className={`submit${error ? ` error-border` : ``}`}
                disabled={missingMeals}
                onClick={onSubmitRsvp}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.keyCode === 13) onSubmitRsvp()
                }}
              >
                RSVP
              </div>
              <div className="thanks">Thank you!</div>
            </div>
            {!!error && <div className="error">{error}</div>}
            {submitted && (
              <div className="thanks-text">
                We're unbelievably excited to celebrate with you{" "}
                <span role="img" aria-label="party emoji">
                  🎉
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
