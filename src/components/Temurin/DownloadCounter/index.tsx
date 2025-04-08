import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { DiGithubFull } from "react-icons/di";

const DownloadCounter = () => {
  const data = useStaticQuery(graphql`
    {
      downloadCount {
        total
      }
    }
  `)

  const [count, setCount] = useState(0)
  const [animate, setAnimate] = useState(false)
  const counterRef = useRef(null)

  const endValue = data.downloadCount.total // End value of counter
  const startValue = endValue - 10 // Start value of counter
  const duration = 500 // Duration of the animation in milliseconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true)
          let startTimestamp = null
          const step = timestamp => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min(
              // @ts-ignore
              (timestamp - startTimestamp) / duration,
              1,
            )
            setCount(
              Math.floor(progress * (endValue - startValue) + startValue),
            )
            if (progress < 1) {
              window.requestAnimationFrame(step)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { root: null, threshold: 0.5 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [animate])

  return (
    <div className="bg-purple py-8 lg:py-16" ref={counterRef}>
      <div className="mx-auto max-w-[832px] w-full px-6 lg:px-0 flex flex-col items-center justify-center">
        <h2 className="text-center text-[36px] sm:text-5xl font-semibold leading-[44px] sm:leading-[56px] text-white-900">
          Powering Millions Worldwide with Eclipse Temurin
        </h2>
        <h3 className="text-center text-[64px] lg:text-[104px] leading-[72px] lg:leading-[120px] font-semibold text-pink text-pink-800 my-8">
          {count.toLocaleString()}
        </h3>
        <div className="flex  items-center gap-4 flex-wrap sm:gap-6 justify-center">
          <span>
            <DiGithubFull size={70} />
          </span>
          <p className="text-[16px] font-normal leading-6 text-white mb-0">
            Total Downloads/Docker pulls ever
          </p>
          {/* <button className="bg-transparent border-2 border-pink-500/0 text-white font-bold w-[148px] h-[48px] rounded-2xl gradient-border">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default DownloadCounter
