import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { Play } from "../../Icons/Icons";
import { anime } from "../../interfaces";

function Seasons() {
  const [season, setSeason] = useState("SUMMER");
  //
  const fetchData = async () => {
    const res = await fetch(
      `https://consumet-api.herokuapp.com/meta/anilist/advanced-search?season=${season}`
    );
    const data = await res.json();
    return data.results.slice(0, 12);
  };
  const { data, isLoading, isError } = useQuery(
    ["seasonsData", season],
    fetchData,
    {
      staleTime: 3000 * 100,
      keepPreviousData: true,
    }
  );
  if (isLoading || isError) {
    return <></>;
  }
  //
  return (
    <div className="seasons_container my-12">
      <h1 className="title text-lg md:text-3xl text-yellow-500 mb-8">
        Seasons :
      </h1>
      <div className="seasons__buttons flex justify-center items-cente mb-8 w-full flex-wrap">
        <div className="season__button w-1/4 mx-auto text-center">
          <button
            className={`text-xs sm:text-sm md:text-base block px-2 py-2 md:w-32 mx-auto border-2 border-solid ${
              season === "SUMMER"
                ? "text-yellow-500 border-white"
                : "border-lime-700 text-gray-400"
            } rounded hover:scale-110 ease-in-out`}
            onClick={() => setSeason("SUMMER")}
          >
            Summer ☀️
          </button>
        </div>
        <div className="season__button w-1/4 mx-auto text-center">
          <button
            className={`text-xs sm:text-sm md:text-base block px-2 py-2 md:w-32 mx-auto border-2 border-solid ${
              season === "WINTER"
                ? "text-yellow-500 border-white"
                : "border-lime-700 text-gray-400"
            } rounded hover:scale-110 ease-in-out`}
            onClick={() => setSeason("WINTER")}
          >
            Winter ❄️
          </button>
        </div>
        <div className="season__button w-1/4 mx-auto text-center">
          <button
            className={`text-xs sm:text-sm md:text-base block px-2 py-2 md:w-32 mx-auto border-2 border-solid ${
              season === "SPRING"
                ? "text-yellow-500 border-white"
                : "border-lime-700 text-gray-400"
            } rounded hover:scale-110 ease-in-out`}
            onClick={() => setSeason("SPRING")}
          >
            Spring 🌱
          </button>
        </div>
        <div className="season__button w-1/4 mx-auto text-center">
          <button
            className={`text-xs sm:text-sm md:text-base block px-2 py-2 md:w-32 mx-auto border-2 border-solid ${
              season === "FALL"
                ? "text-yellow-500 border-white"
                : "border-lime-700 text-gray-400"
            } rounded hover:scale-110 ease-in-out`}
            onClick={() => setSeason("FALL")}
          >
            Fall 🍂
          </button>
        </div>
      </div>
      <div className="seasons__animes flex justify-center items-center flex-wrap">
        {data.map((anime: anime) => (
          <Container key={nanoid()} className="season_anime_container">
            <div className="anime__image">
              <Link href={`detail/${anime.id}`}>
                <a title="watch now">
                  <Image
                    src={anime.image}
                    alt="cover image"
                    width={130}
                    height={130}
                  />
                </a>
              </Link>
            </div>
            <div className="info">
              <div className="title_container hidden md:flex">
                <h3 className="title text-center text-xs sm:text-xs md:text-sm lg:text-base  w-full px-1">
                  {anime.title.userPreferred}
                </h3>
              </div>
              <div className="blur_bg hidden md:block"></div>
            </div>
            <div className="play_layer">
              <div className="play_icon w-1/4">
                <Link href={`/detail/${anime.id}`}>
                  <a title="go to detail page">
                    <Play />
                  </a>
                </Link>
              </div>
            </div>
          </Container>
        ))}
      </div>
      <div className="viewmore_container w-full text-right">
        <Link href={`/season/${season}`}>
          <a
            title={`watch top ${season} season animes`}
            className="text-xs sm:text-sm md:text-base text-gray-400 text-left md:pr-5"
          >
            view more {`>>`}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Seasons;

export const Container = styled.main`
  position: relative;
  overflow: hidden;
  width: 16%;
  flex-grow: 1;
  margin-right: 0.66%;
  margin-bottom: 1rem;
  min-width: 110px;
  .anime__image {
    position: relative;
    aspect-ratio: 0.7;
    a {
      width: 100%;
      height: 100%;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      aspect-ratio: 0.7;
      padding: 5px !important;
    }
  }
  span {
    position: initial !important;
  }
  //
  .info {
    .title_container {
      position: absolute;
      height: 80px;
      width: 100%;
      bottom: -95px;
      background-color: #2a2c31;
      align-items: center;
      color: gold;
      text-transform: capitalize;
      transition: ease 0.3s;
      font-weight: 600;
      z-index: 50;
      .title {
        @media (max-width: 390px) {
          font-size: 8px;
        }
      }
    }
    .blur_bg {
      position: absolute;
      width: 150%;
      height: 30px;
      background-color: #2a2c31;
      filter: blur(5px);
      bottom: -75px;
      left: -20px;
      z-index: 100;
      transition: ease 0.3s;
    }
  }
  &:hover .title_container {
    bottom: 0px;
  }
  &:hover .blur_bg {
    bottom: 60px;
  }
  .play_layer {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    top: 0px;
    left: 0px;
    justify-content: center;
    background-color: #00000085;
    opacity: 0;
    transition: ease 0.3s;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &:hover .play_layer {
    opacity: 1;
  }
`;
