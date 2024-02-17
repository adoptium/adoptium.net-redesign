import React, { useState } from "react"
import ReleasingSelector from "../Early-Access-Build/ReleasingSelector"
import MarketPlaceTabButton from "./MarketPlaceTabButton"
import AllReleaseCard from "../Early-Access-Build/AllReleaseCard"

const MarketPlaceAll = () => {
  const [market, setMarket] = useState("microsoft")
  return (
    <div className="max-w-[1264px] mx-auto px-6 pb-20">
      <ReleasingSelector className={"!mb-4"} />

      <MarketPlaceTabButton market={market} setMarket={setMarket} />
      <div className=" hidden md:flex items-center gap-20 border-t border-[#3E3355] pt-7 pl-8 mb-5 mt-12">
        <p className=" text-[#C4BFCE] tab-button-text] mb-0">Build Version</p>
        <p className=" text-[#C4BFCE] tab-button-text mb-0">Release Date</p>
        <p className=" text-[#C4BFCE] tab-button-text mb-0">Build Date</p>
        <p className=" text-[#C4BFCE] tab-button-text mb-0">Vendor</p>
        <p className=" text-[#C4BFCE] tab-button-text mb-0">OS</p>
        <p className=" text-[#C4BFCE] tab-button-text mb-0">Architecture</p>
      </div>
      {market === "microsoft" && <AllReleaseCard />}
      {market === "adoptium" && <AllReleaseCard />}
      {market === "huawei" && <AllReleaseCard />}
      {market === "ibm" && <AllReleaseCard />}
      {market === "azul" && <AllReleaseCard />}
    </div>
  )
}

export default MarketPlaceAll
