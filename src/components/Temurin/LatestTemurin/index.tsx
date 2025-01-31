import React, { MutableRefObject, useRef } from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { detectOS, UserOS } from "../../../util/detectOS"
import { fetchLatestForOS, useOnScreen } from "../../../hooks"
import { FaApple, FaWindows, FaLinux } from "react-icons/fa"

let userOSName: string
let userOSAPIName: string
let arch: string = "x64"
let isSafari: boolean

const LatestTemurin = (props): JSX.Element => {
  const defaultVersion = props.latestLTS

  const userOS = detectOS()
  switch (userOS) {
    case UserOS.MAC:
      userOSName = "macOS"
      userOSAPIName = "mac"
      if (typeof document !== "undefined") {
        let gl = document.createElement("canvas").getContext("webgl")
        // @ts-ignore
        let ext = gl && gl.getExtension("WEBGL_debug_renderer_info")
        // @ts-ignore
        let param = (ext && gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) || ""
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        //Detect if the user is using a Apple GPU (M1)
        if (isSafari || (param.match(/Apple/) && !param.match(/Apple GPU/))) {
          arch = "aarch64"
        }
      }
      break
    case UserOS.LINUX:
    case UserOS.UNIX:
      userOSName = "Linux"
      userOSAPIName = "linux"
      break
    case UserOS.WIN:
      userOSName = "Windows"
      userOSAPIName = "windows"
      break
    default:
      break
  }

  const ref = useRef<HTMLDivElement | null>(null)
  const isVisible = useOnScreen(ref as MutableRefObject<Element>, true)
  const binary = fetchLatestForOS(
    isVisible,
    defaultVersion,
    userOSAPIName,
    arch,
  )

  let buttonClass = "col-6"
  let textClass = ""

  if (props.page === "home") {
    buttonClass = "col-12"
    textClass = "text-pink medium"
  }

  return (
    <div ref={ref} className="text-center w-full">
      <h1 className="font-semibold leading-[72px] lg:leading-[120px] text-white-900 text-[64px] lg:text-[104px]">
        The Power of Eclipse Temurin™
      </h1>
      <p className="lg:my-10 mt-6 mb-10 text-2xl leading-8 text-white-600 font-semibold">

        {binary ? (
          <Trans
            i18nKey="Download Temurin for"
            defaults="Download Temurin {{defaultVersion}} for {{userOSName}} {{arch}}"
            values={{
              defaultVersion,
              userOSName,
              arch,
            }}
          />
        ) : (
          <Trans
            i18nKey="home.download.temurin.short"
            defaults="Download Temurin {{ defaultVersion }}"
            values={{ defaultVersion }}
          />
        )}
      </p>

      <div className="mt-10 flex items-center sm:flex-row flex-col-reverse justify-center gap-6">
        <Link
          placeholder={"Other Downloads"}
          to="/temurin/releases"
          className="text-base underline transition duration-300 ease-in-out font-bold leading-6 text-white-900"
        >
          Other Downloads
        </Link>
        {binary ? (
          <Link
            placeholder={"Download Temurin"}
            to="/download"
            state={{
              link: binary.link,
              checksum: binary.checksum,
              os: userOSName,
              arch: arch,
              pkg_type: "JDK",
              java_version: binary.release_name,
            }}
            className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-[#FF1464] border ease-in-out border-[#FF1464] flex items-center justify-center gap-3 w-[244px] h-[56px] text-white font-bold leading-6 text-base"
          >
            {userOS === UserOS.MAC ? (
              <FaApple size={25} />
            ) : userOS === UserOS.WIN ? (
              <FaWindows size={25} />
            ) : (
              <FaLinux size={25} />
            )}
            Download Temurin&trade;
          </Link>
        ) : (
          <a
            href="#"
            className="rounded-[80px] bg-[#FF1464] cursor-not-allowed hover:bg-transparent border transition duration-300 ease-in-out hover:text-[#FF1464] border-[#FF1464] flex items-center justify-center gap-3 w-[244px] h-[56px] text-white font-bold leading-6 text-base"
          >
            {userOS === UserOS.MAC ? (
              <FaApple size={25} />
            ) : userOS === UserOS.WIN ? (
              <FaWindows size={25} />
            ) : (
              <FaLinux size={25} />
            )}
            Download Temurin&trade;
          </a>
        )}
      </div>
    </div>
  )
}

export default LatestTemurin
