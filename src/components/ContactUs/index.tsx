import React from "react"

import "./style.scss"
import { Link } from "../Link"

interface ContactUsProps {
  title: string
  className?: string
  buttontitle: string
}

const ContactUs: React.FC<ContactUsProps> = ({
  title,
  className,
  buttontitle,
}) => {
  return (
    <>
      <section className={`relative  xl:px-0 px-6 md:py-32 py-16 ${className}`}>
        <img
          className="hidden md:block absolute bg-center top-0 left-0  right-0 w-full h-full z-[-10]"
          src="/images/gradient-overlay.png"
          alt="gradient overlay"
        />
        <img
          className="block md:hidden absolute bg-center top-0 left-0  right-0 w-full h-full z-[-10]"
          src="/images/gradient-overlay-mobile.png"
          alt="gradient overlay mobile"
        />
        <div className="max-w-[832px] w-full mx-auto md:py-0 py-8 flex justify-center items-center flex-col text-center md:bg-transparent bg-tones-white rounded-3xl md:backdrop-blur-0 backdrop-blur-12 ">
          <img
            className="!mb-0"
            src="/images/icons/message.svg"
            aria-label="message icon"
          />
          <p className="text-white text-4xl md:text-5xl leading-[122.222%] md:leading-[116.667%] font-normal mt-8 mb-6">
            {title}
          </p>
          <span className=" text-lightgrey tab-button-text">
            Ready to get involved? Fill out our membership form and take the
            first step in shaping the future of Adoptium.
          </span>
          <Link to="/join">
            <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out  hidden md:block mt-8">
              {buttontitle}
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default ContactUs
