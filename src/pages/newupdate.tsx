import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import BlogCard from "../components/NewAndUpdate/BlogCard"
import BlogCardList from "../components/NewAndUpdate/BlogCardList"
import LatestNews from "../components/LatestNews"

const newupdate = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="News"
          title="News & Updates"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"mx-auto max-w-[860px] px-2 w-full"}
        />
        <BlogCard />
        <BlogCardList />
        <LatestNews
          className={"pt-8 pb-8  md:py-16 "}
          title={"Upcoming events"}
        />
      </Layout>
    </>
  )
}

export default newupdate
