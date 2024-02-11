import React, { useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { DownArrowIcon } from "./AppIcon"

const CommonSelector = ({ options, title }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = item => {
    console.log("Menu item clicked:", item)
    setSelectedOption(item)
    setIsOpen(false)
  }
  return (
    <div>
      <div className="relative">
        <Menu as="div" className="inline-block w-full text-left">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="w-full rounded-[80px] border-[2px] bg-transparent py-3 pl-8 pr-4 border-[#3E3355]">
                  <span className="flex items-center justify-between">
                    {selectedOption ? title : " " + title}
                    <DownArrowIcon />
                  </span>
                </Menu.Button>
              </div>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-left absolute overflow-hidden left-0 mt-2 w-full rounded-[16px] bg-[#3E3355] border-[2px] text-white z-10 border-[#3E3355]"
                >
                  <div className="bg-[#3E3355] overflow-hidden">
                    {options.map(item => (
                      <Menu.Item key={item}>
                        {({ active }) => (
                          <div
                            onClick={() => handleMenuClick(item)}
                            className={`${
                              active
                                ? " text-white bg-[#3E3355]"
                                : " text-white hover:bg-[#2a223a]"
                            } block px-4 py-2 text-sm cursor-pointer`}
                          >
                            {item}
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  )
}

export default CommonSelector
