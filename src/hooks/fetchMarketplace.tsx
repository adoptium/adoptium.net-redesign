import { VersionMetaData } from "."
import axios from "axios"

const baseUrl = "https://marketplace-api.adoptium.net"

export async function getAllPkgsForVersion(
  version: number,
  os: string,
  architecture: string,
  package_type: string,
  vendors: string[] = [],
): Promise<MarketplaceRelease[] | null> {
  let params = "?"
  params += "feature_version=" + version

  if (os !== "any") {
    if (os === "alpine-linux") {
      params += "&os=alpine_linux"
    } else {
      params += "&os=" + os
    }
  }

  // loop through vendors and add to params
  if (vendors.length > 0) {
    vendors.forEach(vendor => {
      params += "&vendor=" + vendor
    })
  }

  if (architecture !== "any") {
    params += "&architecture=" + architecture
  }

  const url = baseUrl + "/v1/assets/latestForVendors" + params
  const data = await axios
    .get(url)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return null
    })

  return data
}

export function getImageForDistribution(distribution: string) {
  switch (distribution) {
    case "temurin":
      return "/images/adoptium-logo.png"
    case "redhat":
      return "/images/redhat.svg"
    case "bisheng":
      return "/images/huawei.svg"
    case "zulu":
      return "/images/azul-logo.png"
    case "semeru":
      return "/images/ibm-logo.png"
    default:
      return `/images/${distribution}-logo.png`
  }
}

export interface MarketplaceRelease {
  release_name: string
  vendor: string
  binary: {
    os: string
    architecture: string
    image_type: string
    jvm_impl: string
    package: {
      name: string
      link: URL
      sha265sum: string
      sha256sum_link: URL
      signature_link: URL
    }
    installer?: [
      {
        name: string
        link: URL
        sha265sum: string
        sha256sum_link: URL
        signature_link: URL
      },
    ]
    timestamp: Date
    scm_ref: string
    openjdk_scm_ref: string
    distribution: string
    aqavit_results_link: URL
    tck_affidavit_link: URL
  }
  version: VersionMetaData
}
