import React from "react"
import "./support.scss"
import CommonHeading from "../../Common/CommonHeading"

const Support = () => {
    return (
        <section className="pt-0 md:pt-14 md:pb-28">
            <div className="pt-12 pb-8 md:pb-16 max-w-[1048px] flex-col lg:flex-row mx-auto w-full px-6 lg:px-2 xl:px-0 flex justify-center gap-16 items-center">
                <div className=" w-full lg:w-[55%] text-center lg:text-left">
                    <CommonHeading
                        title={"Support the Elcipse Adoptium Working Group "}
                        description={
                            "Lorem ipsum dolor sit amet consectetur. Ante cursus adipiscing feugiat aliquam. Adipiscing nulla arcu turpis tortor leo integer justo. Ut turpis adipiscing aliquam phasellus aliquam. Lectus etiam dictum nunc magna gravida bibendum nibh aliquam. Eget arcu neque cursus mattis sollicitudin malesuada urna ridiculus metus. Pharetra volutpat neque fames gravida tellus."
                        }
                        className={undefined}
                    />
                    <CommonHeading
                        description={
                            "Nibh arcu consequat aliquet in eget non. Turpis id posuere quam sit magnis. Aliquam imperdiet odio odio vulputate. Vel molestie porttitor tellus accumsan. Dui ipsum fringilla sit sit elementum."
                        }
                        title={undefined}
                        className={undefined}
                    />
                    <button className="text-white text-base leading-6 font-normal bg-primary px-6 py-3 mt-8 rounded-[80px]">
                        Donate Now
                    </button>
                </div>
                <div>
                    <div className="p-10 flex flex-col max-w-[400px] newscard-2 h-[440px] md:h-[480px] bg-[#200E46]">
                        <div className="grow">
                            <h3 className="text-white text-[30px] font-semibold  whitespace-nowrap  md:whitespace-normal leading-[120%] md:text-[40px]">
                                Media & Promotion
                            </h3>
                            <p className="mt-6 text-xl text-lightgrey font-normal">
                                Eclipse Temurin offers high-performance, cross-platform,
                                open-source Java runtime
                            </p>
                        </div>
                        <button className="bg-transparent border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[180px] h-[48px] rounded-[80px] gradient-supportus">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support