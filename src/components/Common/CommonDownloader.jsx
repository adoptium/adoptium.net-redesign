import React from "react"

const CommonDownloader = ({ obj }) => {
  return (
    <div className="text-white w-[736px] space-y-6 border border-red-900">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-2">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.83203 8.33301L9.9987 12.4997L14.1654 8.33301"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 12.5V2.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h5>{obj.label}</h5>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_15044)">
                <path
                  d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                  stroke="#C4BFCE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33203 9.99967H2.66536C2.31174 9.99967 1.9726 9.8592 1.72256 9.60915C1.47251 9.3591 1.33203 9.01996 1.33203 8.66634V2.66634C1.33203 2.31272 1.47251 1.97358 1.72256 1.72353C1.9726 1.47348 2.31174 1.33301 2.66536 1.33301H8.66536C9.01899 1.33301 9.35813 1.47348 9.60817 1.72353C9.85822 1.97358 9.9987 2.31272 9.9987 2.66634V3.33301"
                  stroke="#C4BFCE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_15044">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h5>{obj.sha}</h5>
        </div>
      </div>
    </div>
  )
}

export default CommonDownloader
