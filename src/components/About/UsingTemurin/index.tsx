import React from "react"

const UsingTemurin = () => {
  const LatestReleasesCard = [
    {
      id: 1,
      content: "Aliquam sollicitudin, augue eget gravida imperdiet",
    },
    {
      id: 2,
      content:
        "Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus diam turpis.",
    },
    {
      id: 3,
      content: "Bibendum at ut eu feugiat tellus diam turpis.",
    },
    {
      id: 4,
      content:
        "Aliquam sollicitudin, augue eget gravida imperdiet, eros lorem euismod mi, ac commodo leo nulla eget.",
    },
  ]
  return (
    <>
      <section className="py-7 md:py-16 max-w-[1048px] w-full mx-auto items-center lg:flex justify-center lg:justify-between xl:px-0 px-6 ">
        <div className="lg:max-w-[560px] w-full">
          <h2 className="md:text-5xl text-white text-[40px] font-semibold leading-[120%] md:leading-[116.667%]">
            How other companies are using Temurin
          </h2>
          <p className="md:mt-6 my-10 text-lightgrey text-base leading-[150%] font-normal">
            Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum.
            Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus
            diam turpis. Massa posuere ornare dignissim orci consequat.
          </p>
        </div>
        <div className="max-w-[400px] w-full hidden lg:block">
          <img
            src="/images/icons/experience.png"
            className="mb-0"
            alt="scroll-divider"
          />
        </div>
        <div className="w-full lg:hidden block mt-10">
          {LatestReleasesCard.map((card, more) => (
            <div key={more} className="w-full ">
              <p className="p-4 rounded-2xl w-full bg-[#1C0D3B] gap-y-4 text-base font-normal leading-[150%] text-white backdrop-blur-12">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default UsingTemurin
