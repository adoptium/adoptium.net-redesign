import React from "react"

import InputWapperHeader from "../Contact-Us/InputWapperHeader"
import InputWapperBottom from "./InputWapperBottom"

const ContactForm = () => {
  return (
    <div className="max-w-[832px] mx-auto px-6 py-8 md:pt-32 md:pb-16">
      <div className="flex flex-col lg:flex-row justify-between gap-7 items-start ">
        <div className="w-full newscard-2 bg-transparent p-6 md:p-10 ">
          <form action="">
            <InputWapperHeader />

            <div className="bg-[#3E3355] w-full h-[0.8px]  my-6"></div>
            <InputWapperBottom />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
