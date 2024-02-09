import React from "react"

const CommonHeading = ({ title, description }) => (
  <div>
    <h3 className="text-4xl md:text-5xl text-white font-semibold  text-center">
      {title}
    </h3>
    <h6 className="text-[#C4BFCE] text-center mt-6 text-base">{description}</h6>
  </div>
)

export default CommonHeading
