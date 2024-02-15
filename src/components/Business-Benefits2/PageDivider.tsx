import React from "react"
import myImage from "../../img/page-divider.png"
const PageDivider = () => {
  return (
    <>
      <div className="py-[30px] md:py-[56px]  block lg:hidden">
        <img src={myImage} className="w-full h-6" alt="scroll-divider" />
      </div>{" "}
    </>
  )
}

export default PageDivider
