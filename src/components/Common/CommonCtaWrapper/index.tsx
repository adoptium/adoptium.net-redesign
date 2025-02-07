import React, { useState } from "react"
import OSSelector from "../OSSelector"
import { AixIcon, SolarisIcon } from "../Icon"
import { FaApple, FaWindows } from "react-icons/fa"
import { FcLinux } from "react-icons/fc"
import { SiAlpinelinux } from "react-icons/si"
import CommonDownloader from "../CommonDownloader"
import { defaultPackageType } from "../../../util/defaults"

interface Binary {
  extension: string
  size: number
  link: string
  installer_link?: string
  installer_extension?: string
  installer_size?: number
  installer_checksum?: string
  type: string
  checksum: string
}

interface Architecture {
  release_name: string
  release_date: string
  binaries: Binary[]
}

interface OSData {
  os: string
  architectures: Record<string, Architecture>
}

interface Result {
  os: string
  architecture: string
  release_name: string
  release_date: string
  binaries: Binary[]
}

interface ActiveArchitectures {
  [key: string]: string
}

interface SelectedPackageType {
  [key: string]: string
}

interface CommonCtaWrapperProps {
  results: Result[]
  openModalWithChecksum: (checksum: string) => void
}

const osIcons = {
  windows: FaWindows,
  mac: FaApple,
  "alpine-linux": SiAlpinelinux, // Assuming alpine-linux uses the same icon as other Linux distros
  linux: FcLinux,
  aix: AixIcon,
  solaris: SolarisIcon,
}

const CommonCtaWrapper: React.FC<CommonCtaWrapperProps> = ({
  results,
  openModalWithChecksum,
}) => {
  if (!results || !Array.isArray(results)) {
    return <div>Loading...</div>
  }

  const [activeArchitectures, setActiveArchitectures] =
    useState<ActiveArchitectures>({})
  const [selectedPackageType, setSelectedPackageType] =
    useState<SelectedPackageType>({})

  const handlePackageTypeChange = (os, newType) => {
    setSelectedPackageType(prevTypes => ({
      ...prevTypes,
      [os]: newType,
    }))
  }

  const osData = results.reduce<Record<string, OSData>>((acc, item) => {
    const osKey = item.os
    if (!acc[osKey]) {
      acc[osKey] = {
        os: item.os,
        architectures: {},
      }
    }

    if (!acc[osKey].architectures[item.architecture]) {
      acc[osKey].architectures[item.architecture] = {
        release_name: item.release_name,
        release_date: item.release_date,
        binaries: [],
      }
    }

    acc[osKey].architectures[item.architecture].binaries.push(...item.binaries)

    return acc
  }, {})

  const handleArchitectureChange = (os, arch) => {
    setActiveArchitectures({ ...activeArchitectures, [os]: arch })
  }

  return (
    <div className="max-w-[1264px] space-y-8 w-full pb-16 md:pb-32 mx-auto px-6 xl:px-0 rounded-[24px] border-white">
      {Object.entries(osData).map(([os, data]) => {
        const IconComponent = osIcons[os] || FcLinux
        const activeArch =
          activeArchitectures[os] || Object.keys(data.architectures)[0] // Default to the first architecture
        const archData = data.architectures[activeArch]

        return (
          <div
            key={os}
            className="flex justify-between border flex-wrap border-[#554772] rounded-[24px] !bg-[#200E46] items-start p-6 lg:p-8"
          >
            <div className="w-full lg:w-[45%] flex flex-col">
              <OSSelector
                operatingSystem={os}
                svgComponent={<IconComponent size={30} />}
                activeIndex={activeArch}
                onActiveChange={arch => handleArchitectureChange(os, arch)}
                onPackageTypeChange={newType =>
                  handlePackageTypeChange(os, newType)
                }
                buttons={Object.keys(data.architectures).map(arch => ({
                  label: arch,
                  active: arch === activeArch,
                }))}
              />
            </div>
            <div className="flex flex-col w-full lg:w-[50%] mt-8 lg:mt-0">
              <h5 className="pb-6 border-b-[1px] text-2xl font-semibold border-[#3E3355]">
                {`Temurin ${archData.release_name} - ${new Date(archData.release_date).toLocaleDateString()}`}
              </h5>
              {archData.binaries
                .filter(
                  binary =>
                    binary.type ===
                    (selectedPackageType[os]?.toUpperCase() ||
                      defaultPackageType.toUpperCase()),
                )
                .map((binary, index) => (
                  <React.Fragment key={index}>
                    <CommonDownloader
                      openModalWithChecksum={openModalWithChecksum}
                      obj={{
                        label: `${binary.extension.toUpperCase()}, ${binary.size}Mb`,
                        link: binary.link,
                        os: os,
                        arch: activeArch,
                        pkg_type: binary.type,
                        java_version: archData.release_name,
                        checksum: binary.checksum,
                      }}
                    />
                    {binary.installer_link &&
                      binary.type ===
                        (selectedPackageType[os]?.toUpperCase() ||
                          defaultPackageType.toUpperCase()) && (
                        <CommonDownloader
                          openModalWithChecksum={openModalWithChecksum}
                          obj={{
                            label: `${binary.installer_extension && binary.installer_extension.toUpperCase()}, ${binary.installer_size}Mb`,
                            link: binary.installer_link,
                            os: os,
                            arch: activeArch,
                            pkg_type: binary.type,
                            java_version: archData.release_name,
                            checksum: binary.installer_checksum,
                          }}
                        />
                      )}
                  </React.Fragment>
                ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CommonCtaWrapper
