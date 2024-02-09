import React from "react"
import { GithubIcon3 } from "./Icon"
import { Link } from "gatsby"

const OurMamberWapper = () => {
  const github = [
    { id: 1, svg: <GithubIcon3 /> },
    { id: 2, svg: <GithubIcon3 /> },
    { id: 3, svg: <GithubIcon3 /> },
    { id: 4, svg: <GithubIcon3 /> },
    { id: 5, svg: <GithubIcon3 /> },
    { id: 6, svg: <GithubIcon3 /> },
    { id: 7, svg: <GithubIcon3 /> },
    { id: 8, svg: <GithubIcon3 /> },
    { id: 9, svg: <GithubIcon3 /> },
    { id: 10, svg: <GithubIcon3 /> },
    { id: 11, svg: <GithubIcon3 /> },
    { id: 12, svg: <GithubIcon3 /> },
    { id: 13, svg: <GithubIcon3 /> },
    { id: 14, svg: <GithubIcon3 /> },
    { id: 15, svg: <GithubIcon3 /> },
    { id: 16, svg: <GithubIcon3 /> },
  ]
  return (
    <div className=" max-w-[1264px] md:px-0 px-4 w-full mx-auto flex flex-col items-center justify-center mb-5  mt-14">
      <div className="min-w-full w-full overflow-auto">
        <div className="grid grid-cols-4  gap-4 md:gap-6 min-w-[850px] md:min-w-[1230px]   mx-auto">
          {github.map(data => (
            <Link to="">
              <div
                key={data.id}
                className="w-[200px]  md:!w-[296px] h-[86px] md:h-[110px] flex justify-center items-center  rounded-[20px] bg-white "
              >
                {data.svg}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurMamberWapper
