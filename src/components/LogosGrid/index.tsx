import * as React from "react"
import { Tab } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const LogosGrid = ({ logos, type }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-3">
      <Tab.Group>
        <div id={type} className="w-full flex justify-between">
          <div className={classNames("w-full", "")}>
            <div className="min-w-full overflow-auto">
              <div className="grid grid-cols-4 gap-4 md:gap-6 min-w-[850px] md:min-w-[1220px]">
                {logos.map(data => (
                  <a key={data.name} href={data.url}>
                    <div className="relative w-[200px] md:w-[296px] h-[86px] md:h-[112px] flex justify-center items-center bg-white rounded-3xl border border-white/50 backdrop-blur-xl px-4 py-5">
                      <img
                        src={`/images/${data.logo}`}
                        alt={data.name}
                        className="max-h-20 m-0"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Tab.Group>
    </div>
  )
}

export default LogosGrid
