import React from "react"

const AllReleasesHeader = () => {
  return (
    <section className="">
      <div className="max-w-[700px] mx-auto">
        <div className=" text-center">
          <h3 className="text-4xl leading-[122%] md:text-5xl md:[116%] text-white hidden md:block font-semibold">
            All Releases
          </h3>
          <h3 className="text-4xl leading-[122%]  text-white block md:hidden font-semibold">
            Releases
          </h3>
          <h6 className="text-[#C4BFCE] mt-6 font-normal text-base">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE
            TCK-tested for general use in the Java ecosystem.
          </h6>
        </div>
      </div>
    </section>
  )
}

export default AllReleasesHeader
