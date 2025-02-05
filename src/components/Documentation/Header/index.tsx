import React, { useState } from "react"
import { convert } from "html-to-text"
import { useFlexSearch } from "react-use-flexsearch"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { Trans } from "gatsby-plugin-react-i18next"
import { RedIcon } from "../../Common/Icon"

import "./DocumentationHeader.scss"

interface Props {
  data: {
    localSearchDocs: {
      index: string
      store: object
    }
  }
}

const DocumentationHeader = ({
  data: {
    localSearchDocs: { index, store },
  },
}: Props): null | JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("")

  let hintArray: Array<object> = []
  const unflattenResults = (results: object) => {
    hintArray = []
    for (let result in results) {
      if (!results[result].path.includes("index")) {
        let item: Object = {
          id: results[result].id,
          label: convert(results[result].title),
          link: results[result].path,
        }
        hintArray.push(item)
      }
    }
  }

  const results = useFlexSearch(searchQuery, index, store)
  unflattenResults(results)

  return (
    <div className="relative pt-40 pb-16 md:pb-36 md:pt-60 overflow-hidden">
      <div className="w-full relative">
        <div className="absolute z-[-1] w-[2396px] h-[1340px] left-[23px] md:left-[112px] top-[21px] md:top-[171px] bg-[#410170] shadow-[0_0_400px_rgba(65,1,112,1)] rounded-full blur-[400px]"></div>
        <div className="absolute z-[-1] w-[1487px] h-[893px] left-[120px] md:left-[676px] top-[120px] md:top-[395px] bg-[#B62987] shadow-[0_0_400px_rgba(182,41,135,1)] rounded-full blur-[400px]"></div>
        <div className="absolute z-[-1] w-[688px] h-[446px] left-[400px] md:left-[1131px] top-[618px] bg-[#FE8492] shadow-[0_0_400px_rgba(254,132,146,1)] rounded-full blur-[400px]"></div>
      </div>

      <div className="mx-auto max-w-[1048px] w-full px-6 lg:px-0 flex flex-col items-center justify-center pb-10">
        <div className="self-stretch flex-col justify-center items-center gap-6 flex">
          <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <RedIcon />
              <div className="text-rose-600 text-base font-bold leading-normal">
                <Trans i18nKey="docs.documentation.title" defaults="Documentation" />
              </div>
            </div>
            <div
              className={`self-stretch text-center text-white text-[56px] lg:text-[80px] leading-[114.286%] md:leading-[120%] font-semibold`}
            >
              <Trans i18nKey="docs.documentation.title" defaults="Documentation" />
            </div>
          </div>
          <div
            className="self-stretch text-center text-lightgrey text-[20px] font-normal leading-[140%]"
          >
            <Trans
              i18nKey="docs.documentation.tagline"
              defaults="Everything you need to get started with Adoptium technology"
            />
          </div>
        </div>
      </div>
      <div className="main-search-box d-block mx-auto">
          <Autocomplete
            disablePortal
            data-testid="autocomplete"
            id="combo-box-demo"
            options={hintArray}
            onChange={(event: any, option: any) => {
              window.location.href = option.link
            }}
            renderInput={params => (
              <TextField
                {...params}
                onChange={e => setSearchQuery(e.target.value)}
                label={
                  <Trans
                    i18nKey="docs.documentation.placeholder"
                    defaults="Start typing to search the docs..."
                  />
                }
              />
            )}
          />
        </div>
    </div>
  )
}

export default DocumentationHeader
