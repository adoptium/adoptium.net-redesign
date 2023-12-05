import * as React from "react"

import MemberList from "../../json/members.json"
import Adopters from "../../json/adopters.json"
import LogosGrid from "../LogosGrid"

import { shuffle } from "../../util/shuffle"

export enum LogoType {
  STRATEGIC = "strategic",
  ENTERPRISE = "enterprise",
  PARTICIPANT = "participant",
  ADOPTERS = "adopters",
}

interface LogosGridProps {
  members: LogoType
  title: string
  description: string
}

export interface MembersProps {
  name: string
  logo: string
  url: string
  tier: string
}

const Logos = ({ members, title, description }: LogosGridProps) => {
  // filter MemberList to show only type of members
  let filteredMembers: MembersProps[] = []

  if (members === LogoType.ADOPTERS) {
    filteredMembers.push(...Adopters)
  } else {
    MemberList.forEach(member => {
      if (member.tier === members) {
        filteredMembers.push(member)
      }
    })
  }

  // Randomly mix up logos
  filteredMembers = shuffle(filteredMembers)

  return (
    <section className="max-w-[1264px] md:px-0 px-6 w-full mx-auto flex flex-col items-center justify-center py-20">
      <div className="max-w-[700px] mx-auto">
        <h3 className="text-[36px] sm:text-[42px] leading-[56px] text-center">
          {title}
        </h3>
        <p className="text-[16px] leading-[24px] text-[#C4BFCE] text-center mt-3">
          {description}
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-3">
        {members === LogoType.ALL && (
          <div className="overflow-auto px-3 py-2 w-full md:w-auto">
            <h3 className="flex space-x-10 whitespace-nowrap  justify-center py-2">
              <a href="#strategic">
                <span
                  className="text-[16px] py-2 border-primary w-full text-base font-normal leading-6
                outline-none hover:text-white hover:border-b
                hover:border-[#ff1464] text-[#8a809e] border-b
                border-transparent cursor-pointer transition-all duration-200 ease-in-out"
                >
                  Strategic Members
                </span>
              </a>
              <a href="#enterprise">
                <span
                  className="text-[16px] py-3 border-primary w-full text-base font-normal leading-6
                outline-none hover:text-white hover:border-b
                hover:border-[#ff1464] text-[#8a809e] border-b
                border-transparent cursor-pointer transition-all duration-200 ease-in-out"
                >
                  Enterprise Members
                </span>
              </a>
              <a href="#participant">
                <span
                  className="text-[16px] py-2 border-primary w-full text-base font-normal leading-6
                outline-none hover:text-white hover:border-b
                hover:border-[#ff1464] text-[#8a809e] border-b
                border-transparent cursor-pointer transition-all duration-200 ease-in-out"
                >
                  Participant Members
                </span>
              </a>
            </h3>
          </div>
        )}
        <LogosGrid logos={filteredMembers} type={members} />
      </div>
      <div className="flex justify-center flex-wrap items-center gap-5 md:gap-14 mt-10">
        <p className="text-[20px] leading-[28px] text-white my-0 text-center">
          Are you interested in becoming a member?
        </p>
        <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out ">
          Become a Member
        </button>
      </div>
    </section>
  )
}

export default Logos
