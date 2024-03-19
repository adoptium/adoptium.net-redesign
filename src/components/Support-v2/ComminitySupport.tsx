import React from "react"
import Supportv2JavaVersion from "./Supportv2JavaVersion"

const ComminitySupport = () => {
  return (
    <div className="max-w-[1264px] mx-auto px-6 py-8 md:pb-16 md:pt-20">
      <div className="pt-8 md:pt-16">
        <h3 className="text-4xl leading-[122%] md:text-[40px] md:leading-[120%] text-white  font-semibold">
          Community Support
        </h3>
        <h6 className="text-lightgrey mt-4 tab-button-text">
          We are prepared to stand behind our release quality binaries, so each
          build that is identified as a release receives support via the
          Adoptium® community. Our support means that you can raise an issue to
          describe a bug you have found in the build, and we will work with you
          and the appropriate development team to resolve it. Any fixes we
          identify will be delivered as part of the next Adoptium release.
          <p className="pt-3 my-0">
            As a community of open source developers, our commitment is to
            triage any issues raised and champion them in the appropriate source
            code project. Of course, if the problem arises from the way we build
            and test the code we can fix that directly. For dedicated support
            with service level agreements, you should contact commercial
            companies offering support on Temurin binaries. Read Java Is Still
            Free (3.0.0) for some background information about Java support
            options.
          </p>
        </h6>
      </div>
      <div className="pt-8 md:pt-16">
        <h3 className="text-4xl leading-[122%] md:text-[40px] md:leading-[120%] text-white  font-semibold">
          Commercial Support
        </h3>
        <h6 className="text-lightgrey mt-4 tab-button-text">
          We understand that some users prefer commercial, paid-for support of
          Eclipse Temurin. Eclipse does not provide such services but please see
          our Commercial Support page where a list of companies offering
          contracted support is maintained.
        </h6>
      </div>
      <div className="py-8 md:py-16">
        <h3 className="text-4xl leading-[122%] md:text-[40px] md:leading-[120%] text-white  font-semibold">
          Release Roadmap
        </h3>
        <h6 className="text-lightgrey mt-4 tab-button-text">
          The frequency of Temurin releases is guided by the schedule of our
          dependencies.
          <p className="pt-3 my-0">
            OpenJDK provide a new feature release every six months, and a
            maintenance/security update based upon each active release every
            three months. The release dates for those from the OpenJDK project
            are typically the third Tuesday of January, April, July and October.
            We will follow this schedule for publishing binary releases from
            Adoptium to ensure you get the latest, most secure builds.
          </p>
          <p className="pt-3 my-0">
            In addition, every two years since 2021 one feature release will be
            designated as a Long Term Supported (LTS) release. We will support
            LTS releases for at least four years. This assurance will allow you
            to stay on a well-defined code stream, and give you time to migrate
            to the next, new, stable, LTS release when it becomes available.
          </p>
          <p className="pt-3 my-0">
            Based upon this roadmap, here is the timetable showing the current
            release dates of the various OpenJDK releases used to build Eclipse
            Temurin. Note that the dates below are from the upstream OpenJDK
            project page and should not be considered the date which the
            Adoptium project will have binaries available - there will be a
            short delay relative to these dates while we complete our extensive
            build and test cycles which can take up to three weeks. Our Google
            Calendar with our release cycles shows the expected cycle lengths
            for each of our releases. We always prioritise the most popular
            platforms which will typically appear within a few days of these
            dates
          </p>
        </h6>
      </div>
      <Supportv2JavaVersion />
    </div>
  )
}

export default ComminitySupport
