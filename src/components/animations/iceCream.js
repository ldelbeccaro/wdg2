import React, { useContext } from "react"

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
  const live = colorBg !== "#fff"
  const coneColor = "#d4b063"

  return (
    <div className="animation">
      <div className="ice-cream">
        <div className={`block one-left ${live ? `live` : ``}`}>
          <ThreeByTwoFill clr={colorBg} />
        </div>
        <div className={`block one-center ${live ? `live` : ``}`}>
          <FourByTwoFill clr={colorBg} />
        </div>
        <div className={`block one-right ${live ? `live` : ``}`}>
          <ThreeByTwoFill clr={colorBg} />
        </div>
      </div>
      <div className="cone">
        <div className={`block six-left ${live ? `live` : ``}`}>
          <FourByOneFill clr={"#dfc48b"} />
        </div>
        <div className={`block six-center ${live ? `live` : ``}`}>
          <FourByTwoFill clr={"#daba77"} />
        </div>
        <div className={`block six-right ${live ? `live` : ``}`}>
          <FourByOneFill clr={coneColor} />
        </div>
        <div className={`block five-left ${live ? `live` : ``}`}>
          <TwoByTwoFill clr={"#dfc48b"} />
        </div>
        <div className={`block five-right ${live ? `live` : ``}`}>
          <TwoByTwoFill clr={coneColor} />
        </div>
        <div className={`block five-top ${live ? `live` : ``}`}>
          <TwoByOneLeftFill clr={coneColor} />
        </div>
        <div className={`block five-bottom ${live ? `live` : ``}`}>
          <TwoByOneLeftFill clr={"#daba77"} />
        </div>
        <div className={`block four ${live ? `live` : ``}`}>
          <ThreeByTwoFill clr={coneColor} />
        </div>
        <div className={`block three ${live ? `live` : ``}`}>
          <TwoByTwoFill clr={coneColor} />
        </div>
        <div className={`block two ${live ? `live` : ``}`}>
          <TwoByOneRightFill clr={coneColor} />
        </div>
        <div className={`block one ${live ? `live` : ``}`}>
          <OneByOneFill clr={coneColor} />
        </div>
      </div>
    </div>
  )
}

export default IceCream
