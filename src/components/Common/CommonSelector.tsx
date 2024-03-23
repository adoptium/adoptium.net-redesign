import { Listbox, Transition } from "@headlessui/react"
import React from "react"
import { Fragment, useState } from "react"
import { DownArrowIcon } from "../Common/AppIcon"

interface ListItem {
  name: string
}

interface ListBoxSelectProps {
  list: ListItem[]
  className?: string
}

export default function CommonSelector({
  list,
  className,
}: ListBoxSelectProps) {
  const [selected, setSelected] = useState<ListItem>(list[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button
          className={`relative w-full flex items-center justify-between  rounded-[80px] border-[2px] bg-transparent py-3 pl-8 pr-4 border-[#3E3355] ${className}`}
        >
          <span className="flex items-center justify-between text-nowrap">
            {selected.name}
          </span>
          <span>
            <DownArrowIcon />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="origin-top-left absolute overflow-hidden left-0 mt-2 w-full rounded-[16px] bg-[#200D46] border-[2px] text-white z-10 border-[#3E3355]">
            {list.map((obj, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-4 ${
                    active
                      ? "text-white bg-[#3E3355]"
                      : "text-white hover:bg-[#2a223a]"
                  }`
                }
                value={obj}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {obj.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
