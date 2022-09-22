import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Discord, Reddit, Telegram, Twitter } from "../Icons/Icons";

function Footer() {
  return (
    <Footer_container className="Footer px-3 md:px-5 xl:px-8 py-10 relative mt-5">
      <div className="footer_logo mb-10 relative flex items-center w-fit justify-center pb-4 border-b border-solid border-gray-500">
        <div className="logo_container flex items-center">
          <Link href={"/"}>
            <a>
              <Image
                src={"/logo-removebg-preview.png"}
                alt="Logo image"
                width={50}
                height={50}
              />
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <h2 className="ml-2 mr-10 text-yellow-500 font-semibold text-base md:text-lg">
                AnimoTime
              </h2>
            </a>
          </Link>
        </div>
        <div className="social_media_footer flex items-center ">
          <span className="mr-2">
            <Discord />
          </span>
          <span className="mr-2">
            <Telegram />
          </span>
          <span className="mr-2">
            <Reddit />
          </span>
          <span className="mr-2">
            <Twitter />
          </span>
        </div>
      </div>
      <ul className="agreements flex items-center">
        <li className="mr-4 text-sm md:text-base cursor-pointer hover:text-lime-500 text-gray-200">
          Terms of service
        </li>
        <li className="mr-4 text-sm md:text-base cursor-pointer hover:text-lime-500 text-gray-200">
          DMCA
        </li>
        <li className="mr-4 text-sm md:text-base cursor-pointer hover:text-lime-500 text-gray-200">
          Contact
        </li>
      </ul>
      <div className="image__cover_bg md:hidden">
        <Image
          src={"/Mob-Psycho-100.jpg"}
          alt="background image"
          layout="fill"
          className=" -z-20"
        />
      </div>
      <div className="filter absolute top-0 left-0 w-full h-full bg-gray-500 -z-10 opacity-40 md:hidden"></div>
    </Footer_container>
  );
}

export default Footer;

const Footer_container = styled.div`
  box-shadow: 0px 0px 10px 3px #0000005e;
  .image__cover_bg {
    img {
      filter: saturate(0.1) brightness(0.1);
    }
  }
`;
