import { Link } from "gatsby"
import React, { useState } from "react"

import send from "../images/icons/send.svg"
import briefcase from "../images/icons/briefcase.svg"
import sun from "../images/icons/sun.svg"
import hawaii from "../images/location.png"
import champagne from "../images/champagne.jpeg"
import group from "../images/group.jpeg"

import "../styles/location.styl"

const Location = () => {
  const [view, setView] = useState('default')
  const [hoverView, setHover] = useState('')

  const icons = {
    'things to do': <img src={send} />,
    'travel': <img src={briefcase} />,
    'accommodations': <img src={sun} />,
  }
  const images = {
    'things to do': champagne,
    'travel': hawaii,
    'accommodations': group,
  }

  let content;
  if (view === 'things to do') {
    content = (
      <div className='todo'>
        <div className='restaurants'>
        <div className='section'>Restaurants</div>
          There are endless amazing restaurants in LA, but these are some of our favorites.
          <div className='notes'>Near PV: Terranea has some excellent restaurants; Sushi; Pinky's</div>
          <div className='notes'>In the greater LA area: Felix Trattoria for exceptional Italian food; Craft</div>
        </div>
        <div className='hikes'><div className='section'>Hikes</div>Palos Verdes is famous for its hiking trails! Many of them run through Terranea :) there's a full guide here.</div>
        <div className='beaches'><div className='section'>Beaches</div>Closest beach: Torrance beach. Other iconic beaches: Santa Monica, Venice, Manhattan or Orange County</div>
        <div className='golfing'><div className='section'>Golf</div>There's a very fun (and very windy) par 3 course at Terranea, and a few other golf courses nearby. (We recommend PVGC.)</div>
        <div className='LA area'><div className='section'>City of Angels</div>The Los Angeles area is huge! From Disneyland to Hollywood, there's a ton you can see — the world is your oyster :)</div>
      </div>
    )
  } else if (view === 'accommodations') {
    content = (
      <div className='hotel-list'>
        <div className='hotel'>
          <div className='title'>Terranea Resort</div>
          <div className='notes'>We have a very large room block at Terranea Resort! This is where all of our events will be hosted, so we highly recommend it.</div>
          <div className='instructions'>You must make reservations via phone to get our discount. Our reduced rate is $350/night for a Resort View room and $425/night for an Ocean View room. Note that our rates extend 3 days before and 3 days after our event dates (7/22-24) if you'd like to come early or stay late!</div>
          </div>
        <div className='section-title'>Other options</div>
        <div className='notes'>Note: Because all of our events are at Terranea and have a large room block there, transportation outside of the resort will not be provided. If you're staying outside of the resort, we ask that you arrange your own transportation to and from events. Rideshare (Lyft, Uber, etc.) is our recommended mode of transportation.</div>
        <div className='hotel'>
          <div className='title'>PV Marriott</div>
          <div className='notes'>A more cost effective option that's still very close to our venue.</div>
          <div className='instructions'>Use code LDBAN when checking out to see our room block rates.</div>
        </div>
        <div className='hotel'>
          <div className='title'>Airbnb</div>
          <div className='instructions'>There are plenty of Airbnbs in the area if you prefer to secure your own accommodations.</div>
        </div>
      </div>
    )
  } else if (view === 'travel') {
    content = (
      <div className='travel'>
        <div className='notes'>✈️ Terranea Resort is about 30 mintes from LAX (Los Angeles) and LGB (Long Beach). Both are great airports to fly into!</div>
        <div className='notes'>🚙 A maps search for "Terranea Resort" will get you where you need to go. [NEED INFO ON WHERE TO GO/CHECK IN!] There is parking at the Resort, but we recommend taking rideshare (Lyft, Uber, etc.) to get around as there will be plenty available, and car rentals can be expensive.</div>
      </div>
    )
  } else if (view === 'default') {
    content = (
    <div className='menu'>
      {['accommodations', 'travel', 'things to do'].map(viewSection => (
        <div
          className={`view ${viewSection} ${viewSection === hoverView ? `hover` : ``}`}
          onClick={() => setView(viewSection)}
        >
          <div
            className='section-header'
            onMouseEnter={() => setHover(viewSection)}
            onMouseLeave={() => setHover('default')}
          >
            <div className='icon'>{icons[viewSection]}</div>
            <div className='view-name'>{viewSection}</div>
          </div>
          <div className='bg-image'><img src={images[viewSection]} /></div>
        </div>
      ))}
      <div className='center'>Palos Verdes, CA</div>
    </div>
    )
  }
  console.log(view)
  console.log(hoverView)
  return (
    <div className="location">
      {view !== 'default' && (
        <div className='view-header'>
          <div className='back' onClick={() => setView('default')}>← Back</div>
          <div className='title'>{view}</div>
        </div>
      )}
      <div className='location-content'>{content}</div>
    </div>
  )
}

export default Location
