import React, { useState } from "react"
import SidebarTabContent from "./SidebarTabContent"

const Sidebar = () => {
  const handlerChange = () => {
    document.body.classList.toggle("sidebar-show")
  }
  const [active, setActive] = useState("Updates")
  return (
    <div className="w-full flex flex-col overflow-hidden h-full max-w-[432px] bg-[#0E002A]  filter-sidebar-show  rounded-[24px] sm:rounded-[24px_0px_0px_24px] p-6  scroll-sidebar">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold leading-[133.333%]">
          Announcements
        </h2>
        <button onClick={handlerChange} className="">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="46"
              height="46"
              rx="23"
              stroke="#3E3355"
              stroke-Width="2"
            />
            <path
              d="M30 18L18 30"
              stroke="white"
              stroke-Width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 18L30 30"
              stroke="white"
              stroke-Width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-12 relative">
        <span className="h-[1px] w-full bg-[#3E3355] inline-block absolute bottom-[0.7px] z-[-1]"></span>
        <div className="flex space-x-10 whitespace-nowrap   py-3">
          <button onClick={() => setActive("Updates")}>
            <span
              className={` py-3  w-full tab-button-text
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === "Updates" ? "border-primary  border-b-2 text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              Updates
            </span>
          </button>
          <button onClick={() => setActive("Ideas")}>
            <span
              className={` py-3  w-full tab-button-text
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === "Ideas" ? "border-primary  border-b-2 text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              Ideas
            </span>
          </button>
          <button onClick={() => setActive("Roadmap")}>
            <span
              className={` py-3  w-full tab-button-text
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === "Roadmap" ? "border-primary  border-b-2 text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              Roadmap
            </span>
          </button>
        </div>
      </div>
      <div className="mt-6 grow overflow-hidden h-full">
        <div className="overflow-auto h-full scroll-sidebar">
          {active === "Updates" && <SidebarTabContent />}
          {active === "Ideas" && <SidebarTabContent />}
          {active === "Roadmap" && <SidebarTabContent />}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
