import React, { useContext, useEffect, useRef } from "react"

import "../../styles/animations/ice-cream.styl"

import BackgroundContext from "../../contexts/BackgroundContext"

import FourByTwoFill from "../../images/lego/4x2-fill"
import FourByOneFill from "../../images/lego/4x1-fill"
import ThreeByTwoFill from "../../images/lego/3x2-fill"
import TwoByTwoFill from "../../images/lego/2x2-fill"
import TwoByOneRightFill from "../../images/lego/2x1-right-fill"
import TwoByOneLeftFill from "../../images/lego/2x1-left-fill"
import OneByOneFill from "../../images/lego/1x1-fill"

const IceCream = () => {
  const { colorBg } = useContext(BackgroundContext)
  const animationRef = useRef(null)

  useEffect(() => {
    if (animationRef.current) {
      const blocks = animationRef.current.querySelectorAll(".block")
      for (const block of blocks) {
        block.classList.add("live")
      }
    }
  }, [animationRef])

  const coneColor = "#d4b063"

  return (
    <div className="animation" ref={animationRef}>
      <div className="ice-cream">
        <div className="four">
          <div className={`block top`}>
            <TwoByTwoFill clr={colorBg} />
          </div>
        </div>
        <div className="three">
          <div className={`block top`}>
            <ThreeByTwoFill clr={colorBg} />
          </div>
          <div className={`block left`}>
            <ThreeByTwoFill clr={colorBg} />
          </div>
          <div className={`block bottom`}>
            <TwoByTwoFill clr={colorBg} />
          </div>
          <div className={`block right`}>
            <ThreeByTwoFill clr={colorBg} />
          </div>
        </div>
        <div className="two">
          <div className={`block top-left`}>
            <TwoByTwoFill clr={colorBg} />
          </div>
          <div className={`block top-right`}>
            <TwoByTwoFill clr={colorBg} />
          </div>
          <div className={`block left`}>
            <ThreeByTwoFill clr={colorBg} />
          </div>
          <div className={`block center`}>
            <FourByTwoFill clr={colorBg} />
          </div>
          <div className={`block right`}>
            <ThreeByTwoFill clr={colorBg} />
          </div>
        </div>

        <div className={`block one top-left`}>
          <TwoByTwoFill clr={colorBg} />
        </div>
        <div className={`block one top-right`}>
          <TwoByTwoFill clr={colorBg} />
        </div>
        <div className={`block one left`}>
          <ThreeByTwoFill clr={colorBg} />
        </div>
        <div className={`block one center`}>
          <FourByTwoFill clr={colorBg} />
        </div>
        <div className={`block one right`}>
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
