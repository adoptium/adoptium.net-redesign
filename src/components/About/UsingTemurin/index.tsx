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
      <section className="py-16 max-w-[1048px] w-full mx-auto lg:flex justify-center lg:justify-between xl:px-0 px-6 ">
        <div className="lg:max-w-[560px] w-full">
          <h2 className="md:text-5xl text-[40px] font-normal leading-[48px] md:leading-[56px]">
            How other companies are using Temurin
          </h2>
            <p className="md:mt-6 my-10 text-grey text-base leading-6 font-normal">
            Discover how industry leaders leverage Temurin to enhance performance and drive innovation in their development processes.
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
              <p className="p-4 rounded-2xl w-full bg-tones-white gap-y-4 text-base font-normal leading-6 text-white backdrop-blur-12">
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
