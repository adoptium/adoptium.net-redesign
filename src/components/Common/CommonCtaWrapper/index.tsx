import React, { useState } from "react"
import OSSelector from "../OSSelector"
import { SolarisIcon } from "../AppIcon"
import { FaApple, FaWindows, FaLinux } from "react-icons/fa"
import { SiAlpinelinux } from "react-icons/si";
import CommonDownloader from "../CommonDownloader"
import { defaultPackageType } from "../../../util/defaults";

const osIcons = {
  windows: FaWindows,
  mac: FaApple,
  "alpine-linux": SiAlpinelinux, // Assuming alpine-linux uses the same icon as other Linux distros
  linux: FaLinux,
  aix: SolarisIcon, // Assuming you have an AIX icon
  "solaris": SolarisIcon,
};

const CommonCtaWrapper = ({ results }) => {
  if (!results || !Array.isArray(results)) {
    return <div>Loading...</div>;
  }

  const [activeArchitectures, setActiveArchitectures] = useState({});
  const [selectedPackageType, setSelectedPackageType] = useState({});

  const handlePackageTypeChange = (os, newType) => {
    setSelectedPackageType(prevTypes => ({
      ...prevTypes,
      [os]: newType.name,
    }));
  };

  const osData = results.reduce((acc, item) => {
    const osKey = item.os;
    if (!acc[osKey]) {
      acc[osKey] = {
        os: item.os,
        architectures: {},
      };
    }

    if (!acc[osKey].architectures[item.architecture]) {
      acc[osKey].architectures[item.architecture] = {
        release_name: item.release_name,
        release_date: item.release_date,
        binaries: [],
      };
    }

    acc[osKey].architectures[item.architecture].binaries.push(...item.binaries);

    return acc;
  }, {});

  const handleArchitectureChange = (os, arch) => {
    setActiveArchitectures({ ...activeArchitectures, [os]: arch });
  };

  return (
    <div className="max-w-[1264px] space-y-8 w-full pb-16 md:pb-32 mx-auto px-6 xl:px-0 rounded-[24px] border-white">
      {Object.entries(osData).map(([os, data]) => {
        const IconComponent = osIcons[os] || FaLinux;
        const activeArch = activeArchitectures[os] || Object.keys(data.architectures)[0]; // Default to the first architecture
        const archData = data.architectures[activeArch];

        return (
          <div key={os} className="flex justify-between border flex-wrap border-[#554772] rounded-[24px] !bg-[#200E46] items-start p-6 lg:p-8">
            <div className="w-full lg:w-[35%] flex flex-col">
            <OSSelector
              operatingSystem={os}
              svgComponent={<IconComponent size={30}/>}
              activeIndex={activeArch}
              onActiveChange={(arch) => handleArchitectureChange(os, arch)}
              onPackageTypeChange={(newType) => handlePackageTypeChange(os, newType)}
              selectedPackageType={selectedPackageType[os] || defaultPackageType}
              buttons={Object.keys(data.architectures).map(arch => ({
                label: arch,
                active: arch === activeArch,
              }))}
            />
            </div>
            <div className="flex flex-col w-full lg:w-[60%] mt-8 lg:mt-0">
              <h5 className="pb-6 border-b-[1px] text-2xl font-semibold border-[#3E3355]">
                jdk-{archData.release_name} - {new Date(archData.release_date).toLocaleDateString()} 
              </h5>
              {archData.binaries
                .filter(binary => binary.type === (selectedPackageType[os]?.toUpperCase() || defaultPackageType.toUpperCase()))
                .map((binary, index) => (
                  <React.Fragment key={index}>
                    <CommonDownloader
                      obj={{ label: `${binary.extension.toUpperCase()}, ${binary.size}Mb`, link: binary.link }}
                    />
                    {binary.installer_link && binary.type === (selectedPackageType[os]?.toUpperCase() || defaultPackageType.toUpperCase()) && (
                      <CommonDownloader
                        obj={{
                          label: `${binary.installer_extension.toUpperCase()}, ${binary.installer_size}Mb`,
                          link: binary.installer_link,
                        }}
                      />
                    )}
                  </React.Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommonCtaWrapper;
