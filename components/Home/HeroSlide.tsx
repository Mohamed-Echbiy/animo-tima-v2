import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { nanoid } from "nanoid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Clock, Play, Time } from "../../Icons/Icons";
import Link from "next/link";
import { anime } from "../../interfaces";
import Image from "next/image";

interface hero_data {
  data: {
    hero_data: {
      data: any;
      mal_id: number;
      url: "string";
      images: {
        jpg: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
        webp: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
      };
      trailer: {
        youtube_id: "string";
        url: "string";
        embed_url: "string";
      };
      approved: boolean;
      titles: ["string"];
      title: "string";
      title_english: "string";
      title_japanese: "string";
      title_synonyms: ["string"];
      type: "TV";
      source: "string";
      episodes: number;
      status: "Finished Airing";
      airing: boolean;
      aired: {
        from: "string";
        to: "string";
        prop: {
          from: {
            day: number;
            month: number;
            year: number;
          };
          to: {
            day: number;
            month: number;
            year: number;
          };
          string: "string";
        };
      };
      duration: "string";
      rating: "G - All Ages";
      score: number;
      scored_by: number;
      rank: number;
      popularity: number;
      members: number;
      favorites: number;
      synopsis: "string";
      background: "string";
      season: "summer";
      year: number;
      broadcast: {
        day: "string";
        time: "string";
        timezone: "string";
        string: "string";
      };
      producers: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      licensors: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      studios: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      genres: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      explicit_genres: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      themes: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      demographics: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
    };
  };
}

function HeroSlide({ data }: hero_data | any) {
  return (
    <HeroSlider>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        preloadImages={false}
        lazy={true}
        className="Swiper-Container"
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
      >
        {data.map((anime: anime) => {
          return (
            <SwiperSlide
              className="swiper__Slider SwiperConatiner_Child"
              key={nanoid()}
            >
              <Container>
                <Image_Container className="lg:blur-0">
                  <Image
                    src={anime.cover}
                    alt="hero image"
                    layout="fill"
                    priority={true}
                  />
                </Image_Container>
                <Info className="px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-10">
                  <h1 className="text-base lg:text-xl 2xl:text-3xl mb-2 lg:mb-6 font-semibold">
                    {anime.title.userPreferred}
                  </h1>
                  <h2 className="text-sm lg:text-lg mb-2 lg:mb-6 font-semibold  2xl:text-2xl text-gray-400">
                    {anime.title.native}
                  </h2>
                  <ul className="flex items-center mb-2 lg:mb-6 flex-wrap text-gray-300 font-semibold text-xs lg:text-base  2xl:text-lg">
                    <li>
                      <Time /> {anime.totalEpisodes}/Ep
                    </li>
                    <li>
                      <Play /> {anime.type}
                    </li>
                    <li>
                      <Clock />
                      {anime.duration} min
                    </li>
                  </ul>
                  <p className=" text-xs md:text-sm mb-6 text-gray-300 hidden lg:block">
                    {anime.description.slice(0, 450)}
                    {anime.description.length > 450 && "..."}
                  </p>
                  <button>
                    <Link href={`/detail/${anime.id}`}>
                      <a title="go to detaile page">Details</a>
                    </Link>
                  </button>
                </Info>
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HeroSlider>
  );
}

export default HeroSlide;

// styling;

const HeroSlider = styled.div`
  > .Swiper-Container {
    .swiper-slide {
      transition: 0.5s ease;
    }
    > .swiper-button-next,
    > .swiper-button-prev {
      right: 30px;
      left: auto;
      top: 80% !important;
      height: fit-content;
      ::after {
        color: white;
        font-weight: bold;
        padding: 10px;
        background-color: black;
        border-radius: 5px;
        bottom: 0px;
        @media (min-width: 120px) {
          font-size: 10px;
        }
        @media (min-width: 768px) {
          font-size: 12px;
        }
        @media (min-width: 1024px) {
          font-size: 16px;
        }
        @media (min-width: 1280px) {
          font-size: 18px;
        }
      }
      @media (max-width: 820px) {
        display: none;
      }
    }
    .swiper-button-prev {
      transform: translateY(50%);
      margin-top: 5px;
    }
  }
  .swiper-pagination-bullet {
    display: none;
    @media (max-width: 820px) {
      display: inline-block;
      background-color: #ffffffe6;
    }
  }
  .swiper-pagination-bullet-active {
    display: none;
    @media (max-width: 820px) {
      display: inline-block;
      background-color: #04d804cf;
    }
  }
`;
//
const Container = styled.div`
  position: relative;
  max-height: calc(100vh - 117px);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 25px;
  aspect-ratio: 16/9;
  @media (max-width: 820px) {
    height: auto;
    width: 100%;
    aspect-ratio: 16/9;
    margin-top: 10px;
    padding: 0px 10px;
  }
`;
//
const Image_Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  padding: 25px;
  @media (max-width: 820px) {
    padding: 0px 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    filter: brightness(25%) saturate(200%);
    padding: 25px !important;
    border-radius: 40px;
    @media (max-width: 820px) {
      padding: 0px 10px !important;
      border-radius: 25px;
    }
  }
`;
const Info = styled.div`
  width: 860px;
  min-width: 320px;
  ul {
    li {
      margin-right: 20px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
        width: 15px;
        height: 15px;
      }
    }
  }
  button {
    padding: 5px 10px;
    background-color: black;
    border-radius: 5px;
    font-size: 0.7rem;
    text-align: center;
  }
`;
