import React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { BsCopy, BsDownload } from "react-icons/bs"

const CommonDownloader = ({ obj }) => {
  return (
    <div className="text-white  w-[100%] py-6 border-b-[1px]  border-[#3E3355]">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-2">
          <span className="cursor-pointer group">
            <Link
              to="/download"
              state={{
                link: obj.link,
                checksum: obj.checksum,
                os: obj.os,
                arch: obj.arch,
                pkg_type: obj.pkg_type,
                java_version: obj.java_version,
              }}
              placeholder={"Download"}
            >
              <BsDownload size={20} />
            </Link>
          </span>
          <h5 className="text-base font-normal">{obj.label}</h5>
        </div>
        <div className="flex items-center gap-2">
          <span className="cursor-pointer group">
            <BsCopy size={20} />
          </span>
          <h5 className="text-base font-normal">SHA256</h5>
        </div>
      </div>
    </div>
  )
}

export default CommonDownloader
