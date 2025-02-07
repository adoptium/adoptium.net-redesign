import React, { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)
const UiVirtualContent = ({ data, ...props }) => {
  const [scaleY, setScaleY] = useState(0)
  const onProgressHandler = (self: any) => {
    setScaleY(self.progress.toFixed(4))
    const progress = self.progress.toFixed(4) * 100

    // Dynamic step calculation
    const step = 100 / data.length

    data.forEach((_, index) => {
      const lowerBound = step * index
      const upperBound = step * (index + 1) - 0.01

      const element = document.querySelector(`.ui-virtual-box-${index + 1}`)
      if (element) {
        if (progress > lowerBound && progress <= upperBound) {
          element.classList.add("active")
        } else {
          element.classList.remove("active")
        }
      }
    })
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
  }, [data])

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
            {item.subtext !== undefined ? (
              <div className="flex flex-col justify-center items-center">
                <img
                  src={`/images/icons/${item.image}`}
                  alt="Description"
                  className={`max-w-[436px] mb-0`}
                />
                <h2 className="text-5xl font-medium">{item.subtext.title}</h2>
                <p className="text-2xl text-[#ff1464]">{item.subtext.amount}</p>
              </div>
            ) : (
              <img
                src={`/images/icons/${item.image}`}
                alt="Description"
                className={`max-w-[436px] mb-0`}
              />
            )}
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
