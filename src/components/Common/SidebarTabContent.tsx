import React from "react"
const testResultsText: string = `# Timestamp: Wed Mar 2 10:51:55 2022 UTC
1..168
ok 1 - MachineInfo_0
  ---
    duration_ms: 581
  ...
ok 2 - ClassLoadingTest_5m_0
  ---
    duration_ms: 304339
  ...
ok 3 - ClassLoadingTest_5m_1
  ---
    duration_ms: 303883
  ...
etc.
  ...
ok 168 - MauveMultiThrdLoad_5m_1
  ---
    duration_ms: 304296
  ...`

const SidebarTabContent = () => {
  return (
    <article>
      <div>
        <p className="texxt-[12px] leading-[133.333%] text-lightgrey mb-0">
          2 weeks ago
        </p>
        <h3 className="text-[20px] leading-[140%] text-white">
          Announcement Title
        </h3>
        <p className="tab-button-text text-lightgrey pt-2">
          Eclipse Temurin offers high-performance, cross-platform, open-source
          Java runtime binaries that are enterprise-ready and Java SE TCK-tested
          for general use in the Java ecosystem.
        </p>
      </div>
      <div className="bg-[#1A0D35] p-3 rounded-lg my-6">
        <pre className="!p-0 !bg-transparent text-white text-[8.889px] leading-[150%] !mb-0">
          {testResultsText}
        </pre>
      </div>
      <span className="h-[1px] w-full bg-[#3E3355] inline-block  my-4"></span>
      <div>
        <p className="texxt-[12px] leading-[133.333%] text-lightgrey mb-0">
          2 weeks ago
        </p>
        <h3 className="text-[20px] leading-[140%] text-white">
          Announcement Title
        </h3>
        <p className="tab-button-text text-lightgrey pt-2">
          Eclipse Temurin offers high-performance, cross-platform, open-source
          Java runtime binaries that are enterprise-ready and Java SE TCK-tested
          for general use in the Java ecosystem.
        </p>
      </div>
      <span className="h-[1px] w-full bg-[#3E3355] inline-block  my-4"></span>
      <div>
        <p className="texxt-[12px] leading-[133.333%] text-lightgrey mb-0">
          2 weeks ago
        </p>
        <h3 className="text-[20px] leading-[140%] text-white">
          Announcement Title
        </h3>
        <p className="tab-button-text text-lightgrey pt-2">
          Eclipse Temurin offers high-performance, cross-platform, open-source
          Java runtime binaries that are enterprise-ready and Java SE TCK-tested
          for general use in the Java ecosystem.
        </p>
      </div>
    </article>
  )
}

export default SidebarTabContent
