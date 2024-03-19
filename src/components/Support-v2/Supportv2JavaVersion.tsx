import React from "react"

const Supportv2JavaVersion = () => {
  const tabledata = [
    {
      id: 1,
      version: " Java 22",
      firstavailibilty: "  Expected Mar 2024",
      release: " Not available",
      nextrelease: " Expected Mar 2024",
      availibility: " Expected Sep 2024",
    },
    {
      id: 2,
      version: " Java 21 (LTS)",
      firstavailibilty: " Sep 2023",
      release: "17 Oct 2023 jdk-21.0.1+12",
      nextrelease: " 16 Jan 2024 jdk-21.0.2",
      availibility: " At least Dec 2029",
    },
    {
      id: 3,
      version: "Java 20",
      firstavailibilty: "  Mar 2023",
      release: " 18 Jul 2023 jdk-20.0.2+9",
      nextrelease: " EOSL[2]",
      availibility: "Sep 2023",
    },
    {
      id: 4,
      version: " Java 19",
      firstavailibilty: "  Sep 2022",
      release: "17 Jan 2023 jdk-19.0.2+7",
      nextrelease: " EOSL[2]",
      availibility: " Mar 2023",
    },
    {
      id: 5,
      version: " Java 18",
      firstavailibilty: "  Mar 2022",
      release: " 18 Aug 2022 jdk-18.0.2.1+1",
      nextrelease: " EOSL[2]",
      availibility: " Sep 2022",
    },
    {
      id: 6,
      version: " Java 17 (LTS)",
      firstavailibilty: "  Sep 2021",
      release: " 17 Oct 2023 jdk-17.0.9+9.1",
      nextrelease: " 16 Jan 2024jdk-17.0.10",
      availibility: " At least Oct 2027",
    },
    {
      id: 7,
      version: " Java 11 (LTS)",
      firstavailibilty: "  Sep 2018",
      release: " 17 Oct 2023 jdk-11.0.21+9",
      nextrelease: " 16 Jan 2024 jdk-11.0.22",
      availibility: " At least Oct 2027",
    },
    {
      id: 8,
      version: " Java 8 (LTS)",
      firstavailibilty: "  Mar 2014",
      release: " 17 Oct 2023 jdk8u392-b08",
      nextrelease: " 16 Jan 2024 jdk8u402",
      availibility: " At least Nov 2026",
    },
  ]
  return (
    <div className="py-8 md:py-16">
      <div className="w-full overflow-auto min-w-full  bg-[#200D46] p-4 md:p-8 rounded-[24px] ">
        <div className=" flex items-center justify-start   pb-6 w-full border-b border-[#3E3355]   px-3">
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[210px] lg:min-w-[230px]">
            Java Version
          </h3>
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[210px] lg:min-w-[230px]">
            First Availability
          </h3>
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[210px] lg:min-w-[230px]">
            Latest Release
          </h3>
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[210px] lg:min-w-[230px]">
            Next Release Due
          </h3>
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[210px] lg:min-w-[230px]">
            End of Availability [1]
          </h3>
        </div>
        {tabledata.map((data, index) => (
          <div
            key={index}
            className={`flex items-center justify-start min-w-[1030px] lg:min-w-[1134px]   px-3 py-6 md:py-8 rounded-[24px] ${index % 2 !== 0 ? "bg-[#2B194F]" : "bg-transparent"}`}
          >
            <h3 className="tab-button-text text-white  min-w-[210px] lg:min-w-[230px]">
              {data.version}
            </h3>
            <h3 className=" tab-button-text text-white min-w-[210px] lg:min-w-[230px]">
              {data.firstavailibilty}
            </h3>
            <h3 className=" tab-button-text text-white  min-w-[210px] lg:min-w-[230px] ">
              {data.release}
            </h3>
            <h3 className=" tab-button-text text-white  min-w-[210px] lg:min-w-[230px]">
              {data.nextrelease}
            </h3>
            <h3 className=" tab-button-text text-white   min-w-[210px] lg:min-w-[230px]">
              {data.availibility}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Supportv2JavaVersion
