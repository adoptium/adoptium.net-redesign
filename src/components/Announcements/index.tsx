import React, { useState } from "react"
import Sidebar from "../Common/Sidebar"
import TabContent from "./TabContent"

const Announcements = ({ handleClose }) => {
  const [active, setActive] = useState("Updates")
  return (
    <Sidebar onClose={handleClose} header="Announcements">
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
      <div className="mt-6 grow overflow-hidden h-full pb-28">
        <div className="overflow-auto h-[88%] scroll-sidebar">
          {active === "Updates" && <TabContent />}
          {active === "Ideas" && <TabContent />}
          {active === "Roadmap" && <TabContent />}
        </div>
      </div>
    </Sidebar>
  )
}

export default Announcements
