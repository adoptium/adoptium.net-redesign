import React, { useState } from "react"
import OurMamberButton from "./OurMamberButton"
import OurMamberWapper from "../Common/OurMamberWapper"
import OurMamberFooter from "./OurMamberFooter"
import CommonHeading from "../Common/CommonHeading"

const OurTabContent = () => {
  const [active, setActive] = useState(1)
  return (
    <>
      <div className="py-10 max-w-[1264px] mx-auto px-6 md:px-4">
        <div className="max-w-[700px] mx-auto ">
          <CommonHeading
            title="Our Members"
            description={
              "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem. "
            }
            className={"text-center"}
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-[15px] md:mt-[64px]  ">
          <OurMamberButton active={active} setActive={setActive} />
          {active === 1 && <OurMamberWapper />}
          {active === 2 && <OurMamberWapper />}
          {active === 3 && <OurMamberWapper />}
          {active === 4 && <OurMamberWapper />}
          {active === 5 && <OurMamberWapper />}
          {active === 6 && <OurMamberWapper />}
          <OurMamberFooter />
        </div>
      </div>
    </>
  )
}

export default OurTabContent
