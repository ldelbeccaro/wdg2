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
      <div className="lego-to-do">
        <div>
          - figure out how to make image better after legos actually fall — just
          change image to a full rectangle?
        </div>
        <a href="https://www.google.com/search?q=soccer+ball+legos&rlz=1C5CHFA_enUS896US896&sxsrf=ALeKk03ksN5fLWifLv9VG_iAeDskpB0v9A:1592639380868&source=lnms&tbm=isch&sa=X&ved=2ahUKEwio47SE9I_qAhVDLX0KHaFPDsIQ_AUoAnoECA0QBA&biw=1280&bih=798&dpr=2#imgrc=Hf4nuZNo6PdA2M">
          soccer lego
        </a>
        <a href="https://www.google.com/search?q=lego+ice+cream+cone&tbm=isch&ved=2ahUKEwjp-MGS55DqAhV2AzQIHTsQAkAQ2-cCegQIABAA&oq=lego+ice+cream+cone&gs_lcp=CgNpbWcQAzICCAAyAggAMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgQIABAYOgQIIxAnOgQIABBDOgUIABCxAzoHCAAQsQMQQzoECAAQHlCgwwFYwdkBYPPaAWgBcAB4AIABdogBoA2SAQQxOC4ymAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ei=SDjuXum0H_aG0PEPu6CIgAQ&bih=798&biw=1280&rlz=1C5CHFA_enUS896US896#imgrc=dnOjKwaebi286M">
          ice cream lego
        </a>
      </div>
    </div>
  )
}

export default IceCream
