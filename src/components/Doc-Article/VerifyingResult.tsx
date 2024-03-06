import React from "react"
const testResultsText = `# Timestamp: Wed Mar 2 10:51:55 2022 UTC
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

const VerifyingResult = () => {
  return (
    <div className="pt-10">
      <h2 className="text-[24px] font-semibold leading-[133.333%] text-white pb-6">
        Verifying Results
      </h2>
      <h3 className="text-lightgrey tab-button-text">
        <p className="mb-4">
          The AQAvit test suite produces test result files and metadata files at
          the end of the test execution. Upon running and passing each of the
          nine required test targets, the result files and metadata files are to
          be gathered and shared. For test targets that contain failures, the
          root cause of the failure should be addressed and the target can be
          rerun and an updated test result file produced and shared
        </p>
        <span>
          Test result files that are produced follow a certain naming convention
          and use a simple TAP (Test Anything Protocol). When top-level targets
          are run serially, a single .tap file is produced, for example:
        </span>
        <h4 className="text-white font-bold my-4">
          Test_openjdk11_hs_sanity.system_aarch64_linux.tap
        </h4>
        <h5>
          contains version, impl/distribution, test target and platform
          information in the name, and its contents look like
        </h5>
      </h3>
      <div className="bg-[#200D46] p-6 rounded-lg my-6">
        <pre className="!p-0 !bg-transparent text-white tab-button-text !mb-0">
          {testResultsText}
        </pre>
      </div>
      <p className="text-lightgrey tab-button-text">
        One can see in this example that the top-level target sanity.system
        contains 168 sub-targets. Of the set of expected subtargets, some may be
        'skipped' due to being filtered out as not applicable for a particular
        version or platform, but there must be none that failed. Within the tap
        file, they will show as 'not ok' if they have failed. Failing subtargets
        can be rerun individually and the tap file produced for that individual
        run can be included in the .zip file to indicate that the binary under
        test was able to pass all expected targets.
      </p>
    </div>
  )
}

export default VerifyingResult
