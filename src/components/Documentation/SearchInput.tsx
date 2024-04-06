import React from "react"
import { SearchIcon } from "../Common/Icon"
import CommonSelector from "../Common/CommonSelector"

const SearchInput = () => {
  const Architeccture = [
    { name: "All Documentation" },
    { name: "Install Temurin" },
    { name: "aarch53" },
    { name: "aarch6478" },
  ]
  return (
    <>
      <div className="flex justify-between items-center flex-col sm:flex-row  gap-4">
        <div className=" border-[#3E3355] border-2 rounded-[80px] px-6 py-3 flex justify-between items-center gap-2 sm:max-w-[436px] w-full">
          <input
            className="bg-transparent outline-none text-white tab-button-text w-full placeholder:text-white"
            placeholder="Search here..."
            type="text"
          />

          <SearchIcon />
        </div>
        <div className=" w-full sm:max-w-[212px]">
          <CommonSelector list={Architeccture} />
        </div>
      </div>
    </>
  )
}

export default SearchInput
