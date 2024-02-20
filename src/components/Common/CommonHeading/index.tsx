import React from "react"

interface CommonHeadingProps {
  title?: string
  description: string
  className?: string
}

const CommonHeading: React.FC<CommonHeadingProps> = ({
  title,
  description,
  className,
}) => (
  <div className={className}>
    {title && (
      <h3 className="text-4xl leading-[122%] md:text-5xl md:[116%] text-white  font-semibold">
        {title}
      </h3>
    )}
    <p className="text-[#C4BFCE] mt-6 font-normal text-base">{description}</p>
  </div>
)

export default CommonHeading
