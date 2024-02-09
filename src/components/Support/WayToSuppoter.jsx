import React from "react"
import CommonHeading from "../Common/CommonHeading"
import Card from "../Common/Card"

const data = [
  {
    title: "How to contribute",
    description:
      "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime",
    button: "Learn More",
  },
  {
    title: "How to contribute",
    description:
      "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime",
    button: "Learn More",
  },
  {
    title: "How to contribute",
    description:
      "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime",
    button: "Learn More",
  },
]

const WayToSuppoter = () => {
  return (
    <div className="my-16 mx-auto max-w-[1264px] w-full xl:px-0 px-8">
      <CommonHeading
        title={"Ways to support us"}
        description={
          "If you value Eclipse technologies, please consider becoming a sponsor through the Eclipse Foundation. Contributions from users like you help fund the operations of the Adoptium working group. All money contributed to the Eclipse Foundation will be used to support the Eclipse community through the Adoptium working group"
        }
      />
      <div className="mt-16 flex gap-8 justify-center">
        {data.map((item, index) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  )
}

export default WayToSuppoter
