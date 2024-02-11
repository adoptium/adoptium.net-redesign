import React from "react"
import ReleaseCardWarrper from "./ReleaseCardWarrper"
import { RedIcon } from "../Common/Icon"
const datarepeate = [
  {
    id: 1,
    date: " October 17, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: undefined,
    title: undefined,
  },
  {
    id: 2,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 3,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 4,
    date: " October 15, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: undefined,
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 5,
    date: " October 15, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: undefined,
    title: undefined,
  },
  {
    id: 6,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 7,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 8,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 9,
    date: " October 15, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: undefined,
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 10,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 7,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 9,
    date: " October 15, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: undefined,
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 5,
    date: " October 15, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: undefined,
    title: undefined,
  },
  {
    id: 10,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 11,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 12,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
  {
    id: 13,
    date: " October 16, 2023",
    name: " Mir Tintingate, alltså sporta",
    sendername: "Multiböck rel, icke-binär. ",
    title: "   Fäskade smygöppna sedan",
  },
]

const PreviousReleaseNotes = () => {
  return (
    <div className="max-w-[1264px] mx-auto px-4 py-10">
      <div className="flex justify-center lg:justify-between flex-wrap  items-start gap-5 ">
        <div className="flex flex-col max-w-[900px] gap-3">
          <h3 className="text-[36px] md:text-[48px] font-hanken text-center lg:text-start leading-[48px] md:leading-[56px] font-semibold text-white my-0 ">
            Previous Release Notes
          </h3>{" "}
          <p className="text-[20px] text-[#C4BFCE] leading-[28px] font-normal text-center lg:text-start">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE
            TCK-tested for general use in the Java ecosystem.
          </p>
        </div>
        <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out ">
          Issue a report
        </button>
      </div>
      <div className="flex gap-8 mt-[40px]">
        <div className="bg-[#0E002A] rounded-[24px] p-8 w-full lg:w-[60%] flex flex-col gap-5">
          <ReleaseCardWarrper
            date="October 18, 2023"
            icon={<RedIcon />}
            icontitle="Fixed"
            title="jdk-21+35 - Eclipse Temurin™"
            description="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. Väggord burkini bepån. Stafettläkare pogen inte ultrav. Pimpa vulkanresa asymmetrisk krigföring. Lav svajpa sedan kropos. "
            subtitle=" Vobba tev och embrejsa."
            description2="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. "
            className={
              "!w-full !bg-[#1A0D35] !overflow-hidden  !rounded-[24px]"
            }
            icontitle2="Announcement"
            title2="jdk-21+35 - Eclipse Temurin™"
            subtitle2=" Vobba tev och embrejsa."
            description1="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. Väggord burkini bepån. Stafettläkare pogen inte ultrav. Pimpa vulkanresa asymmetrisk krigföring. Lav svajpa sedan kropos. "
            description3="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. "
            icon2={undefined}
          />
          <ReleaseCardWarrper
            date="October 18, 2023"
            icon={<RedIcon />}
            icontitle="Fixed"
            title="jdk-21+35 - Eclipse Temurin™"
            description="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. Väggord burkini bepån. Stafettläkare pogen inte ultrav. Pimpa vulkanresa asymmetrisk krigföring. Lav svajpa sedan kropos. "
            subtitle=" Vobba tev och embrejsa."
            description2="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. "
            className={
              "!w-full !bg-[#1A0D35] !overflow-hidden  !rounded-[24px]"
            }
            icontitle2={undefined}
            title2={undefined}
            subtitle2={undefined}
            description1={undefined}
            description3={undefined}
            icon2={undefined}
          />
          <ReleaseCardWarrper
            date="October 18, 2023"
            icon={<RedIcon />}
            icontitle="Fixed"
            title="jdk-21+35 - Eclipse Temurin™"
            description="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. Väggord burkini bepån. Stafettläkare pogen inte ultrav. Pimpa vulkanresa asymmetrisk krigföring. Lav svajpa sedan kropos. "
            subtitle=" Vobba tev och embrejsa."
            description2="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. "
            className={
              "!w-full !bg-[#1A0D35] !overflow-hidden  !rounded-[24px]"
            }
            icontitle2="Announcement"
            title2="jdk-21+35 - Eclipse Temurin™"
            subtitle2=" Vobba tev och embrejsa."
            description1="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. Väggord burkini bepån. Stafettläkare pogen inte ultrav. Pimpa vulkanresa asymmetrisk krigföring. Lav svajpa sedan kropos. "
            description3="Vobba tev och embrejsa. Tekrol trängselskatt lägt. Exorar dystik, osm. Talepunkt hest med dekabepp. "
            icon2={undefined}
          />
        </div>
        <div className=" hidden w-[30%] lg:flex flex-col h-[1605px] scroll-container overflow-auto">
          {datarepeate.map((data, index) => (
            <div key={index} className="flex flex-col mt-3">
              <h3
                className={`text-[16px] font-bold leading-[24px] ${index === 0 ? "text-primary" : ""}`}
              >
                {data.date}
              </h3>
              <p className="text-[16px] text-center font-normal !mb-0 leading-[24px] pt-1">
                {data.name}
              </p>
              <p className="text-[16px] text-center font-normal !mb-0 leading-[24px] pt-1 ">
                {data.sendername}
              </p>
              <p className="text-[16px] text-center font-normal !mb-0 leading-[24px] pt-1">
                {data.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviousReleaseNotes
