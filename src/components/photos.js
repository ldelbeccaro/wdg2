import React, { useState, useRef, useEffect } from "react"

import "../styles/photos.styl"

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

const photosOne = [
  { img: hawaii, caption: `Our first Hawai'ian adventure` },
  { img: chelsea, caption: `At Stamford Bridge (Chelsea's stadium)` },
  { img: italy, caption: `Our favorite lookout in Sicily` },
  { img: dannys, caption: `The Hibs' (Laura's soccer team's) home pub` },
  {
    img: serious,
    caption: `Stacey & Eric had an amazing photographer at their wedding`,
  },
]
const photosTwo = [
  {
    img: peace,
    caption: `Ashkon's all-time favorite photo; Laura tried to veto it...`,
  },
  { img: cris, caption: `Cris & Max's wedding` },
  { img: nye, caption: `Hibs holiday party` },
  { img: france, caption: `Women's world cup 2019 🏆 USWNT wins` },
  { img: cluster, caption: `Some pictures to be de-clustered` },
]

const Photo = ({ img, caption, onLoad }) => {
  return (
    <div className="photo">
      <div className="cover">
        <div className="caption">{caption}</div>
      </div>
      <img src={img} alt={caption} onLoad={onLoad} />
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
