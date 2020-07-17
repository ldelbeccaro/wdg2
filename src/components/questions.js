import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"

import send from "../images/icons/send.svg"
import briefcase from "../images/icons/briefcase.svg"
import sun from "../images/icons/sun.svg"
import users from "../images/icons/users.svg"
import truck from "../images/icons/truck.svg"
import hash from "../images/icons/hash.svg"
import gift from "../images/icons/gift.svg"
import phone from "../images/icons/phone.svg"

import "../styles/questions.styl"

const resizeAllGridItems = ref => {
  if (!ref) return
  const allItems = ref.querySelectorAll(".question")
  for (const item of allItems) {
    resizeGridItem(item, ref)
  }
}

const resizeGridItem = (item, ref) => {
  const rowHeight = parseInt(
    window.getComputedStyle(ref).getPropertyValue("grid-auto-rows")
  )
  const rowGap = parseInt(
    window.getComputedStyle(ref).getPropertyValue("grid-row-gap")
  )
  const padding = parseInt(
    window.getComputedStyle(item).getPropertyValue("padding")
  )
  const rowSpan = Math.ceil(
    (item.querySelector(".faq-content").getBoundingClientRect().height +
      rowGap +
      padding * 2) /
      (rowHeight + rowGap)
  )
  item.style.gridRowEnd = "span " + rowSpan
}

const Questions = () => {
  const questionsRef = useRef(null)

  useEffect(() => {
    resizeAllGridItems(questionsRef.current)
    window.addEventListener("resize", () =>
      resizeAllGridItems(questionsRef.current)
    )
  }, [questionsRef])

  return (
    <div className="questions" ref={questionsRef}>
      <Question icon={send} q="When/how do I RSVP?">
        Please <Link to="/rsvp">RSVP on our website</Link> by June 3.
      </Question>
      <Question icon={briefcase} q="What should I wear/pack?">
        {`All of our events are beach formal — summery semi-formal, if you will :)
        We also encourage sweatpants, because we never pack a bag without
        sweatpants.`}
      </Question>
      <Question icon={sun} q="What will the weather be like?">
        It's generally warm in Santa Barbara, but can be pretty windy. We
        recommend dressing for summer but bringing a light layer just in case.
        if you’re hosting an outdoor wedding and know that the grass is
        particularly soft and spongy, give the ladies a heads up so they can opt
        for wedges over stilettos. Or if you know that your venue is susceptible
        to cooler breezes, let your guests know to expect colder weather so they
        can come prepared with coats and jackets.
      </Question>
      <Question icon={users} q="Is my family invited?">
        {`Children are welcome to celebrate with us :) When you `}
        <Link to="/rsvp">RSVP</Link> and enter your name, you'll be able to see
        who we've counted in your party. Please let us know if we missed anyone!
      </Question>
      <Question icon={truck} q="Will there be transportation?">
        Transportation will be provided from the hotels for which we have room
        blocks: A, B, and C. Learn more{" "}
        <Link to="/location">on the location page</Link>.
      </Question>
      <Question icon={hash} q="What's your wedding hashtag?">
        #IDontKnow
      </Question>
      <Question icon={gift} q="Where are you registered?">
        Please donate to Black Lives Matter. If you feel compelled to give
        beyond that, we can't thank you enough for your generosity. We're
        registered at <a href="link to site">Crate and Barrel</a> for those who
        are interested, but truly do not expect any gifts beyond the donation
        links above!
      </Question>
      <Question icon={phone} q="What's your contact info?">
        {`Feel free to contact us at any time :) call or text Laura at
        215-341-7708, or email us at ashkonlaura@gmail.com`}
      </Question>
    </div>
  )
}

const Question = ({ icon, q, children }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className={`question${hover ? ` hover` : ``}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="listitem"
    >
      <div className="faq-content">
        <div className="q">
          <img alt="question icon" className="icon" src={icon} />
          <div className="text">{q}</div>
        </div>
        <div className="answer">{children}</div>
        <div className="card-border" />
      </div>
    </div>
  )
}

export default Questions
