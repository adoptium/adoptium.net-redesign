import React from "react"
import CommonSelector from "../Common/CommonSelector"
const InputWapperHeader = () => {
  const JobTitle = [
    { name: "Please select" },
    { name: "Develpor" },
    { name: "IT manager" },
    { name: "Anlyst" },
    { name: "Other" },
  ]
  const Industry = [
    { name: "Please select" },
    { name: "Energy / Utilities" },
    { name: "Government & Research" },
    { name: "Automotive" },
    { name: "Other" },
  ]
  return (
    <>
      <div>
        {" "}
        <div className="flex flex-wrap justify-between items-center gap-5 md:gap-0">
          <div className="flex-col gap-2  w-full md:w-[49%]">
            <label
              className="tab-button-text text-lightgrey"
              htmlFor="FirstName"
            >
              First Name
            </label>
            <div className="border-[#3E3355] border-2 p-3 mt-3 rounded-2xl items-center gap-2">
              <input
                className="bg-transparent outline-none tab-button-text placeholder:text-white"
                placeholder="A-Z"
                type="text"
                id="FirstName"
                name="FirstName"
                required
              />
            </div>
          </div>
          <div className="flex-col gap-2  w-full md:w-[49%]">
            <label
              className="tab-button-text text-lightgrey"
              htmlFor="Last Name"
            >
              First Name
            </label>
            <div className="border-[#3E3355] border-2 p-3 mt-3 rounded-2xl items-center gap-2">
              <input
                className="bg-transparent outline-none tab-button-text placeholder:text-white"
                placeholder="A-Z"
                type="text"
                id="Last Name"
                name="Last Name"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  justify-between items-center gap-5 md:gap-0 mt-6">
          <div className="flex-col gap-2   w-full md:w-[49%]">
            <label
              className="tab-button-text text-lightgrey"
              htmlFor="Organisation"
            >
              Organisation
            </label>
            <div className="border-[#3E3355] border-2 p-3 mt-3 rounded-2xl items-center gap-2">
              <input
                className="bg-transparent outline-none tab-button-text placeholder:text-white"
                placeholder=""
                type="text"
                id="Organisation"
                name="Organisation"
                required
              />
            </div>
          </div>
          <div className="flex-col gap-2   w-full md:w-[49%]">
            <label
              className="tab-button-text text-lightgrey"
              htmlFor=" Email Address"
            >
              Email Address
            </label>
            <div className="border-[#3E3355] border-2 p-3 mt-3 rounded-2xl items-center gap-2">
              <input
                className="bg-transparent outline-none tab-button-text placeholder:text-white"
                placeholder=""
                type="email"
                id="Email Address"
                name="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between  items-center gap-5 md:gap-0 mt-6">
          <div className=" w-full md:w-[49%] flex-col gap-2">
            <label className="tab-button-text text-lightgrey" htmlFor="">
              Job Title
            </label>
            <div className="mt-3 !rounded-2xl ">
              <CommonSelector
                list={JobTitle}
                className="relative w-full flex  justify-between  !border-[#3E3355] !border-2 !p-3 !mt-3 !rounded-2xl items-center"
              />
            </div>
          </div>
          <div className=" w-full md:w-[49%] flex-col gap-2">
            <label className="tab-button-text text-lightgrey" htmlFor="">
              Industry
            </label>
            <div className="mt-3 !rounded-2xl ">
              <CommonSelector
                list={Industry}
                className="relative w-full flex  justify-between  !border-[#3E3355] !border-2 !p-3 !mt-3 !rounded-2xl items-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InputWapperHeader
