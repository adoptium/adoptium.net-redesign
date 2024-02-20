// This file is used to store defaults which can be accessed by other Javascript/Typescript functions

export const oses = [
  {
    name: "Linux",
    value: "linux",
  },
  {
    name: "Alpine Linux",
    value: "alpine-linux",
  },
  {
    name: "Windows",
    value: "windows",
  },
  {
    name: "macOS",
    value: "mac",
  },
  {
    name: "AIX",
    value: "aix",
  },
  {
    name: "Solaris",
    value: "solaris",
  },
]

export const arches = [
  {
    name: "x64",
    value: "x64",
  },
  {
    name: "x86",
    value: "x86",
  },
  {
    name: "aarch64",
    value: "aarch64",
  },
  {
    name: "s390x",
    value: "s390x",
  },
  {
    name: "ppc64le",
    value: "ppc64le",
  },
  {
    name: "ppc64",
    value: "ppc64",
  },
  {
    name: "armv7l",
    value: "arm",
  },
  {
    name: "sparcv9",
    value: "sparcv9",
  },
]

export const packageTypes = [
  {
    name: "JDK",
    value: "jdk",
  },
  {
    name: "JRE",
    value: "jre",
  },
]

let defaultPackageType = "jdk"
let defaultArchitecture = "x64"

export { defaultPackageType, defaultArchitecture }
