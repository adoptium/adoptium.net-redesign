import React from "react"
import CommonHeading from "../../Common/CommonHeading"
import CommonCard from "../../Common/CommonCard"

const MediaAndPromotion = () => {
  const media = [
    {
      title: "Media & Promotion",
      description:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime",
      button: "Learn More",
      href: "/contributing/",
    },
  ]
  return (
    <section className="bg-[#0E002A] pt-16">
      <div className="pt-16   pb-8 md:pb-16 max-w-[1048px] flex-col lg:flex-row mx-auto w-full px-8 lg:px-2 xl:px-0 flex justify-center gap-16 items-center">
        <div className=" w-full lg:w-[55%] text-center lg:text-left">
          <CommonHeading
            title={"Help promote Temurin"}
            description={
              "If you are one of the millions who download and use Temurin and would like to promote our project and our work, there are several ways you can help. List you company on our Adopters page*, which helps other companies see how Temurin can be used for many workloads in a diverse set of industries. Write a blog post, article or conference talk about the story of your migration to or use of Temurin is helping your company. Participate in a case study if you have a compelling use case that showcases one or more of the benefits of Temurin, such as a more secure supply chain or use of our early-access build to prepare your company to move to best-in-class newer versions of Java(TM). Follow us in social media** and share the stories you find interesting. We thank you for any of the creative ways you help promote Temurin."
            }
          />
        </div>
        <div>
          {media.map((item, index) => (
            <div key={index} className="">
              <CommonCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaAndPromotion
