import React from "react"
import {
    MobileFooterCat,
    MobileFooterFacebook,
    MobileFooterSocial,
  } from "../../Common/Icon"

const SharePost = () => {
    return (
        <div className="hidden md:flex justify-between items-center gap-10 py-10">
            <div className="bg-[#3E3355] w-full h-[1px] "></div>
            <div className="flex flex-col items-center">
                <p className="tab-button-text">Share this post</p>
                <div className="flex items-center gap-4">
                    <button className="bg-primary px-6 py-3 rounded-[80px] tab-button-text flex items-center gap-3">
                        <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.5 6.66675C16.8807 6.66675 18 5.54746 18 4.16675C18 2.78604 16.8807 1.66675 15.5 1.66675C14.1193 1.66675 13 2.78604 13 4.16675C13 5.54746 14.1193 6.66675 15.5 6.66675Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.5 12.5C6.88071 12.5 8 11.3807 8 10C8 8.61929 6.88071 7.5 5.5 7.5C4.11929 7.5 3 8.61929 3 10C3 11.3807 4.11929 12.5 5.5 12.5Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15.5 18.3335C16.8807 18.3335 18 17.2142 18 15.8335C18 14.4528 16.8807 13.3335 15.5 13.3335C14.1193 13.3335 13 14.4528 13 15.8335C13 17.2142 14.1193 18.3335 15.5 18.3335Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.65625 11.2583L13.3479 14.575"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.3396 5.42505L7.65625 8.74172"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Share
                    </button>
                    <a aria-label="Share on FB" href="">
                        <MobileFooterFacebook />
                    </a>
                    <a aria-label="Share on X" href="">
                        <MobileFooterSocial />
                    </a>
                    <a aria-label="Share on GitHub" href="">
                        <MobileFooterCat />
                    </a>
                </div>
            </div>
            <div className="bg-[#3E3355] w-full h-[1px] inline-block"></div>
        </div>
    )
}

export default SharePost
