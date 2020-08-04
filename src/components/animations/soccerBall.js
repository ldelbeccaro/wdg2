import React, { useContext, useEffect, useRef } from "react"

import "../../styles/animations/soccer-ball.styl"

import BackgroundContext from "../../contexts/BackgroundContext"

import FourByTwoFill from "../../images/lego/4x2-fill"
import ThreeByOneFill from "../../images/lego/3x1-fill"
import ThreeByTwoFill from "../../images/lego/3x2-fill"
import TwoByTwoFill from "../../images/lego/2x2-fill"
import OneByOneFill from "../../images/lego/1x1-fill"

const SoccerBall = () => {
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

  const ballColor = "#fff"

  return (
    <div className="animation" ref={animationRef}>
      <div className="field">
        <div className="eighteen-1" />
        <div className="eighteen-2" />
        <div className="half" />
        <div className="circle" />
      </div>
      <div className="colors">
        <div className="cluster one">
          <div className="block top">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
          <div className="block left">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
          <div className="block right">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
        </div>
        <div className="cluster two">
          <div className="block top">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
          <div className="block left">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
          <div className="block right">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
        </div>
        <div className="cluster three">
          <div className="block top">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
          <div className="block left">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
          <div className="block right">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
        </div>
        <div className="cluster four">
          <div className="block top">
            <OneByOneFill clr={colorBg} withstroke />
            <OneByOneFill clr={colorBg} />
          </div>
        </div>
      </div>

      <div className="ball">
        <div className="six">
          <div className={`block top`}>
            <TwoByTwoFill clr={ballColor} withstroke />
            <TwoByTwoFill clr={ballColor} />
          </div>
        </div>

        <div className="five">
          <div className={`block top`}>
            <ThreeByTwoFill clr={ballColor} withstroke />
            <ThreeByTwoFill clr={ballColor} />
          </div>
          <div className={`block left`}>
            <ThreeByTwoFill clr={ballColor} withstroke />
            <ThreeByTwoFill clr={ballColor} />
          </div>
          <div className={`block bottom`}>
            <TwoByTwoFill clr={ballColor} withstroke />
            <TwoByTwoFill clr={ballColor} />
          </div>
          <div className={`block right`}>
            <ThreeByTwoFill clr={ballColor} withstroke />
            <ThreeByTwoFill clr={ballColor} />
          </div>
        </div>

        <div className="four">
          <div className={`block top-left`}>
            <TwoByTwoFill clr={ballColor} withstroke />
            <TwoByTwoFill clr={ballColor} />
          </div>
          <div className={`block top-right`}>
            <TwoByTwoFill clr={ballColor} withstroke />
            <TwoByTwoFill clr={ballColor} />
          </div>
          <div className={`block left`}>
            <ThreeByTwoFill clr={ballColor} withstroke />
            <ThreeByTwoFill clr={ballColor} />
          </div>
          <div className={`block center`}>
            <FourByTwoFill clr={ballColor} withstroke />
            <FourByTwoFill clr={ballColor} />
          </div>
          <div className={`block right`}>
            <ThreeByTwoFill clr={ballColor} withstroke />
            <ThreeByTwoFill clr={ballColor} />
          </div>
        </div>

        <div className="three">
          <div className={`block top-left`}>
            <TwoByTwoFill clr={ballColor} withstroke />
            <TwoByTwoFill clr={ballColor} />
          </div>
          <div className={`block top-right`}>
            <TwoByTwoFill clr={ballColor} withstroke />
            <TwoByTwoFill clr={ballColor} />
          </div>
          <div className={`block left`}>
            <ThreeByTwoFill clr={ballColor} withstroke />
            <ThreeByTwoFill clr={ballColor} />
          </div>
          <div className={`block center`}>
            <FourByTwoFill clr={ballColor} withstroke />
            <FourByTwoFill clr={ballColor} />
          </div>
          <div className={`block right`}>
            <ThreeByTwoFill clr={ballColor} withstroke />
            <ThreeByTwoFill clr={ballColor} />
          </div>
        </div>

        <div className="two">
          <div className={`block top-left`}>
            <TwoByTwoFill clr={ballColor} withstroke />
            <TwoByTwoFill clr={ballColor} />
          </div>
          <div className={`block top-right`}>
            <TwoByTwoFill clr={ballColor} withstroke />
            <TwoByTwoFill clr={ballColor} />
          </div>
          <div className={`block left`}>
            <ThreeByTwoFill clr={ballColor} withstroke />
            <ThreeByTwoFill clr={ballColor} />
          </div>
          <div className={`block center`}>
            <FourByTwoFill clr={ballColor} withstroke />
            <FourByTwoFill clr={ballColor} />
          </div>
          <div className={`block right`}>
            <ThreeByTwoFill clr={ballColor} withstroke />
            <ThreeByTwoFill clr={ballColor} />
          </div>
        </div>

        <div className="one">
          <div className={`block left`}>
            <ThreeByOneFill clr={ballColor} withstroke />
            <ThreeByOneFill clr={ballColor} />
          </div>
          <div className={`block right`}>
            <FourByTwoFill clr={ballColor} withstroke />
            <FourByTwoFill clr={ballColor} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoccerBall
