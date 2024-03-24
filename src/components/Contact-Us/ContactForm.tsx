import React from "react"
import {
  MobileFooterCat,
  MobileFooterFacebook,
  MobileFooterLinkedin,
  MobileFooterSlack,
  MobileFooterSocial,
} from "../Common/Icon"
import InputWapperBottom from "./InputWapperBottom"
import InputWapperHeader from "./InputWapperHeader"

const ContactForm = () => {
  return (
    <div className="max-w-[1264px] mx-auto py-8 md:pt-32 md:pb-16">
      <div className="flex flex-col lg:flex-row justify-between gap-7 items-start ">
        <div className="w-full lg:max-w-[400px] newscard-2 !bg-transparent p-6 md:p-10 ">
          <img
            className="!mb-0"
            src="/images/icons/message.svg"
            aria-label="message icon"
          />
          <h3 className="text-[40px] font-semibold leading-[120%] text-white pt-8">
            Reach out on Social Media
          </h3>
          <p className="tab-button-text pt-8">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE
            TCK-tested for general use in the Java ecosystem.
          </p>
          <div className="flex items-center space-x-6 mt-6">
            <a href="">
              <MobileFooterFacebook />
            </a>
            <a href="">
              <MobileFooterSocial />
            </a>
            <a href="">
              <MobileFooterCat />
            </a>

            <a href="">
              <MobileFooterLinkedin />
            </a>
            <a href="">
              <MobileFooterSlack />
            </a>
          </div>
        </div>
        <div className="w-full newscard-2 bg-transparent p-6 md:p-10 ">
          <form action="">
            <InputWapperHeader />

            <div className="flex justify-between items-center gap-4 md:gap-0 mt-6">
              <div className="w-full flex-col gap-2">
                <label className="tab-button-text text-lightgrey" htmlFor="">
                  Message
                </label>
                <div className="w-full h-[131px] p-4 !border-[#3E3355] border-2  mt-3 rounded-2xl tab-button-text">
                  <textarea
                    className=" w-full resize-none h-full bg-transparent outline-none placeholder:text-white text-white"
                    name="Message"
                    required
                    placeholder="Your message"
                    id="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-[#3E3355] w-full h-[0.8px]  my-6"></div>
            <InputWapperBottom />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
