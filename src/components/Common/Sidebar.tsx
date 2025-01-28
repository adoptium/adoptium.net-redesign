import React, { Fragment } from "react"
import { CloseIcon } from "./Icon"
import { Transition } from "@headlessui/react"

interface SidebarProps {
  onClose: () => void
  header: string
  children: React.ReactNode
}
const Sidebar: React.FC<SidebarProps> = ({ header, children, onClose }) => {
  return (
    <Transition
      as={Fragment}
      show={true}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div className="z-[100] fixed top-0 right-0 w-full max-w-[480px] bg-[#0e002a] p-6 pt-8 h-screen rounded-s-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">{header}</h1>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white-700"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </Transition>
  )
}

export default Sidebar
