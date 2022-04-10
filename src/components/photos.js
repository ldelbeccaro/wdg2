import React, { useState, useRef, useEffect } from "react"

import "../styles/photos.styl"

import hawaii from "../images/location.png"
import chelsea from "../images/chelsea.png"
import italy from "../images/italy.png"
import dannys from "../images/dannys.png"
import serious from "../images/stacey.png"
import peace from "../images/home.png"
import cris from "../images/schedule.png"
import france from "../images/questions.jpeg"
import subway from "../images/subway.jpeg"
import stacey from "../images/stacey1.jpeg"

const photosOne = [
  { img: hawaii, caption: `Our special place` },
  { img: italy, caption: `Sicilia` },
  { img: serious, caption: `` },
  { img: chelsea, caption: `CHELSEA FC ⚽ 🔵` },
  { img: dannys, caption: `` },
]
const photosTwo = [
  { img: peace, caption: `` },
  { img: cris, caption: `` },
  { img: france, caption: `Women's world cup 2019 🏆` },
  { img: subway, caption: `` },
  { img: stacey, caption: `` },
]

const Photo = ({ img, caption, onLoad }) => {
  return (
    <div className="photo">
      <img src={img} alt={caption} onLoad={onLoad} />
      <div className="caption">{caption}</div>
    </div>
  )
}

export default () => {
  const columnOneRef = useRef(null)
  const columnTwoRef = useRef(null)
  const scrollRef = useRef(null)
  const [oneScrollTop, setOneScrollTop] = useState(0)
  const [showPhotos, setShowPhotos] = useState(false)

  const handleScroll = () => {
    const scrollPosition = scrollRef.current.parentNode.scrollTop
    const totalHeight = scrollRef.current.scrollHeight
    const twoHeight = columnTwoRef.current.scrollHeight

    if (scrollPosition > totalHeight / 2) {
      scrollRef.current.parentNode.scrollTop = 1
    } else if (scrollPosition < 1) {
      scrollRef.current.parentNode.scrollTop = totalHeight / 2
    }

    columnOneRef.current.parentNode.scrollTop = oneScrollTop - scrollPosition
    columnTwoRef.current.parentNode.scrollTop =
      scrollPosition * (twoHeight / totalHeight)
  }

  const adjustOnLoad = () => {
    if (columnOneRef.current) {
      const height = columnOneRef.current.scrollHeight
      columnOneRef.current.parentNode.scrollTop = height
      setOneScrollTop(columnOneRef.current.parentNode.scrollTop)
    }
    if (scrollRef.current) {
      const height = Math.max(
        columnOneRef.current.scrollHeight,
        columnTwoRef.current.scrollHeight
      )
      scrollRef.current.setAttribute("style", `height: ${height}px`)
    }
  }

  useEffect(() => {
    adjustOnLoad()
  }, [columnOneRef.current, scrollRef.current, showPhotos])

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", () => adjustOnLoad())
    }
    if (columnOneRef.current) {
      const photos = columnOneRef.current.querySelectorAll(".photo")
      for (const photo of photos) {
        columnOneRef.current.appendChild(photo.cloneNode(true))
      }
    }
    if (columnTwoRef.current) {
      const photos = columnTwoRef.current.querySelectorAll(".photo")
      for (const photo of photos) {
        columnTwoRef.current.appendChild(photo.cloneNode(true))
      }
    }
  }, [])

  return (
    <div className={`photos${showPhotos ? ` show` : ``}`}>
      <div
        className="toggle-photos"
        onClick={() => setShowPhotos(!showPhotos)}
      >{`${showPhotos ? `Hide` : `Show`} photos`}</div>
      <div className="photos-bg" />
      <div className="photos-mask" onScroll={handleScroll}>
        <div className="scrolling-mask" ref={scrollRef} />
      </div>
      <div className="column-container">
        <div className="scrolling-container">
          <div className="column column-one" ref={columnOneRef}>
            {photosOne.map(photo => (
              <Photo
                key={photo.img}
                img={photo.img}
                caption={photo.caption}
                onLoad={adjustOnLoad}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="column-container">
        <div className="scrolling-container">
          <div className="column column-two" ref={columnTwoRef}>
            {photosTwo.map(photo => (
              <Photo
                key={photo.img}
                img={photo.img}
                caption={photo.caption}
                onLoad={adjustOnLoad}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
