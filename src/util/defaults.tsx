// This file is used to store defaults which can be accessed by other Javascript/Typescript functions

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
