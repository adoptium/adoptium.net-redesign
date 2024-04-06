import React, { useState } from "react"
import CommonHeading from "../Common/CommonHeading"

import OurMamberWapper from "../Common/OurMamberWapper"
import OurMamberButton from "../Business-Benefits/OurMamberButton"
import OurMamberFooter from "../Business-Benefits/OurMamberFooter"

const OurSupportTabContent = () => {
  const [active, setActive] = useState(1)
  return (
    <div>
      <div className="py-10 mt-12 max-w-[1264px] px-6 md:px-4 mx-auto">
        <div className="max-w-[684px] mx-auto ">
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
    </div>
  )
}

export default OurSupportTabContent
