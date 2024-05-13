import React from "react"
import CommonSelector, { ListItem } from "../CommonSelector"

interface SelectorHeaderProps {
  title: string[]
  data: ListItem[][]
  selectorUpdater: ((value: string) => void)[]
  defaultValues?: string[]
}

const SelectorHeader: React.FC<SelectorHeaderProps> = ({
  title,
  data,
  selectorUpdater,
  defaultValues,
}) => {
  return (
    <div className="max-w-[1264px] mx-auto w-full">
      <button className="sm:hidden flex justify-between items-center w-full text-[16px] font-normal leading-[24px] px-4 py-3 rounded-[80px] border-[2px] border-[#3E3355]">
        Filter
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4.16699V15.8337"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16602 10H15.8327"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className="w-full lg:overflow-visible overflow-auto hidden sm:block">
        <div className="flex items-center gap-5 justify-between flex-nowrap min-w-[1039px]">
          {data.map((list, index) => {
            let defaultVal: ListItem | undefined
            if (defaultValues && defaultValues[index]) {
              defaultVal = list.find(item => item.value === defaultValues[index])
            }
            return (
              <div key={index} className="flex flex-col gap-4 w-full">
                <h3 className="text-[16px] font-normal leading-[24px] text-grey">
                  {title[index]}
                </h3>
                <CommonSelector
                  list={list}
                  defaultValue={defaultVal}
                  selectorUpdater={selectorUpdater[index]}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SelectorHeader
