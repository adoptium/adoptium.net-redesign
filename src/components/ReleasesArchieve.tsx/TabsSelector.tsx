import React, { useState } from "react"
import Buttons from "../LatestReleases/Buttons"

const TabsSelector = () => {
  const [active, setActive] = useState(1)
  return (
    <section className=" py-8 md:py-16">
      <div className="w-full flex flex-col items-start justify-start sm:items-center sm:justify-center mt-[15px] md:mt-[64px]  ">
        <Buttons active={active} setActive={setActive} />
      </div>
    </section>
  )
}

export default TabsSelector
