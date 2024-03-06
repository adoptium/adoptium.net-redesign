import React from "react"
import authorsimg from "../../img/documentation-authors-img.png"
import { PencilIcon } from "../Common/Icon"

const DocumentationAuthors = () => {
  return (
    <div className="max-w-[860px] px-6 mx-auto pb-8 md:pb-16">
      <div className="h-[1px] my-10 w-full mx-auto bg-[#3E3355]"></div>
      <div className="">
        <h3 className="tab-button-text text-white pb-4">
          Documentation authors
        </h3>
        <div className="flex items-center mb-10">
          <img className="max-w-[191px] mb-0" src={authorsimg} alt="" />
        </div>
        <div className="newscard-2 !bg-transparent px-6 py-8 rounded-2xl flex flex-wrap items-center justify-between gap-3">
          <div>
            <span>
              <PencilIcon />
            </span>
          </div>
          <div className="flex flex-col ">
            <div>
              <h3 className="text-[24px] font-semibold leading-[133.333%] text-white">
                Help us make these docs great!
              </h3>
              <p className="tab-button-text text-white mb-0 pt-2">
                All Adoptium docs are open source. See something that's wrong or
                unclear?Edit this page
              </p>
            </div>
            <div>
              <button className="bg-transparent mt-6 gradient-border border-2 border-pink-500/0 text-white text-base leading-[125%] font-normal w-[146px] h-[48px] rounded-[80px]  ">
                Edit this page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentationAuthors
