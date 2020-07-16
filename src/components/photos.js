import React, { useState, useRef, useEffect } from "react"

import "../styles/photos.styl"

import { CloseSvg } from "./svg"

import nye from "../images/about.png"
import hawaii from "../images/location.png"
import chelsea from "../images/chelsea.png"
import italy from "../images/italy.png"
import dannys from "../images/dannys.png"
import serious from "../images/stacey.png"
import peace from "../images/home.png"
import cris from "../images/schedule.png"
import france from "../images/questions.png"
import cluster from "../images/photos.png"

const photos = [
  { img: hawaii, caption: `Our first Hawai'ian adventure` },
  { img: chelsea, caption: `At Stamford Bridge (Chelsea's stadium)` },
  { img: italy, caption: `Our favorite lookout in Sicily` },
  { img: dannys, caption: `The Hibs' (Laura's soccer team's) home pub` },
  {
    img: serious,
    caption: `Stacey & Eric had an amazing photographer at their wedding`,
  },
  {
    img: peace,
    caption: `Ashkon's all-time favorite photo; Laura tried to veto it...`,
  },
  { img: cris, caption: `Cris & Max's wedding` },
  { img: nye, caption: `Hibs holiday party` },
  { img: france, caption: `Women's world cup 2019 🏆 USWNT wins` },
]

export default () => {
  const [expanded, setExpanded] = useState(false)
  const [currentImageHover, setCurrentImageHover] = useState(0)
  const clusterRef = useRef()
  const thumbnailsRef = useRef()

  let counter = 0
  const updateRate = 10
  const shouldUpdate = () => counter++ % updateRate === 0

  const origin = {
    x: 0,
    y: 0,
  }

  useEffect(() => {
    if (thumbnailsRef.current) {
      // find center of container to find relative mouse position
      const target = thumbnailsRef.current
      const rect = target.getBoundingClientRect()
      origin.x = rect.x + Math.floor(target.offsetWidth / 2)
      origin.y = rect.y + Math.floor(target.offsetHeight / 2)
    }
  }, [thumbnailsRef, expanded, origin])

  useEffect(() => {
    // prevent background scrolling when overlay is up
    const body = document.querySelector("body")
    if (expanded) {
      body.setAttribute("style", "position:sticky;overflow:hidden")
    } else {
      body.setAttribute("style", "position:static;overflow:auto")
    }
  }, [expanded])

  const update = e => {
    const x = e.clientX - origin.x
    const y = (e.clientY - origin.y) * -1
    updateTransformStyle(
      (y / clusterRef.current.offsetHeight / 2).toFixed(2),
      (x / clusterRef.current.offsetWidth / 2).toFixed(2)
    )
  }

  const updateTransformStyle = (x, y) => {
    var style = "rotateX(" + x * 100 + "deg) rotateY(" + y * 100 + "deg)"
    const target = clusterRef.current
    target.style.transform = style
    target.style.webkitTransform = style
    target.style.mozTransform = style
    target.style.msTransform = style
    target.style.oTransform = style
  }

  return (
    <div className={`photos${expanded ? ` expanded` : ``}`}>
      <div
        className="expand-photos-container"
        onClick={() => setExpanded(true)}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.keyCode === 13) setExpanded(true)
        }}
      >
        <div className="expand-photos link">View photos</div>
        <div
          className="thumbnails"
          ref={thumbnailsRef}
          onMouseEnter={e => {
            update(e)
          }}
          onMouseMove={e => {
            if (shouldUpdate) {
              update(e)
            }
          }}
          onMouseLeave={() => (clusterRef.current.style = "")}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.keyCode === 13) setExpanded(true)
          }}
        >
          <img
            className="cluster"
            alt="assorted photos of Laura and Ashkon"
            src={cluster}
            ref={clusterRef}
          />
        </div>
      </div>
      <div className="photos-container">
        <div className="photo-background"></div>
        {expanded && (
          <>
            <div
              className="close"
              onClick={() => setExpanded(false)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.keyCode === 13) setExpanded(false)
              }}
            >
              <CloseSvg />
              <div className="text">Scroll down ↓</div>
            </div>
            <div className="images-scroll-container">
              <div className="images">
                {photos.map((photo, i) => {
                  const idx = i + 1
                  return (
                    <div key={idx}>
                      <div
                        className={`image index-${idx}`}
                        onMouseEnter={() => setCurrentImageHover(idx)}
                        role="img"
                      >
                        <img src={photo.img} alt={photo.caption} />
                      </div>
                      <div
                        className={`caption index-${idx}${
                          currentImageHover === idx ? ` show` : ``
                        }`}
                      >
                        {photo.caption}
                      </div>
                    </div>
                  )
                })}
                <div className="image index-10" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
