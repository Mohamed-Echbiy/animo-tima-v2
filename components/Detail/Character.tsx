import { useState } from "react";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { charactersAnilist } from "../../interfaces";

function Characters({ data }: { data: [charactersAnilist] }) {
  const [ImageLoad, setImageLoad] = useState(false);
  return (
    <Div className="Characters mt-10 px-4 md:px-3 lg:px-3 xl:px-5 2xl:px-10">
      <h1 className="Characters__text mb-5">Characters :</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={2}
        lazy={true}
        preloadImages={true}
        grabCursor={true}
        breakpoints={{
          350: {
            width: 300,
            slidesPerView: 3,
          },
          768: {
            width: 760,
            slidesPerView: 4,
          },
          1024: {
            width: 1024,
            slidesPerView: 5,
          },
          1280: {
            width: 1280,
            slidesPerView: 6,
          },
          1536: {
            width: 1536,
            slidesPerView: 7,
          },
        }}
        className="SwiperContainer px-1 md:px-2 lg:px-4 xl:px-5 2xl:px-6"
      >
        {data &&
          data.map((chara: charactersAnilist) => (
            <SwiperSlide
              key={nanoid()}
              className="SwiperContainer__Image pt-24 mb-12"
            >
              <div className="container__swiper relative">
                <h2 className="charachter__name py-1 text-center mb-2 font-semibold text-gray-300 text-xs lg:text-sm -translate-y-6">
                  {chara.name.first}
                </h2>
                <Link href={`/characters/${chara.id}`}>
                  <a title="get character details">
                    <Image
                      src={chara.image}
                      alt={chara.name.first}
                      title={chara.name.first}
                      onLoad={() => setImageLoad(true)}
                      layout="fill"
                      loading="lazy"
                    />
                  </a>
                </Link>
                {!ImageLoad && <div className="loading shine"></div>}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </Div>
  );
}

export default Characters;
// styling

const Div = styled.main`
  span {
    position: absolute !important;
  }
  max-height: 700px;
  h1.Characters__text {
    font-size: 2rem;
    color: gold;
  }
  .SwiperContainer {
    width: 100%;
    max-height: 700px;
    .loading {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #0f1010;
      background-size: 40px 100%;
      background-repeat: no-repeat;
      background-position: left -40px top 0;
      background-image: linear-gradient(#090a0a60, #090a0a60);
      z-index: 100;
      top: 0px;
      left: 0px;
    }
    .swiper_wraper {
      max-height: 700px;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #dabc0e;
      margin-top: 5px;
      top: 10px;
      font-weight: bold;
      ::after {
        padding: 10px;
        background-color: black;
        border-radius: 5px;
        font-size: 15px;
      }
    }
  }
  .SwiperContainer__Image {
    .container__swiper {
      aspect-ratio: 0.7;
      img {
        z-index: -1;
        cursor: pointer;
      }
    }
  }
`;
