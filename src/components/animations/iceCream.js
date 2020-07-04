import React, { useContext, useEffect } from "react"

import "../../styles/animations/ice-cream.styl"

import BackgroundContext from "../../contexts/BackgroundContext"

import FourByTwoFill from "../../images/lego/4x2-fill"
import FourByTwo from "../../images/lego/4x2"
import FourByOneFill from "../../images/lego/4x1-fill"
import FourByOne from "../../images/lego/4x1"
import ThreeByTwoFill from "../../images/lego/3x2-fill"
import ThreeByTwo from "../../images/lego/3x2"
import ThreeByOneFill from "../../images/lego/3x1-fill"
import ThreeByOne from "../../images/lego/3x1"
import TwoByTwoFill from "../../images/lego/2x2-fill"
import TwoByTwo from "../../images/lego/2x2"
import TwoByOneRightFill from "../../images/lego/2x1-right-fill"
import TwoByOneRight from "../../images/lego/2x1-right"
import TwoByOneLeftFill from "../../images/lego/2x1-left-fill"
import TwoByOneLeft from "../../images/lego/2x1-left"
import OneByOneFill from "../../images/lego/1x1-fill"
import OneByOne from "../../images/lego/1x1"

const IceCream = () => {
  const { colorBg } = useContext(BackgroundContext)

  useEffect(() => {
    const blocks = document.querySelectorAll(".block")
    for (const block of blocks) {
      block.classList.add("live")
    }
  }, [])

  const coneColor = "#d4b063"

  return (
    <div className="animation">
      <div className="ice-cream">
        <div className={`block one-left`}>
          <ThreeByTwoFill clr={colorBg} />
        </div>
        <div className={`block one-center`}>
          <FourByTwoFill clr={colorBg} />
        </div>
        <div className={`block one-right`}>
          <ThreeByTwoFill clr={colorBg} />
        </div>
      </div>
      <div className="cone">
        <div className={`block six-left`}>
          <FourByOneFill clr={"#dfc48b"} />
        </div>
        <div className={`block six-center`}>
          <FourByTwoFill clr={"#daba77"} />
        </div>
        <div className={`block six-right`}>
          <FourByOneFill clr={coneColor} />
        </div>
        <div className={`block five-left`}>
          <TwoByTwoFill clr={"#dfc48b"} />
        </div>
        <div className={`block five-right`}>
          <TwoByTwoFill clr={coneColor} />
        </div>
        <div className={`block five-top`}>
          <TwoByOneLeftFill clr={coneColor} />
        </div>
        <div className={`block five-bottom`}>
          <TwoByOneLeftFill clr={"#daba77"} />
        </div>
        <div className={`block four`}>
          <ThreeByTwoFill clr={coneColor} />
        </div>
        <div className={`block three`}>
          <TwoByTwoFill clr={coneColor} />
        </div>
        <div className={`block two`}>
          <TwoByOneRightFill clr={coneColor} />
        </div>
        <div className={`block one`}>
          <OneByOneFill clr={coneColor} />
        </div>
      </div>
    </div>
  )
}

export default IceCream
