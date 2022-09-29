import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { nanoid } from "nanoid";
import Link from "next/link";
import { RecommendationAnilist } from "../../interfaces";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import NoRecommendation from "./NoRecommendation";

function Recommendation({ data }: { data: [RecommendationAnilist] }) {
  const [ImageLoad, setImageLoad] = useState(false);
  return (
    <Div className="recomended_anime px-4 md:px-3 lg:px-3 xl:px-5 2xl:px-10 mb-12">
      <h1 className="text-lg md:text-2xl mb-7">Recomended :</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={0}
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
        className="SwiperContainer"
      >
        {data ? (
          data.map((anime: RecommendationAnilist) => (
            <SwiperSlide key={nanoid()} className=" pt-24">
              <Recommended_Anime>
                <div className="Recommended_item">
                  <div className="image_container relative">
                    <Link href={`/detail/${anime.id}`}>
                      <a title="go to detail page">
                        <Image
                          src={anime.image}
                          alt={anime.title.english}
                          layout="fill"
                          loading="lazy"
                          onLoad={() => setImageLoad(true)}
                        />
                      </a>
                    </Link>
                    {!ImageLoad && <div className="loading shine"></div>}
                  </div>
                  <div className="info hidden lg:block">
                    <div className="title_container">
                      <h3 className="title text-center text-xs lg:text-base w-full px-1">
                        {anime.title.userPreferred}
                      </h3>
                    </div>
                    <div className="blur_bg"></div>
                  </div>
                </div>
              </Recommended_Anime>
            </SwiperSlide>
          ))
        ) : (
          <NoRecommendation />
        )}
      </Swiper>
    </Div>
  );
}

export default Recommendation;
const Div = styled.div`
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
  span {
    position: initial !important;
  }
  h1 {
    color: gold;
    font-size: 2rem;
  }
  .SwiperContainer {
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
`;
const Recommended_Anime = styled.div`
  .title_container {
    position: absolute;
    height: 80px;
    width: 100%;
    bottom: -95px;
    background-color: #2a2c31;
    display: flex;
    align-items: center;
    color: gold;
    text-transform: capitalize;
    transition: ease 0.3s;
    font-weight: 400;
    z-index: 50;
    h3 {
      font-size: 10px;
    }
  }
  &:hover .title_container {
    bottom: 0px;
  }
  .image_container {
    aspect-ratio: 0.7;
    img {
      width: 100%;
      aspect-ratio: 0.7;
      z-index: -1;
    }
  }
`;
