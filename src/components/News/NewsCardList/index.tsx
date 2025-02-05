import React from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "gatsby-plugin-react-i18next"

import EventCard from "../../Events/EventCard"

const NewsCardList = ({ posts, previousPageNumber, previousPageLink, nextPage }) => {
    const data1 = posts.slice(0, 3)
    const data2 = posts.slice(3, 6)
    return (
        <div className="max-w-[1264px] mx-auto px-6  py-8 md:pt-12">
            <div className="flex justify-center gap-6 items-center flex-wrap pt-8 md:pt-12">
                {data1.map((post, index) => (
                    <EventCard key={index} post={post} />
                ))}
            </div>
            <div className="flex justify-center gap-6 items-center flex-wrap py-8 md:py-12">
                {data2.map((post, index) => (
                    <EventCard key={index} post={post} />
                ))}
            </div>
            <div className="flex justify-center items-center gap-8 md:gap-14">
                {previousPageNumber && (
                    <Link to={previousPageLink} rel="prev">
                        <div className="flex items-center gap-3">
                            <span className="cursor-pointer">
                                <FaChevronLeft />
                            </span>
                            <p className="tab-button-text mb-0 hidden md:block">Previous Page</p>
                        </div>
                    </Link>
                )}
                {nextPage && (
                    <Link to={nextPage} rel="next">
                        <div className="flex items-center gap-3">
                            <p className="tab-button-text mb-0 hidden md:block">Next Page</p>
                            <span className="cursor-pointer">
                                <FaChevronRight />
                            </span>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default NewsCardList
