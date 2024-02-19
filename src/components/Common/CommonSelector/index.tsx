import React from "react"
import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { FaChevronDown } from "react-icons/fa"

interface ListItem {
  name: string
  value: string
}

interface ListBoxSelectProps {
  list: ListItem[]
  selectorUpdater: (value: string) => void
}

export default function CommonSelector({
  list,
  selectorUpdater,
}: ListBoxSelectProps) {
  const [selected, setSelected] = useState<ListItem>(list[0])

  const handleChange = (newValue: ListItem) => {
    setSelected(newValue)
    selectorUpdater(newValue.value)
  }

  return (
    <Listbox value={selected} onChange={handleChange}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full flex items-center justify-between  rounded-[80px] border-[2px] bg-transparent py-3 pl-8 pr-4 border-[#3E3355]">
          <span className="flex items-center justify-between text-nowrap">
            {selected.name}
          </span>
          <span>
            <FaChevronDown />
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
