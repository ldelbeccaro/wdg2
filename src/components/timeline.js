import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/timeline.styl"

const Timeline = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ocean.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Image = <Img fluid={data.placeholderImage.childImageSharp.fluid} />

  return (
    <div className='timeline'>
      <div className='column left'>
        {Image}
      </div>
      <div className='column right'>
        <div className='hidden'></div>
        <div className='events'>
          <div className='date'>
            <div className='date-text'>Friday, July 22</div>
            <div className='event'>
              <div className='datetime'>
                <div className='time'>7pm</div>
              </div>
              <div className='details'>
                <div className='title'>Welcome dinner</div>
                <div className='location'>Terranea Resort • Cielo Point</div>
                <div className='notes'>Dinner will be served buffet-style. Arrive whenever you'd like!</div>
              </div>
            </div>
          </div>
          <div className='date'>
            <div className='date-text'>Saturday, July 23</div>
            <div className='event'>
              <div className='datetime'>
                <div className='time'>4pm - 10pm</div>
              </div>
              <div className='details'>
                <div className='title'>Ceremony & Reception</div>
                <div className='location'>Terranea Resort • Palos Verdes Meadows</div>
                <div className='notes'>Arrive early for a pre-ceremony cocktail!</div>
              </div>
            </div>
            <div className='event'>
              <div className='datetime'>
                <div className='time'>10pm +</div>
              </div>
              <div className='details'>
                <div className='title'>After party</div>
                <div className='location'>TBD</div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='notes'>Attire for all events is beachy formal (e.g., summery cocktail attire).</div>
          <div className='notes'>Parking is available at the Resort for a reduced $15 rate.</div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
