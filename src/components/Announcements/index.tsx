import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "../Common/Sidebar"
import TabContent from "./TabContent"

const Announcements = ({ handleClose }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              tags
            }
            fields {
              postPath
            }
          }
        }
      }
    }
  `)

  const latest_posts = data.allMdx.edges.slice(0, 4)
  const latest_releases = data.allMdx.edges.filter(
    ({ node }) => node.frontmatter.tags.includes("release-notes")
  )

  const [active, setActive] = useState("Updates")
  return (
    <Sidebar onClose={handleClose} header="Announcements">
      <div className="flex items-center gap-12 relative">
        <span className="h-[1px] w-full bg-[#3E3355] inline-block absolute bottom-[0.7px] z-[-1]"></span>
        <div className="flex space-x-10 whitespace-nowrap   py-3">
          <button onClick={() => setActive("Updates")}>
            <span
              className={`py-3 w-full tab-button-text
                outline-hidden cursor-pointer transition-all duration-200 ease-in-out ${active === "Updates" ? "border-primary border-b-2 text-white" : "text-[#8a809e] border-transparent border-b"}`}
            >
              Updates
            </span>
          </button>
          {/* <button onClick={() => setActive("Events")}>
            <span
              className={`py-3 w-full tab-button-text
                outline-hidden cursor-pointer transition-all duration-200 ease-in-out ${active === "Events" ? "border-primary border-b-2 text-white" : "text-[#8a809e] border-transparent border-b"}`}
            >
              Events
            </span>
          </button> */}
          <button onClick={() => setActive("Releases")}>
            <span
              className={`py-3 w-full tab-button-text
                outline-hidden cursor-pointer transition-all duration-200 ease-in-out ${active === "Releases" ? "border-primary border-b-2 text-white" : "text-[#8a809e] border-transparent border-b"}`}
            >
              Releases
            </span>
          </button>
        </div>
      </div>
      <div className="mt-6 grow overflow-hidden h-full pb-28">
        <div className="overflow-auto h-[88%] scroll-sidebar">
          {active === "Updates" && <TabContent posts={latest_posts} />}
          {/* {active === "Events" && <TabContent posts={latest_posts} />} */}
          {active === "Releases" && <TabContent posts={latest_releases} />}
        </div>
      </div>
    </Sidebar>
  )
}

export default Announcements
