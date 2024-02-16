import React from "react"
import CommonHeading from "../Common/CommonHeading"

import { RedIcon } from "../Common/Icon"
import ReleaseCardWarrper from "./ReleaseCardWarrper"

export const ReleaseNot = () => {
  return (
    <div className="flex justify-between gap-4 flex-wrap max-w-[1264px] mx-auto px-6 py-20">
      <div className="w-full md:max-w-[456px]">
        <CommonHeading
          title="Latest Release Note"
          description={
            "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem. "
          }
          className={"text-center md:text-start"}
        />
      </div>

      <ReleaseCardWarrper
        date="October 18, 2023"
        icon={<RedIcon />}
        icontitle="Fixed"
        title="jdk-21+35 - Eclipse Temurin™"
        description="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. Väggord burkini bepån. Stafettläkare pogen inte ultrav. Pimpa vulkanresa asymmetrisk krigföring. Lav svajpa sedan kropos. "
        subtitle=" Vobba tev och embrejsa."
        description2="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. "
        className={undefined}
        icontitle2="Announcement"
        title2="jdk-21+35 - Eclipse Temurin™"
        subtitle2=" Vobba tev och embrejsa."
        description1="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. Väggord burkini bepån. Stafettläkare pogen inte ultrav. Pimpa vulkanresa asymmetrisk krigföring. Lav svajpa sedan kropos. "
        description3="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. "
        icon2={undefined}
      />
    </div>
  )
}
