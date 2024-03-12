import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"
import LatestNewsSlider from "./LatestNewsSlider"
import { RedIcon } from "../Common/Icon"

const LatestNews = ({ className, title }) => {
  const data = useStaticQuery(graphql`
    {
      allMdx(limit: 4, sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              postPath
            }
          }
        }
      }
    }
  `)

  const newsmap = data.allMdx.edges
  const set1 = newsmap.slice(0, 2)
  const set2 = newsmap.slice(2, 4)

  return (
    <>
      <div
        className={`bg-purple py-16 lg:pt-32 pb-16 xl:px-0 lg:px-8 px-0 ${className}`}
      >
        <div className="mx-auto max-w-[1264px] w-full flex lg:flex-row flex-col items-start lg:items-center justify-center lg:space-x-8 xl:space-x-16 relative overflow-hidden">
          <div className="max-w-[436px] w-full mb-16 lg:mb-0 px-6">
            <h2 className="here text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900">
              {title}
            </h2>
            <h3 className="text-xl font-normal leading-7 text-grey mt-6 mb-8">
              Eclipse Temurin offers high-performance, cross-platform,
              open-source Java runtime binaries that are enterprise-ready and
              Java SE TCK-tested for general use in the Java ecosystem.
            </h3>
            <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[154px] h-[48px] block ">
              See all news
            </button>
          </div>
          <div className="max-w-[780px] w-full lg:flex gap-4 xl:gap-x-8 hidden  ">
            {/* First set of news items */}
            <div className="max-w-[374px] w-full lg:flex hidden flex-col space-y-4 xl:space-y-8">
              {set1.map((card, more) => (
                <div key={more} className="newscard-2 rounded-3xl  p-8 xl:p-10">
                  <h2 className="text-primary text-lg leading-6 font-bold m-0 flex items-center gap-x-3">
                    <RedIcon />
                    News
                  </h2>
                  <p className="text-white text-lg xl:text-xl font-normal leading-6 xl:leading-7 my-2">
                    {card.node.frontmatter.title}
                  </p>
                  <span className="text-sm text-grey font-normal leading-5 block">
                    {card.node.frontmatter.date}
                  </span>
                  <Link
                    to={card.node.fields.postPath}
                    className="py-3 text-base underline font-bold leading-6 text-white mt-2 block border-white w-fit"
                    placeholder={undefined}
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
            {/* Second set of news items */}
            <div className="max-w-[374px] w-full lg:flex hidden flex-col space-y-4 xl:space-y-8 mt-16">
              {set2.map((card, more) => (
                <div
                  key={more}
                  className="newscard-2  !rounded-3xl p-8 xl:p-10"
                >
                  <h2 className="text-primary text-lg leading-6 font-bold m-0 flex items-center gap-x-3">
                    <RedIcon />
                    News
                  </h2>
                  <p className="text-white text-lg xl:text-xl font-normal leading-6 xl:leading-7 my-2">
                    {card.node.frontmatter.title}
                  </p>
                  <span className="text-sm text-grey font-normal leading-5 block">
                    {card.node.frontmatter.date}
                  </span>
                  <Link
                    to={card.node.fields.postPath}
                    className="py-3 text-base underline font-bold leading-6 text-white mt-2 block border-white w-fit"
                    placeholder={undefined}
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full  flex relative lg:hidden">
            <LatestNewsSlider newsmap={newsmap} />
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestNews
