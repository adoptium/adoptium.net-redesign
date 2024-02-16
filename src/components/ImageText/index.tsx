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
      <section className={`image-text  ${className}`}>
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
          <h2 className="md:text-5xl text-[40px] font-semibold leading-[116.667%] md:leading-[120%]">
            {title}
          </h2>
          <p className="md:mt-6 mt-10 mb-5 text-lightgrey text-xl md:text-base leading-[140%] md:leading-[150%] font-normal">
            {description}
          </p>

          <div className="mt-12">
            <Link to={link} placeholder={undefined}>
              <button className="bg-transparent   border-2 border-pink-500/0 text-white text-base leading-[150%] font-normal w-[150px] h-[48px] rounded-2xl gradient-border ">
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
