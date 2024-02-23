import React from "react"
import { RedIcon } from "../Common/Icon"

const NightlyBulidParagraph = () => {
  return (
    <section className="mt-16 px-6   max-w-[1264px] w-full mx-auto">
      <div className="bg-[#200E46]  p-6   lg:p-8 rounded-[24px] border border-[#584A75] ">
        <p className="text-base font-normal text-[#C4BFCE]">
          Please be aware that this archive contains intermediate builds created
          as a development step towards a full release. Intermediate builds are
          ephemeral, and may disappear in the future.The following notice
          applies to intermediate builds:“This is an intermediate build made
          available for testing purposes only. The code is untested and presumed
          incompatible with the Java SE specification. You should not deploy or
          write to this code, but instead use the tested and certified Java SE
          compatible version of the code. Redistribution of this build must
          retain this notice.”
        </p>
        <h4 className="flex gap-3 justify-start items-center px-4 py-3 rounded-[16px] mt-6 w-fit lg:mt-9  bg-[#360F49] text-[#FF1464]">
          <span>
            <RedIcon />
          </span>
          These builds are unsupported and not for use in production
        </h4>
      </div>
    </section>
  )
}

export default NightlyBulidParagraph
