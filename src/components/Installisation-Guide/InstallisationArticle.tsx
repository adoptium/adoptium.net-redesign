import React from "react"
import VerifyingResult from "../Doc-Article/VerifyingResult"

const InstallisationArticle = () => {
  return (
    <div className="max-w-[860px] mx-auto px-6 pt-8 md:pt-32">
      <h3 className="text-lightgrey tab-button-text">
        <p className="mb-4">
          The AQAvit project was created to “make quality certain to happen.”
          AQAvit verification is achieved through the process of running and
          passing a prescribed and versioned set of tests in the AQAvit test
          suite. The Eclipse Foundation Quality Verification Software License
          (QVSL) requires those who wish to verify their product to share a
          summary of the test results by which verification was achieved. This
          document describes how to run the AQAvit verification tests, check
          verification has passed, and collect the required test results for
          publication.
        </p>
        <span>
          AQAvit verification is one of the criteria for listing in the Adoptium
          Marketplace. Leveraging the AQAvit test suite to ensure the quality of
          the binaries listed in the Adoptium Marketplace not only communicates
          to consumers how serious we are about quality, but also consolidates
          the good verification practices of the Adoptium Working Group members
          under a centralized effort. AQAvit aligns its test suite standards
          with the ever-changing requirements of the user base.
        </span>
      </h3>
      <div className="pt-10">
        <h2 className="text-[24px] font-semibold leading-[133.333%] text-white pb-6">
          Overview
        </h2>
        <h3 className="text-lightgrey tab-button-text">
          <p className="mb-4">
            The AQAvit project was created to “make quality certain to happen.”
            AQAvit verification is achieved through the process of running and
            passing a prescribed and versioned set of tests in the AQAvit test
            suite. The Eclipse Foundation Quality Verification Software License
            (QVSL) requires those who wish to verify their product to share a
            summary of the test results by which verification was achieved. This
            document describes how to run the AQAvit verification tests, check
            verification has passed, and collect the required test results for
            publication.
          </p>
          <span>
            AQAvit verification is one of the criteria for listing in the
            Adoptium Marketplace. Leveraging the AQAvit test suite to ensure the
            quality of the binaries listed in the Adoptium Marketplace not only
            communicates to consumers how serious we are about quality, but also
            consolidates the good verification practices of the Adoptium Working
            Group members under a centralized effort. AQAvit aligns its test
            suite standards with the ever-changing requirements of the user
            base.
          </span>
        </h3>
      </div>
      <div className="pt-10">
        <h2 className="text-[24px] font-semibold leading-[133.333%] text-white pb-6">
          AQAvit Test Targets to Run
        </h2>
        <h3 className="text-lightgrey tab-button-text">
          <p className="mb-4">
            The tests are divided into different groups and those groups are
            split into 3 levels. This logical categorization of the tests
            provides flexibility and granularity and can be visually represented
            in a grid.
          </p>
          <span>
            For the current release of AQAvit, the required set of top-level
            test targets to run are [sanity.functional, extended.functional,
            special.functional, sanity.openjdk, extended.openjdk, sanity.system,
            extended.system, sanity.perf, extended.perf]. In subsequent AQAvit
            releases, targets will be added to raise quality bar even higher.
          </span>
        </h3>
      </div>
      <VerifyingResult />
    </div>
  )
}

export default InstallisationArticle
