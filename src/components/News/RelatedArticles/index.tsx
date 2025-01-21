import React from "react"
import RelatedArticleCard from "./RelatedArticleCard"

const RelatedArticle = () => {
    return (
        <div className="max-w-[1264px] px-6 mx-auto py-8 md:py-16">
            <div className="max-w-[670px] mx-auto flex flex-col items-center justify-center">
                <div className="text-5xl leading-[116%] text-white text-center font-semibold">
                    Related Articles
                </div>
                <div className="text-lightgrey mt-6 tab-button-text text-center">
                    Eclipse Temurin offers high-performance, cross-platform, open-source
                    Java runtime binaries that are enterprise-ready and Java SE TCK-tested
                    for general use in the Java ecosystem.
                </div>
                <button className="rounded-2xl bg-transparent gradient-border mt-10 border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[160px] h-[48px] block ">
                    See all articles
                </button>
            </div>

            <div className="flex justify-center flex-wrap items-center gap-5 pt-16">
                <RelatedArticleCard />
                <RelatedArticleCard />
                <RelatedArticleCard />
            </div>
        </div>
    )
}

export default RelatedArticle