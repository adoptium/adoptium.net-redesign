import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/NavBar"
import PageHeader from "../components/PageHeader"

import CommonHeading from "../components/Common/CommonHeading"
import CommonCard from "../components/Common/commonCard"
import ContactUs from "../components/ContactUs"
const SupportUs = () => {
  const data = [
    {
      title: "How to contribute",
      description:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime",
      button: "Learn More",
    },
    {
      title: "Become a sponsor",
      description:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime",
      button: "Become a sponsor",
    },
    {
      title: "Become a member",
      description:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime",
      button: "Learn More",
    },
  ]
  const media = [
    {
      title: "Media & Promotion",
      description:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime",
      button: "Learn More",
    },
  ]

  return (
    <div className="">
      <Layout>
        <Navbar />
        <PageHeader
          title="What we’re trying to achieve"
          subtitle="Support Us"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        />

        <section className="py-16 md:py-32 mx-auto bg-[#14003C] max-w-[1264px] w-full lg:px-2   xl:px-0 px-8">
          <CommonHeading
            className="text-center"
            title={"Ways to support us"}
            description={
              "If you value Eclipse technologies, please consider becoming a sponsor through the Eclipse Foundation. Contributions from users like you help fund the operations of the Adoptium working group. All money contributed to the Eclipse Foundation will be used to support the Eclipse community through the Adoptium working group"
            }
          />

          <div className="mt-16  gap-4 md:gap-8  flex flex-wrap justify-center items-center ">
            {data.map((item, index) => (
              <div key={index} className="">
                <CommonCard data={item} />
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#0E002A]">
          <div className="pt-16  md:pt-32  pb-8 md:pb-16 max-w-[1048px] flex-col lg:flex-row mx-auto w-full px-8 lg:px-2 xl:px-0 flex justify-center gap-16 items-center">
            <div className=" w-full lg:w-[55%] text-center lg:text-left">
              <CommonHeading
                title={"Help promote Temurin"}
                description={
                  "Svennekoloni paheten fronta didoling. Grönt körfält mitt, och astrongar fastän animoji. Doxa exosm morotsmobb diska. Såsuss bröllopsklänning i preppare. Fulparkerare nirad mms biorat. "
                }
                className={undefined}
              />
              <CommonHeading
                description={
                  "Eurosinde processturism vasiminade. Äga frågan bekymringssamtal, alltså prens. Drevkultur tredönde bilmålvakt i ypren. Exoska semiras digt, eller makror. Cosplay faras attefallshus ber. "
                }
                title={undefined}
                className={undefined}
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
        <ContactUs
          title={"Connect with the community"}
          className={undefined}
          buttontitle="Learn More"
        />
      </Layout>
    </div>
  )
}

export default SupportUs
