import React from "react"

// ====================================== add text-alignment what you needed  ==============================================

const CommonHeading = ({ title, description, className }) => (
  <div className={className}>
    <h3 className="text-4xl leading-[122%] md:text-5xl md:leading-[116%] text-white  font-semibold">
      {title}
    </h3>
    <h6 className="text-[#C4BFCE] mt-6 tab-button-text">{description}</h6>
  </div>
)

export default CommonHeading
