import React from "react"
import { CrossIcon, DocumentArrowIcon } from "../Common/Icon"
import SearchInput from "./SearchInput"
import InstallList from "./InstallList"

const DocumentationCategoryList = () => {
  return (
    <div className="max-w-[860px] mx-auto px-6 py-8 md:py-16">
      <SearchInput />
      <InstallList className={"pt-8 md:pt-16 "} />
      <InstallList className={undefined} />
      <InstallList className={undefined} />
      <InstallList className={undefined} />
    </div>
  )
}

export default DocumentationCategoryList
