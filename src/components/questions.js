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
        Please <Link className='link' to="/rsvp">RSVP on our website</Link> by May 27, 2022!
      </Question>
      <Question icon={briefcase} q="Is COVID vaccination required?">
        {`We have several immunocompromised guests coming to the wedding, and it's quite a big one! We want to make sure we're being as safe as humanly possible, so we'll be requiring COVID-19 vaccination to come to the wedding. If you're not vaccinated, we would really, really love for you to reconsider! Please don't hesitate to reach out to us to formulate a plan :)`}
      </Question>
      <Question icon={briefcase} q="What should I wear/pack?">
        {`All of our events are "beach cocktail" — slightly more casual than cocktail attire. Feel free to skip the tie or wear a summery dress. Most importantly, optimize for comfort!
        For the overall trip, bring a bathing suit, some light layers, and dancing shoes :) We also encourage sweatpants, because we never pack a bag without
        sweatpants.`}
      </Question>
      <Question icon={phone} q="What's your contact info?">
        Email us at <a className='link' href="mailto:ashkonlaura@gmail.com">✉ ashkonlaura@gmail.com</a>!
      </Question>
      <Question icon={users} q="Is my family invited?">
        {`When you `}
        <Link className='link' to="/rsvp">RSVP</Link> and enter your name, you'll be able to see
        who we've counted in your party. We have a TON of family and had to keep extra guests relatively limited, but let us know if we missed anyone!
      </Question>
      <Question icon={truck} q="Will there be transportation?">
        All events are located at <a target="_blank" href="/terranea.com/">Terranea Resort</a>. If you're staying outside of the resort, we ask that you arrange your own transportation to and from events. Learn more{" "}
        <Link className='link' to="/location">on the location page</Link>.
      </Question>
      <Question icon={truck} q="Will there be childcare?">
        We have some really exciting childcare options available! Please email us at <a className='link' href="mailto:ashkonlaura@gmail.com">✉ ashkonlaura@gmail.com</a> for more information.
      </Question>
      <Question icon={gift} q="Where are you registered?">
        We absolutely don't need gifts — the best gift you can give us is your presence at our wedding. But we're also registered <a className='link' target="_blank" href="https://registry.theknot.com/laura-del-beccaro-ashkon-nosrat-july-2022-ca/39774017">here</a> if you're like our parents and refuse to listen to no-gift rules :)
      </Question>
      <Question icon={sun} q="What will the weather be like?">
        It's generally warm in LA, but can be pretty windy — especially because we'll be right on the ocean. We
        recommend dressing for summer but bringing a light layer just in case, as we'll be outside the whole time. We'll generally be on grass and brick (and the dance floor!) so plan shoes accordingly.
      </Question>
      {/* <Question icon={hash} q="What's your wedding hashtag?">
        #LDBgetsSMASHed
      </Question> */}
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
