import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { nanoid } from "nanoid";

import "swiper/css";
import "swiper/css/navigation";
import { Clock, Play, Time } from "../../Icons/Icons";
import Link from "next/link";

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
  const { hero_data } = data;
  return (
    <HeroSlider>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        className="Swiper-Container"
        autoplay={{
          delay: 3000,
        }}
      >
        {hero_data.data.slice(0, 10).map(
          (anime: {
            images: { webp: { large_image_url: string | undefined } };
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            title_japanese:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            broadcast: {
              string:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            };
            type:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | null
              | undefined;
            duration:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            synopsis: string | any[];
            mal_id: any;
          }) => {
            return (
              <SwiperSlide className="swiper__Slider" key={nanoid()}>
                <Container>
                  <Image>
                    <img
                      src={anime.images.webp.large_image_url}
                      alt="hero image"
                      width="200"
                      height="200"
                    />
                  </Image>
                  <Info className="px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-10">
                    <h1 className="text-xl lg:text-xl 2xl:text-5xl mb-6 font-semibold">
                      {anime.title}
                    </h1>
                    <h2 className="text-base lg:text-lg mb-6 font-semibold  2xl:text-4xl text-gray-400">
                      {anime.title_japanese}
                    </h2>
                    <ul className="flex items-center mb-6 flex-wrap text-gray-300 font-semibold text-sm lg:text-base  2xl:text-xl">
                      <li>
                        <Time /> {anime.broadcast.string}
                      </li>
                      <li>
                        <Play /> {anime.type}
                      </li>
                      <li>
                        <Clock />
                        {anime.type === "TV" ? "24 min" : anime.duration}
                      </li>
                    </ul>
                    <p className=" text-xs md:text-sm lg:text-base  mb-6 text-gray-300">
                      {anime.synopsis.slice(0, 450)}
                      {anime.synopsis.length > 450 && "..."}
                    </p>
                    <button>
                      <Link href={`/detail/${anime.mal_id}`}>
                        <a title="go to detaile page">Details</a>
                      </Link>
                    </button>
                  </Info>
                </Container>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </HeroSlider>
  );
}

export default HeroSlide;

// styling

const HeroSlider = styled.div`
  height: calc(100vh - 130px);
  > .Swiper-Container {
    .swiper-slide {
      transition: 0.5s ease;
    }
    > .swiper-button-next,
    > .swiper-button-prev {
      right: 30px;
      left: auto;
      top: 85% !important;
      ::after {
        color: white;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 15px;
        background-color: black;
        border-radius: 5px;
        bottom: 0px;
      }
    }
    .swiper-button-prev {
      transform: translateY(100%);
    }
  }
`;
const Container = styled.div`
  position: relative;
  height: calc(100vh - 130px);
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    filter: blur(10px) brightness(20%);
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
        width: 20px;
        height: 20px;
      }
    }
  }
  button {
    padding: 10px 20px;
    background-color: black;
    border-radius: 10px;
    font-size: 1.3rem;
    text-align: center;
  }
`;
