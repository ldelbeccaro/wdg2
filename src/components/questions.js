import { Link } from "gatsby"
import React, { useState } from "react"

import send from "../images/icons/send.svg"
import briefcase from "../images/icons/briefcase.svg"
import sun from "../images/icons/sun.svg"
import users from "../images/icons/users.svg"
import truck from "../images/icons/truck.svg"
import hash from "../images/icons/hash.svg"
import gift from "../images/icons/gift.svg"
import phone from "../images/icons/phone.svg"

import "../styles/questions.styl"

const Questions = () => {
  return (
    <div className="questions">
      <Question icon={send} q="When/how do I RSVP?">
        Please <Link className='link' to="/rsvp">RSVP on our website</Link> by June 3.
      </Question>
      <Question icon={briefcase} q="What should I wear/pack?">
        {`All of our events are beach formal — summery semi-formal, if you will :)
        We also encourage sweatpants, because we never pack a bag without
        sweatpants.`}
      </Question>
      <Question icon={sun} q="What will the weather be like?">
        It's generally warm in LA, but can be pretty windy — especially because we'll be right on the ocean. We
        recommend dressing for summer but bringing a light layer just in case. We'll be outside the whole time. We'll generally be on grass and brick (and the dance floor!) so plan shoes accordingly.
      </Question>
      <Question icon={users} q="Is my family invited?">
        {`When you `}
        <Link className='link' to="/rsvp">RSVP</Link> and enter your name, you'll be able to see
        who we've counted in your party. Please let us know if we missed anyone!
      </Question>
      <Question icon={truck} q="Will there be transportation?">
        All events are located at Terranea Resort. If you're staying outside of the resort, we ask that you arrange your own transportation to and from events. Learn more{" "}
        <Link className='link' to="/location">on the location page</Link>.
      </Question>
      <Question icon={hash} q="What's your wedding hashtag?">
        #LDBgetsSMASHed
      </Question>
      <Question icon={gift} q="Where are you registered?">
        Our registry can be found <a className='link' href="https://registry.theknot.com/laura-del-beccaro-ashkon-nosrat-july-2022-ca/39774017">here</a> :)
      </Question>
      <Question icon={phone} q="What's your contact info?">
        Email us at <a className='link' href="mailto:ashkonlaura@gmail.com">✉ ashkonlaura@gmail.com</a>!
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
      <div className="q">
        <img alt="question icon" className="icon" src={icon} />
        <div className="text">{q}</div>
      </div>
      <div className="answer">{children}</div>
    </div>
  )
}

export default Questions
