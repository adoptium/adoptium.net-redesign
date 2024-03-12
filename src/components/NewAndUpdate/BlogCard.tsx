import React from "react"
import blogimg from "../../img/blogcard-img.png"

const BlogCard = () => {
  return (
    <div className="max-w-[1264px] mx-auto px-6 pt-8 md:pt-28">
      <div className="newscard-2 bg-[#200D46] p-6 md:p-8 flex items-center justify-center flex-wrap gap-10">
        <div className="max-w-[653px]">
          <img className="w-full mb-0 " src={blogimg} alt="" />
        </div>
        <div className="max-w-[450px] w-full ">
          <h3 className="text-[24px] font-semibold leading-[133.333%] text-white">
            Sed Ut Perspiciatis Unde Omnis Iste Natus
          </h3>
          <p className="tab-button-text py-4 my-0">5 Jun, 2023</p>
          <p className="tab-button-text pb-4 my-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="rounded-2xl bg-transparent gradient-supportus border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[154px] h-[48px] block ">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
