import React from "react"

const CommonHeading = ({ title, description, className }) => (
  <div className={className}>
    <h3 className="text-4xl leading-[122%] md:text-5xl md:[116%] text-white  font-semibold">
      {title}
    </h3>
    <h6 className="text-[#C4BFCE] mt-6 font-normal text-base">{description}</h6>
  </div>
)

export default CommonHeading
