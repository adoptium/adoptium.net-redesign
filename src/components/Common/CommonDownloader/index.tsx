import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { BsCopy, BsDownload } from "react-icons/bs"
import { MdVerifiedUser } from "react-icons/md"
import { Link } from "../../Link"

const CommonDownloader = ({ openModalWithChecksum, obj }) => {
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
          <MdVerifiedUser
            data-toggle="tooltip"
            data-placement="bottom"
            title="This build is JCK certified"
            size={30}
            style={{ color: "#537FB9" }}
          />
          <Link to="/aqavit">
            <img
              src="/images/aqavit-icon.png"
              width={25}
              alt="AQAvit logo"
              data-toggle="tooltip"
              data-placement="bottom"
              title="This build is AQAvit Verified"
              className="img-fluid mb-0"
            />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="cursor-pointer group">
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                openModalWithChecksum(obj.checksum)
              }}
            >
              <BsCopy size={20} />
            </a>
          </span>
          <h5 className="text-base font-normal">
            <Trans>Checksum</Trans>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default CommonDownloader
