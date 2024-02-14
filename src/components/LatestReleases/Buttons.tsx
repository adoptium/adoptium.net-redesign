import React from "react"

const Buttons = ({ active, setActive }) => {
  return (
    <div className="w-full px-4 ">
      <div className="overflow-auto min-w-full w-full ">
        <div className="flex space-x-10 whitespace-nowrap border-b-[1px] border-[#3E3355]  max-w-[1264px] mx-auto lg:justify-center py-2">
          <button onClick={() => setActive(1)}>
            <span
              className={` py-2  w-full text-base font-normal leading-6 
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === 1 ? "border-primary  border-b text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              All versions
            </span>
          </button>
          <button onClick={() => setActive(2)}>
            <span
              className={` py-2  w-full text-base font-normal leading-6
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === 2 ? "border-primary  border-b text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              JDK 8 LTS
            </span>
          </button>
          <button onClick={() => setActive(3)}>
            <span
              className={` py-2  w-full text-base font-normal leading-6
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === 3 ? "border-primary  border-b text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              JDK 11 LTS
            </span>
          </button>
          <button onClick={() => setActive(4)}>
            <span
              className={` py-2  w-full text-base font-normal leading-6
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === 4 ? "border-primary  border-b text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              JDK 17 LTS
            </span>
          </button>
          <button onClick={() => setActive(5)}>
            <span
              className={` py-2  w-full text-base font-normal leading-6
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === 5 ? "border-primary  border-b text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              JDK 21 LTS
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Buttons
