import React from "react"
import introimg from "../../img/new-article-img.png"
import introimg2 from "../../img/new-article-img2.png"
import introimg3 from "../../img/new-article-img3.png"
import TastimonialIntro from "./TastimonialIntro"
import ConclusionCard from "./ConclusionCard"
import { FiFacebook } from "react-icons/fi"
import {
  MobileFooterCat,
  MobileFooterFacebook,
  MobileFooterSocial,
} from "../Common/Icon"

const Introduction = () => {
  return (
    <article className="px-6">
      <div className="max-w-[960px]  mx-auto  ">
        <img
          className="w-full h-[500px] md:h-full object-cover rounded-2xl md:rounded-none mb-10"
          src={introimg}
          alt=""
        />
      </div>
      <div className="max-w-[832px] mx-auto ">
        <p className="tab-button-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
          massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
          Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </p>
        <h3 className="text-[32px] font-semibold leading-[125%] py-5">
          Introduction
        </h3>
        <p className="tab-button-text pb-5">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id.
          <span className="inline-block pt-4">
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{" "}
          </span>
        </p>

        <img
          className="h-[500px] md:h-auto w-full object-cover rounded-2xl md:rounded-none"
          src={introimg2}
          alt=""
        />
        <p className="text-[14px] leading-[142.857%] text-white">
          Image courtesy of Scott Webb via{" "}
          <span className=" underline !underline-offset-[2px] mb-0">
            Pexels
          </span>
        </p>
        <TastimonialIntro />
        <p className="tab-button-text pb-5">
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          <span className="inline-block py-4">
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
            commodo consectetur convallis risus. Sed condimentum enim dignissim
            adipiscing faucibus consequat, urna. Viverra purus et erat auctor
            aliquam. Risus, volutpat vulputate posuere purus sit congue
            convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
            Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor
            lacus, eget nunc lectus in tellus, pharetra, porttitor.
          </span>
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </p>
        <div className="pb-5">
          <h3 className="text-[32px] font-semibold leading-[125%] pb-4">
            Software and tools
          </h3>
          <p className="tab-button-text">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
            <span className="inline-block pt-4">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.
            </span>
          </p>
        </div>
        <div className="pb-5">
          <h3 className="text-[32px] font-semibold leading-[125%] pb-4">
            Other resources
          </h3>
          <p className="tab-button-text ">
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
            <span className="inline-block py-4">
              1. Lectus id duis vitae porttitor enim gravida morbi. <br />
              2. Eu turpis posuere semper feugiat volutpat elit, ultrices
              suspendisse. Auctor vel in vitae placerat. <br />
              3. Suspendisse maecenas ac donec scelerisque diam sed est duis
              purus.
            </span>
          </p>
          <div>
            <img
              className="h-[430px] md:h-full object-cover rounded-2xl md:rounded-none"
              src={introimg3}
              alt=""
            />
            <p className="text-[14px] leading-[142.857%] text-white">
              Image courtesy of Scott Webb via{" "}
              <span className=" underline !underline-offset-[2px] mb-0">
                Pexels
              </span>
            </p>
            <p className="tab-button-text pt-4">
              Lectus leo massa amet posuere. Malesuada mattis non convallis
              quisque. Libero sit et imperdiet bibendum quisque dictum
              vestibulum in non. Pretium ultricies tempor non est diam. Enim ut
              enim amet amet integer cursus. Sit ac commodo pretium sed etiam
              turpis suspendisse at
              <span className="inline-block pt-4">
                Tristique odio senectus nam posuere ornare leo metus, ultricies.
                Blandit duis ultricies vulputate morbi feugiat cras placerat
                elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                pellentesque suscipit accumsan. Cursus viverra aenean magna
                risus elementum faucibus molestie pellentesque. Arcu ultricies
                sed mauris vestibulum.
              </span>
            </p>
          </div>
          <ConclusionCard />

          <div className="hidden md:flex justify-between items-center gap-10">
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
                      stroke-Width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.5 12.5C6.88071 12.5 8 11.3807 8 10C8 8.61929 6.88071 7.5 5.5 7.5C4.11929 7.5 3 8.61929 3 10C3 11.3807 4.11929 12.5 5.5 12.5Z"
                      stroke="white"
                      stroke-Width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.5 18.3335C16.8807 18.3335 18 17.2142 18 15.8335C18 14.4528 16.8807 13.3335 15.5 13.3335C14.1193 13.3335 13 14.4528 13 15.8335C13 17.2142 14.1193 18.3335 15.5 18.3335Z"
                      stroke="white"
                      stroke-Width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.65625 11.2583L13.3479 14.575"
                      stroke="white"
                      stroke-Width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.3396 5.42505L7.65625 8.74172"
                      stroke="white"
                      stroke-Width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Share
                </button>
                <a href="">
                  <MobileFooterFacebook />
                </a>
                <a href="">
                  <MobileFooterSocial />
                </a>
                <a href="">
                  <MobileFooterCat />
                </a>
              </div>
            </div>
            <div className="bg-[#3E3355] w-full h-[1px] inline-block"></div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Introduction
