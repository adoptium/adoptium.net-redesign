import React, { useState } from "react"
const workflowText = `name: Run AQAvit

on:
  workflow_dispatch: # Allows the job to be manually triggered

env: # Links to the JDK build under test and the native test libs
  USE_TESTENV_PROPERTIES: true
  BINARY_SDK: https://github.com/adoptium/temurin11-binaries/releases/download/jdk-11.0.14.1%2B1/OpenJDK11U-jdk_x64_linux_hotspot_11.0.14.1_1.tar.gz
  NATIVE_LIBS: https://ci.adoptium.net/job/build-scripts/job/jobs/job/jdk11u/job/jdk11u-linux-x64-hotspot/lastSuccessfulBuild/artifact/workspace/target/OpenJDK11U-testimage_x64_linux_hotspot_2022-02-12-17-06.tar.gz

jobs:
  run_aqa:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        target: [sanity, extended]
        suite: [functional, openjdk, system, perf]
    include:
      - target: special
        suite: functional

steps:

  - name: Run AQA Tests - $\{matrix.target\}.$\{matrix.suite\}
    uses: adoptium/run-aqa@v2
    with:
      version: '11'
      jdksource: 'customized'
      customizedSdkUrl: $\{env.BINARY_SDK\} $\{env.NATIVE_LIBS\}
      aqa-testsRepo: 'adoptium/aqa-tests:v0.9.6-release' # Make sure this branch is set to the latest release branch
      build_list: $\{matrix.suite\}
      target: _$\{matrix.target\}.$\{matrix.suite\}

  - uses: actions/upload-artifact@v2
    if: always() # Always run this step (even if the tests failed)
    with:
      name: test_output
      path: ./**/output_*/*.tap`

const DetailExecutionFaq = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const handleToggleFaq = index => {
    setOpenFaq(prevOpenFaq => (prevOpenFaq === index ? null : index))
  }
  const faqdata = [
    {
      id: 1,
      question: " Run AQAvit via Command-line",
    },
    {
      id: 1,
      question: " Run AQAvit via Github Workflow",
    },
  ]
  return (
    <>
      <div className=" w-full">
        <div>
          {faqdata.map((faq, index) => (
            <div
              key={faq.id}
              className={`flex flex-col  justify-center py-3 px-3  border-[#3E3355] border rounded-[16px] mb-6 ${
                openFaq === index ? "" : ""
              }`}
            >
              <div
                onClick={() => handleToggleFaq(index)}
                className="flex justify-between gap-2 items-center cursor-pointer"
              >
                <h3 className="text-[20px] font-semibold leading-[28px]">
                  {faq.question}
                </h3>
                <span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="46"
                      height="46"
                      rx="23"
                      stroke="#3E3355"
                      stroke-Width="2"
                    />
                    <path
                      className={` transition duration-700 ease-in-out ${
                        openFaq === index ? "rotate-90" : "rotate-0"
                      }`}
                      d="M24 17V31"
                      stroke="white"
                      stroke-Width="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 24H31"
                      stroke="white"
                      stroke-Width="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={`flex transition duration-700 ease-in-out items-center ${
                  openFaq === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-7 opacity-0"
                }`}
              >
                {openFaq === index && (
                  <div className="w-full">
                    <p className="my-0 py-2">
                      The AQAvit project created a Github action that allows for
                      running the AQAvit test suite from workflow files. The
                      run-aqa action in the run-aqa repository allows users to
                      pass in custom OpenJDK binaries for verification. Here is
                      an example workflow file that can run sanity level targets
                      on the 3 supported platforms available as Github runners:
                    </p>
                    <div className="bg-[#200D46] p-6 rounded-lg ">
                      <pre className="!p-0 !bg-transparent text-white tab-button-text !mb-0 !overflow-hidden">
                        {workflowText}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DetailExecutionFaq
