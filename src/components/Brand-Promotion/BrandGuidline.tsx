import React from "react"
import CommonHeading from "../Common/CommonHeading"
import { DownloadIcon } from "../Common/AppIcon"

const BrandGuidline = () => {
  return (
    <section className="  pt-0 md:pt-16 ">
      <div className="pt-16   pb-8 md:pb-16 max-w-[1048px] flex-col lg:flex-row mx-auto w-full px-6 lg:px-2 xl:px-0 flex justify-center gap-16 items-center">
        <div className=" w-full lg:w-[55%] text-center lg:text-left">
          <CommonHeading
            title={"Brand guidelines"}
            description={
              "Sengar bloppa kawaii. Pälig nomofobi samt dirade. Ter klimathot, plus euroluns. Dism rur kristofobi. Ulol blogga, i sesebelt. R-tal blåljusyrke för att lamiktig. Köttrymden beröninde plafapredat. Teraligen Maudeffekten ifall kulturkofta."
            }
            className={undefined}
          />
          <CommonHeading
            description={
              "Äsamma kis i niren. Kavans an metafoni. Tåsade dengen i kemsex. Luning ultrasumanar om än aposihet. Lodyneng mytodiktisk i bedent. Spening plas tills pad. Are spengar, men mobildagis. Fana lureska, esk.  "
            }
            title={undefined}
            className={undefined}
          />
        </div>
        <div>
          <div className="p-10 flex flex-col max-w-[400px] newscard-2 h-[440px] md:h-[480px] bg-[#200E46]">
            <div className="grow">
              <h3 className="text-white text-[30px] font-semibold   leading-[120%] md:text-[40px]">
                Download our brand guidelines
              </h3>
              <p className="mt-6 text-xl text-lightgrey font-normal">
                Eclipse Temurin offers high-performance, cross-platform,
                open-source Java runtime.
              </p>
            </div>
            <button className="bg-transparent flex items-center justify-center gap-3  border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[230px] h-[48px] rounded-[80px] gradient-supportus ">
              <span>
                <DownloadIcon />
              </span>
              Download Temurin™
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandGuidline
