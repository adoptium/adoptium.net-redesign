import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
const InputWapperBottom = () => {
  function onChange(value) {
    console.log("Captcha value:", value)
  }
  return (
    <div className="my-2">
      <h3 className="text-[20px] font-semibold leading-[140%] text-white">
        Does your organisation contribute to open source software?
      </h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2 cursor-pointer customradiobutton">
          <input
            className="cursor-pointer border-[#3E3355] border rounded-[4px] bg-transparent w-5 h-5"
            id="yes"
            name="choice"
            required
            type="radio"
          />
          <label className="tab-button-text cursor-pointer" htmlFor="yes">
            {" "}
            Yes
          </label>
        </div>
        <div className="flex items-center gap-2 cursor-pointer customradiobutton">
          <input
            className="cursor-pointer border-[#3E3355] border rounded-[4px] bg-transparent w-5 h-5"
            id="no"
            type="radio"
            required
            name="choice"
          />
          <label className="tab-button-text cursor-pointer" htmlFor="no">
            {" "}
            No
          </label>
        </div>
      </div>

      <div className="pt-5">
        <h3 className="text-[12px] font-bold text-lightgrey">
          By hitting Submit, you are agreeing to provide your contact
          information to Eclipse Foundation to enable us to contact you as
          requested. You are also agreeing to permit Eclipse Foundation to
          occasionally contact you about our relevant products and services. You
          may unsubscribe at any time by following the instructions which are
          included in every communication we send as a result of you having
          provided this information. For more information regarding our privacy
          practices and commitment to protecting your privacy, please review our{" "}
          <span className="text-primary underline !underline-offset-[1px]">
            Privacy Policy
          </span>
          .
        </h3>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
        <div className="">
          <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
        </div>
        <button
          className="bg-primary tab-button-text  rounded-[80px] px-6 py-3"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default InputWapperBottom
