import React from "react"
import UiMobileScroll from "./mobile"
import UiVirtualContent from "./UiVirtualContent"

import "./UiVirtualScroll.scss"

const data = [
  {
    title: "OpenJDK-Based",
    description:
      "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.",
    image: "feature-layers.svg",
  },
  {
    title: "OpenJDK-Based",
    description:
      "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.",
    image: "feature-layers.svg",
  },
  {
    title: "OpenJDK-Based",
    description:
      "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.",
    image: "feature-layers.svg",
  },
]

const UiVirtualScroll = () => {
  return (
    <>
      <UiMobileScroll data={data} />
      <div className="lg:block hidden open-animation-wrapper">
        <UiVirtualContent data={data} />
      </div>
    </>
  )
}

export default UiVirtualScroll
