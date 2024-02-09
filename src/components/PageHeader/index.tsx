import React from "react"
import { RedIcon } from "../Common/Icon"

interface Props {
  title: string
  subtitle: string
  description: string
}

const PageHeader = ({
  title,
  subtitle,
  description,
}: Props): null | JSX.Element => {
  if (!title || !subtitle || !description) {
    return null
  }

  return (
    <div className="pt-48 pb-20 overflow-hidden">
      <div className="w-full relative">
        <div className="absolute z-[-1] w-[2396px] h-[1340px] left-[23px] md:left-[112px] top-[21px] md:top-[171px] bg-[#410170] shadow-[0_0_400px_rgba(65,1,112,1)] rounded-full blur-[400px]"></div>
        <div className="absolute z-[-1] w-[1487px] h-[893px] left-[120px] md:left-[676px] top-[120px] md:top-[395px] bg-[#B62987] shadow-[0_0_400px_rgba(182,41,135,1)] rounded-full blur-[400px]"></div>
        <div className="absolute z-[-1] w-[688px] h-[446px] left-[400px] md:left-[1131px] top-[618px] bg-[#FE8492] shadow-[0_0_400px_rgba(254,132,146,1)] rounded-full blur-[400px]"></div>
      </div>
      <div className="mx-auto max-w-[832px] w-full px-6 lg:px-0 flex flex-col items-center justify-center">
        <div className="self-stretch h-52 flex-col justify-center items-center gap-6 flex">
          <div className="self-stretch h-32 flex-col justify-center items-center gap-4 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <RedIcon />
              <div className="text-rose-600 text-base font-bold leading-normal">
                {subtitle}
              </div>
            </div>
            <div
              className="self-stretch text-center text-white text-5xl lg:text-6xl font-semibold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <div className="self-stretch text-center text-grey text-grey-300 text-[20px] font-normal leading-7">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
