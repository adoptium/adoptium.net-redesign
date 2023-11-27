import React, { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)
const UiVirtualContent = ({ data }) => {
  const [scaleY, setScaleY] = useState(0)
  const onProgressHandler = (self: any) => {
    setScaleY(self.progress.toFixed(4))
    const progress = self.progress.toFixed(4) * 100

    // FOR FIRST BLOCK ANIMATION
    if (progress < 33 && progress > 0) {
      document.querySelector(".ui-virtual-box-1")?.classList.add("active")
    } else {
      document.querySelector(".ui-virtual-box-1")?.classList.remove("active")
    }
    // FOR FIRST SECOND ANIMATION
    if (progress < 66 && progress > 32.99) {
      document.querySelector(".ui-virtual-box-2")?.classList.add("active")
    } else {
      document.querySelector(".ui-virtual-box-2")?.classList.remove("active")
    }
    // FOR FIRST THIRD ANIMATION
    if (progress < 99 && progress > 65.99) {
      document.querySelector(".ui-virtual-box-3")?.classList.add("active")
    } else {
      document.querySelector(".ui-virtual-box-3")?.classList.remove("active")
    }
  }
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".ui-virtual-wrapper",
      start: "top center",
      end: "bottom center",
      onUpdate: (self: any) => onProgressHandler(self),
      scrub: true,
      markers: false,
    })
  }, [])

  return (
    <div className="max-w-[1048px] ui-virtual-wrapper mt-10 relative mx-auto px-4 sm:px-0">
      <div className="progress absolute top-0 bottom-4 left-0 right-0">
        <div
          style={{ transform: `scaleY(${scaleY})` }}
          className="progress-fill w-full h-full"
        ></div>
      </div>
      <div
        style={{ top: `${scaleY * 100}%` }}
        className="absolute left-[50%] translate-x-[-6px] w-[16px] rounded-full bg-[#FF1464] h-[16px] top-0 bottom-4 right-0"
      ></div>
      {data.map((item: any, index: any) => (
        <div
          key={index}
          className={`flex h-[400px] opacity-50 ui-virtual-common items-center justify-between ui-virtual-box-${
            index + 1
          }`}
        >
          <div className="w-[50%]">
            <img
              src={`/images/icons/${item.image}`}
              alt="Description"
              className={`max-w-[436px] mb-0`}
            />
          </div>
          <div className="w-[50%]">
            <div className="max-w-[436px] ml-auto">
              <h1 className="text-xl md-pt-6 my-5 font-bold">{item.title}</h1>
              <p className="text-base text-grey">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UiVirtualContent
