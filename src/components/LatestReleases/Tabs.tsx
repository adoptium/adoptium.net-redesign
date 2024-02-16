import React, { useState } from "react"
import Buttons from "./Buttons"
import ButtonContent from "./ButtonContent"
import TemurinBuilds from "../NightlyBuilds/TemurinBUilds"

const Tabs = () => {
  const [active, setActive] = useState(1)
  return (
    <section className="pt-8 md:pt-16 px-6 w-full  ">
      <div className="w-full flex flex-col h-full items-start justify-start sm:items-center sm:justify-center">
        <Buttons active={active} setActive={setActive} />
        {active === 1 && <ButtonContent />}
        {active === 2 && <ButtonContent />}
        {active === 3 && <TemurinBuilds />}
        {active === 4 && <ButtonContent />}
        {active === 5 && <ButtonContent />}
      </div>
    </section>
  )
}

export default Tabs
