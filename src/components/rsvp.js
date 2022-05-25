import React, { useState, useRef, useEffect } from "react"

import { filterAndSortItems } from "../helpers/search"
import { sendRsvpToAirtable, getNamesFromAirtable } from "../helpers/airtable"

import "../styles/rsvp.styl"

import Select from "../components/select"
import { Check } from "./svg"

const blankRsvp = {
  attendees: [],
  ids: [],
  rsvps: [],
  meals: [],
  restrictions: [],
}
const blankTransform = { transform: `translateY(0)` }
const RSVP = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      const newAllNames = await getNamesFromAirtable()

      setAllNames(
        newAllNames.map(record => ({
          id: record.id,
          name: record.fields.name,
          meal: record.fields.dinner,
          rsvp: record.fields.RSVP,
          restrictions: record.fields["dietary restrictions"],
          guests: !record.fields["related guests"]
            ? []
            : record.fields["related guests"].map(id => {
                const fullRecord = newAllNames.find(record => record.id === id)
                return {
                  id: fullRecord.id,
                  name: fullRecord.fields.name,
                  meal: fullRecord.fields.dinner,
                  rsvp: fullRecord.fields.RSVP,
                  restrictions: fullRecord.fields["dietary restrictions"],
                }
              }),
        }))
      )
    }
    fetchData()
  }, [])

  useEffect(() => {
    const positions = [stageOneRef, stageTwoRef, stageThreeRef].map(ref => {
      return ref.current.getBoundingClientRect().bottom
    })
    setRefPositions(positions)
  }, [stageOneRef, stageTwoRef, stageThreeRef])

  useEffect(() => {
    if (!missingMeals) setError("")
  }, [missingMeals])

  useEffect(() => {
    const parentY = rightGridRef.current.getBoundingClientRect().y

    if (rsvpStage === 1) {
      const bottom = refPositions[rsvpStage - 1]
      setStyle({
        transform: `translateY(-${bottom + 40 - parentY + 48 - 144}px)`,
      })
    } else if (rsvpStage === 2) {
      const height = stageTwoRef.current.offsetHeight
      setStyle({
        transform: `translateY(-${
          refPositions[0] + 40 + height + 40 - parentY + 48 - 144
        }px)`,
      })
    } else if (rsvpStage === 3) {
      const height1 = stageTwoRef.current.offsetHeight
      const height2 = stageThreeRef.current.offsetHeight
      const scrollTop = rightGridRef.current.querySelector(".right-scroll")
        .scrollTop
      setStyle({
        transform: `translateY(-${
          refPositions[0] +
          56 +
          height1 +
          40 +
          height2 +
          80 +
          6 -
          144 -
          parentY -
          scrollTop
        }px)`,
      })
    } else {
      setStyle(blankTransform)
    }
  }, [refPositions, rsvpStage])

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
      confirmed: name.rsvp !== undefined,
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
            <div className="label">What's your name?</div>
            <div className="input-container">
              <input
                aria-label="your name"
                autoFocus
                value={nameInput}
                onChange={e => {
                  setNameInput(e.target.value)
                  if (!!e.target.value) {
                    setMatchingNames(filterAndSortItems(allNames, e.target.value))
                  } else {
                    setMatchingNames([])
                  }
                }}
              />
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
              {!!rsvp.confirmed &&
                <>
                  <div className="confirmed">You're confirmed! If you'd like to change your response, please email us at ashkonlaura@gmail.com 💙</div>
                  <div className="confirmed-attendees">
                    {rsvp.attendees.map((person, i) => (
                      <div key={person} className="attendee">
                        <div className="attendee-name">{person}</div>
                        <div>{`RSVP: ${rsvp.rsvps[i] ? `Attending` : `Not attending`}`}</div>
                        <div>{`Meal: ${rsvp.meals[i] || `N/A`}`}</div>
                      </div>
                    ))}
                  </div>
                </>
              }
              {!rsvp.confirmed &&
                <>
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
                  {!rsvp.rsvps.filter(r => !!r).length && nameInput && (
                    <div className="sorry">{`Sorry ${rsvp.rsvps.length > 1 ? `no one can` : `you can't`} make it! Hope to see you soon :)`}</div>
                  )}
                  <div
                    className="next"
                    onClick={() => {
                      if (rsvp.rsvps.filter(r => !!r).length) {
                        setRsvpStage(2)
                      } else {
                        onSubmitRsvp()
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.keyCode === 13) {
                        if (rsvp.rsvps.filter(r => !!r).length) {
                          setRsvpStage(2)
                        } else {
                          onSubmitRsvp()
                        }
                      }
                    }}
                  >
                    {!rsvp.rsvps.filter(r => !!r).length && nameInput ? `Send RSVP` : `Next`}
                  </div>
                </>
              }
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
                        {["Filet mignon", "California sea bass", "Mushroom risotto (vegan)", "Children's meal"].map(
                          meal => (
                            <Select
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
            {submitted && !!rsvp.rsvps.filter(r => !!r).length && (
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
