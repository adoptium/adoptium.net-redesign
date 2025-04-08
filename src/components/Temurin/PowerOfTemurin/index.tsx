import React from "react"
import { Link } from "../../Link"
import { Trans } from "gatsby-plugin-react-i18next"
import UiVirtualScroll from "../../UiVirtualScroll"

const PowerOfTemurin = () => {
  return (
    <div className="bg-purple py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col items-center justify-center mb-16">
        <h2 className="text-center text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900">
          The Power of Eclipse Temurin&trade;
        </h2>
        <h3 className="text-center text-base leading-6 font-normal text-grey mt-6">
          <Trans
            i18Key="home.power.temurin.description"
            defaults="OpenJDK Based: Eclipse Temurin offer high-performance, cross-platform, open source Java™ Runtimes binaries that are enterprise-ready and Java SE TCK certified and AQAvit verified for general use in the Java Ecosystem. "
          />
        </h3>
        <Link to="/business-benefits">
          <button className="bg-transparent mt-10 border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[191px] h-[48px] rounded-2xl gradient-border">
            <Trans
              i18Key="home.power.temurin.button"
              defaults="Business Benefits"
            />
          </button>
        </Link>
      </div>
      <UiVirtualScroll />
    </div>
  )
}

export default PowerOfTemurin
