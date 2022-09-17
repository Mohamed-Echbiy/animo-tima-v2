import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Play } from "../../Icons/Icons";
import { recentEp } from "../../interfaces";
import { Recent_Episodes } from "../../components/Home/RecentEpisodes";
import Head from "next/head";
import Header from "../../components/Header";

interface EpData {
  data: {
    data: {
      entry: {
        mal_id: 0;
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
        title: "string";
      };
      episodes: [
        {
          mal_id: "string";
          url: "string";
          title: "string";
          premium: true;
        }
      ];
      region_locked: true;
    };
  };
}

function index({ data }: EpData | any) {
  const results = data.data.map((anime: recentEp) => (
    <div key={nanoid()} className="episode_item">
      <div className="image_container">
        <Link href={`/detail/${anime.entry.mal_id}`}>
          <a title="go to detail page">
            <img
              src={anime.entry.images.webp.image_url}
              alt={anime.episodes[0].title}
            />
          </a>
        </Link>
      </div>
      <div className="info">
        <div className="title_container">
          <h3 className="title text-center text-xs sm:text-sm md:text-base w-full px-1">
            {anime.entry.title}
          </h3>
        </div>
        <div className="blur_bg"></div>
        <p className="episode text-xs sm:text-sm md:text-base">
          Ep: {anime.episodes[0].mal_id}
        </p>
      </div>
      <div className="play_layer">
        <div className="play_icon w-1/4">
          <Link href={`/detail/${anime.entry.mal_id}`}>
            <a title="go to detail page">
              <Play />
            </a>
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <Head>
        <title>latest episodes</title>
        <meta name="description" content="watch all recant episodes for free" />
      </Head>
      <Header />
      <Full_Recent_Episodes className="px-1 md:px-3 lg:px-4 xl:px-5 2xl:px-7">
        <div className="text-container flex justify-between items-center w-full mt-5">
          <h1 className="w-full text-lg md:text-3xl">Latest Episodes :</h1>
        </div>
        <>{results}</>
      </Full_Recent_Episodes>
    </>
  );
}

const Full_Recent_Episodes = styled(Recent_Episodes)`
  padding: 0px 0.3rem;
  @media (min-width: 420px) {
    padding: 0px 0.6rem;
  }
  @media (min-width: 720px) {
    padding: 0px 0.9rem;
  }
  @media (min-width: 992px) {
    padding: 0px 1.2rem;
  }
  @media (min-width: 1220px) {
    padding: 0px 1.5rem;
  }
  @media (min-width: 1500px) {
    padding: 0px 1.8rem;
  }
  @media (min-width: 1800) {
    padding: 0px 2.1rem;
  }
`;

export default index;

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.jikan.moe/v4/watch/episodes`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
