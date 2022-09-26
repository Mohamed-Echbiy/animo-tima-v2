import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Play } from "../../Icons/Icons";
import { recentEp } from "../../interfaces";

function RecentEpisodes({ data }: { data: recentEp } | any) {
  const results = data.map((anime: recentEp) => (
    <div key={nanoid()} className="episode_item">
      <div className="image_container">
        <Link href={`/detail/${anime.malId}`}>
          <a title="go to detail page">
            <Image
              src={anime.image}
              alt={`episode number ${anime.episodeNumber}`}
              layout="fill"
              loading="lazy"
            />
          </a>
        </Link>
      </div>
      <div className="info">
        <div className="title_container hidden md:flex">
          <h3 className="title text-center text-xs w-full px-1 ">
            {anime.title.userPreferred}
          </h3>
        </div>
        <div className="blur_bg hidden md:block"></div>
        <p className="episode text-xs lg:text-sm">Ep: {anime.episodeNumber}</p>
      </div>
      <div className="play_layer">
        <div className="play_icon w-1/4">
          <Link href={`/detail/${anime.malId}`}>
            <a title="go to detail page">
              <Play />
            </a>
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <Recent_Episodes>
      <div className="text-container flex justify-between items-center w-full">
        <h1 className="w-full text-lg md:text-3xl">Recently Updated :</h1>
        <Link href={`/latest_episodes`}>
          <a
            title="watch all recent episodes"
            className="text-xs md:text-sm lg:text-base text-gray-400"
          >
            view more {`>>`}
          </a>
        </Link>
      </div>
      <>{results}</>
    </Recent_Episodes>
  );
}

export default RecentEpisodes;

export const Recent_Episodes = styled.main`
  .text-container {
    color: gold;
    padding: 0px 10px;
    margin-bottom: 2rem;
    a {
      min-width: fit-content;
    }
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  .episode_item {
    margin-bottom: 1rem;
    width: 16%;
    margin-right: 0.666%;
    min-width: 110px;
    position: relative;
    overflow: hidden;
    flex-grow: 1;
    .image_container {
      width: 100%;
      position: relative;
      aspect-ratio: 0.7;
      img {
        object-fit: fill;
        width: 100%;
        aspect-ratio: 0.7;
        padding: 5px;
      }
    }
    .info {
      .episode {
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 5px 8px;
        background-color: #000;
        margin: 5px 5px 0px 0px;
        border-radius: 10px;
      }
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
  }
`;
