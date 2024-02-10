import React from "react"
import CommonHeading from "../Common/CommonHeading"

import { RedIcon } from "../Common/Icon"

export const ReleaseNot = () => {
  return (
    <div className="flex justify-between gap-4 flex-wrap max-w-[1264px] mx-auto px-4 py-20">
      <div className="w-full md:w-[45%]">
        <CommonHeading
          title="Latest Release Note"
          description={
            "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem. "
          }
          className={"text-center md:text-start"}
        />
      </div>
      <div className="w-full md:w-[50%]">
        <div className="p-8 flex flex-col w-full newscard-2 bg-[#200E46]">
          <div className="">
            <h3 className="text-white text-[22px] font-semibold  leading-[28px]">
              October 18, 2023
            </h3>
            <p className=" text-base text-white font-normal">
              jdk-21+35 - Eclipse Temurin™
            </p>
          </div>
          <div className="flex flex-wrap gap-4 ">
            <div className="  flex items-start  gap-3 justify-start">
              <div className="pt-1">
                <RedIcon />
              </div>
              <div className="text-rose-600 text-base font-bold leading-normal">
                Fixed
              </div>
            </div>
            <div>
              <h3 className=" text-base pb-2 text-white font-normal">
                <span className="font-semibold">
                  {" "}
                  jdk-21+35 - Eclipse Temurin™{" "}
                </span>{" "}
                Vobba tev och embrejsa.
              </h3>
              <p className=" text-base text-white font-normal mb-0 pb-2">
                Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar
                dystik, osm. Talepunkt hest med dekabepp. Väggord burkini bepån.
                Stafettläkare pogen inte ultrav. Pimpa vulkanresa asymmetrisk
                krigföring. Lav svajpa sedan kropos.
              </p>
              <p className=" text-base text-white font-normal">
                Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar
                dystik, osm. Talepunkt hest med dekabepp.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 ">
            <div className="  flex items-start  gap-3 justify-start">
              <div className="pt-1">
                <RedIcon />
              </div>
              <div className="text-rose-600 text-base font-bold leading-normal">
                Fixed
              </div>
            </div>
            <div>
              <h3 className=" text-base pb-2 text-white font-normal">
                <span className="font-semibold">
                  {" "}
                  jdk-21+35 - Eclipse Temurin™{" "}
                </span>{" "}
                Vobba tev och embrejsa.
              </h3>
              <p className=" text-base text-white font-normal mb-0 pb-2">
                Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar
                dystik, osm. Talepunkt hest med dekabepp. Väggord burkini bepån.
                Stafettläkare pogen inte ultrav. Pimpa vulkanresa asymmetrisk
                krigföring. Lav svajpa sedan kropos.
              </p>
              <p className=" text-base text-white font-normal mb-0">
                Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar
                dystik, osm. Talepunkt hest med dekabepp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
