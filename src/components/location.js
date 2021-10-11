import { Link } from "gatsby"
import React, { useState } from "react"

import send from "../images/icons/send.svg"
import briefcase from "../images/icons/briefcase.svg"
import sun from "../images/icons/sun.svg"
import italy from "../images/italy.png"
import ski from "../images/ski.jpg"
import group from "../images/group.jpeg"

import "../styles/location.styl"

const Location = () => {
  const [view, setView] = useState('default')
  const [hoverView, setHover] = useState('')

  const icons = {
    'things to do': <img src={send} />,
    'travel': <img src={briefcase} />,
    'where to stay': <img src={sun} />,
  }
  const images = {
    'things to do': ski,
    'travel': italy,
    'where to stay': group,
  }

  let content;
  if (view === 'things to do') {
    content = (
      <div className='todo'>
        <div className='section'>
          <div className='section-title'>Restaurants</div>
          <div className='notes'>There are endless amazing restaurants in LA, but these are some of our favorites.</div>
          <div className='notes'>
            <ul>
              <li>• Near PV: Terranea has some excellent restaurants; we LOVE Gushiya Ramen and Sushi; Pinky's Hot Box has delicious chicken sandwiches</li>
              <li>• In the greater LA area: Felix Trattoria for the best Italian food in the US (must make a reservation relatively far in advance); Craft</li>
            </ul>
          </div>
        </div>
        <div className='section'><div className='section-title'>Hikes</div><div className='notes'>Palos Verdes is famous for its hiking trails! Many of them run through Terranea :) and you can find a great list <a href="https://www.alltrails.com/us/california/rancho-palos-verdes">here</a>.</div></div>
        <div className='section'><div className='section-title'>Beaches</div><div className='notes'>Closest beach: Torrance beach<br />Other iconic beaches: Venice, Manhattan Beach, Santa Monica, or Orange County (Newport or Laguna Beach)</div></div>
        <div className='section'><div className='section-title'>Golf</div><div className='notes'>There's a very fun (and very windy) par 3 course at Terranea, and a few other golf courses nearby. (We recommend PVGC.)</div></div>
        <div className='section'><div className='section-title'>City of Angels</div><div className='notes'>The Los Angeles area is huge! From Disneyland to Hollywood, there's a ton you can see — LA is your oyster :)</div></div>
      </div>
    )
  } else if (view === 'where to stay') {
    content = (
      <div className='hotel-list'>
        <div className='section'>
          <div className='section-title'>Terranea Resort</div>
          <div className='subsection'>
            <div className='notes'>We have a very large room block at Terranea Resort! This is where all of our events will be hosted, so we highly recommend staying here if you can.</div>
            <div className='instructions'>You must make reservations via phone to get our discount. Our reduced rate is $350/night for a Resort View room and $425/night for an Ocean View room; request either one when you call. Note that our rates extend 3 days before and 3 days after our event dates (7/22-24) if you'd like to come early or stay late!</div>
            <div className='instructions'>Call Terranea at (855) 938-4047 and press 2 (reservations), then 3 (new reservations) when you get to the menu. Tell them it's for the "Del Beccaro-Nosrat wedding" and provide your name, address, email address, requested room type, and check-in/check-out dates. Check-in is at 4pm and check-out is at 11am.</div>
            <div className='instructions'>You must make your reservations by June 20, 2022!</div>
          </div>
        </div>
        <div className='section'>
          <div className='section-title'>Other options</div>
          <div className='notes'>Note: Because all of our events are at Terranea and have a large room block there, transportation outside of the resort will not be provided. If you're staying outside of the resort, we ask that you arrange your own transportation to and from events. Rideshare (Lyft, Uber, etc.) is our recommended mode of transportation.</div>
          <div className='subsection'>
            <div className='title'>Hotels</div>
            <div className='notes'>There are more cost effective hotel options in Redondo Beach, Torrance, or San Pedro that are still relatively close to our venue.</div>
            <div className='instructions'><a href="https://www.google.com/travel/hotels?utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaXgpAEjwyJTB4ODBkZDRiZGE3MDU0OGQ5ZjoweGMxNDQ3ZjViNmU5Njk0YjQ6E1JhbmNobyBQYWxvcyBWZXJkZXMaABIaEhQKBwjmDxAHGBYSBwjmDxAHGBgYAjICCAEqCwoHKAE6A1VTRBoA&rp=SAI&destination=Rancho%20Palos%20Verdes&ap=MAFasAIKBQjIARAAIgNVU0QqFgoHCOUPEAoYDBIHCOUPEAoYDRgBKACwAQFYAWgBcgQIAhgAmgE8EhNSYW5jaG8gUGFsb3MgVmVyZGVzGiUweDgwZGQ0YmRhNzA1NDhkOWY6MHhjMTQ0N2Y1YjZlOTY5NGI0ogEfCggvbS8wcjB0axITUmFuY2hvIFBhbG9zIFZlcmRlc6oBBwoDCPABGACqAQ8KAggSEgMImwESAghoGAGqARIKAggUEgIIMBICCFISAghOGAGqAQcKAwicARgAqgETCgIIHBICCFESAghzEgMInQIYAaoBEgoCCBESAggqEgIIQBICCDgYAaoBEgoCCC4SAghWEgIIPRICCEsYAaoBBgoCCCwYAKoBEgoCCDUSAggyEgIIXRICCBAYAZIBAiABaAA&ved=0CAAQ5JsGahcKEwjovvyvrMDzAhUAAAAAHQAAAAAQaA">Here's</a> a list of all nearby hotels available on the applicable dates.</div>
          </div>
          <div className='subsection'>
            <div className='title'>Airbnb</div>
            <div className='instructions'>There are also <a href="https://www.airbnb.com/s/Rancho-Palos-Verdes--CA--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Rancho%20Palos%20Verdes%2C%20CA%2C%20United%20States&place_id=ChIJn41UcNpL3YARtJSWblt_RME&checkin=2022-07-22&checkout=2022-07-24&adults=2&source=structured_search_input_header&search_type=autocomplete_click">plenty of Airbnbs in the area</a> if you prefer to secure your own accommodations.</div>
          </div>
        </div>
      </div>
    )
  } else if (view === 'travel') {
    content = (
      <div className='travel'>
        <div className='section'>
          <div className='section-title'>✈️</div>
          <div className='notes'>Terranea Resort is about 30 mintes from both LAX (Los Angeles) and LGB (Long Beach). Both are great airports to fly into!</div>
        </div>
        <div className='section'>
          <div className='section-title'>🚙</div>
          <div className='notes'>A maps search for "Terranea Resort" should do it. As you pull up, they will have your name and tell you where to go. There is parking at the Resort, but we recommend using rideshare apps (Lyft, Uber, etc.) to get around as car rentals can be expensive.</div>
        </div>
      </div>
    )
  } else if (view === 'default') {
    content = (
    <div className='menu'>
      {['where to stay', 'travel', 'things to do'].map(viewSection => (
        <div
          className={`view ${viewSection} ${viewSection === hoverView ? `hover` : ``}`}
        >
          <div
            className='section-header'
            onClick={() => setView(viewSection)}
            onMouseEnter={() => setHover(viewSection)}
            onMouseLeave={() => setHover('default')}
          >
            <div className='icon'>{icons[viewSection]}</div>
            <div className='view-name'>{viewSection}</div>
          </div>
          <div className='bg-image'><img src={images[viewSection]} /></div>
        </div>
      ))}
      <div className='center'>Terranea Resort • Palos Verdes, CA</div>
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
          <div className='filler'></div>
        </div>
      )}
      <div className='location-content'>{content}</div>
    </div>
  )
}

export default Location
