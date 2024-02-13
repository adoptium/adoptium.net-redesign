import React from "react"
import { Link } from "gatsby-plugin-react-i18next"

const ImageText = ({
  title,
  description,
  link,
  linkText,

  className,
  icon,
}) => {
  return (
    <>
      <section
        className={`py-16 max-w-[1048px] w-full mx-auto flex justify-center items-center lg:justify-between xl:px-0 px-6 ${className}`}
      >
        <div className="max-w-[400px] w-full hidden lg:block">
          <img
            src="/images/icons/experience.png"
            className="mb-0"
            alt="scroll-divider"
          />
        </div>
        <div className=" md:hidden flex justify-center items-center mb-4">
          {icon}
        </div>
        <div className="lg:max-w-[560px] w-full  ">
          <h2 className="md:text-5xl text-[40px] font-semibold leading-[48px] md:leading-[56px]">
            {title}
          </h2>
          <p className="md:mt-6 mt-10 mb-5s text-[#C4BFCE] text-xl md:text-base leading-6 font-normal">
            {description}
          </p>

          <div className={`${className}`}>
            <Link to={link} placeholder={undefined}>
              <button className="bg-transparent mt-6 md:mt-10 border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[150px] h-[48px] rounded-2xl gradient-border ">
                {linkText}
              </button>{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageText
