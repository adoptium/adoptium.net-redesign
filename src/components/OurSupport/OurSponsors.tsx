import React from "react"
import CommonHeading from "../Common/CommonHeading"
import OurMamberWapper from "../Common/OurMamberWapper"

const OurSponsors = () => {
  return (
    <>
      <div className="my-6  md:my-20 max-w-[1264px] px-6 md:px-4 mx-auto">
        <div className="max-w-[700px] mx-auto  ">
          <CommonHeading
            title="Our Sponsors"
            description={
              "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem. "
            }
            className={"text-center"}
          />
        </div>
        <OurMamberWapper />
      </div>
    </>
  )
}

export default OurSponsors
