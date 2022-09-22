import { nanoid } from "nanoid";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { Container } from "../../components/Home/Seasons";
import { Play } from "../../Icons/Icons";
import { anime } from "../../interfaces";

function seasonId({ data }: { data: anime } | { data: any }) {
  const { query } = useRouter();
  const result = data.map((anime: anime) => (
    <ContainerSeason key={nanoid()} className="season_animeContainer">
      <div className="anime__image">
        <Link href={`detail/${anime.malId}`}>
          <a title="watch now">
            <Image
              src={anime.image}
              alt="cover image"
              width={130}
              height={130}
              loading="lazy"
            />
          </a>
        </Link>
      </div>
      <div className="info">
        <div className="title_container">
          <h3 className="title text-center text-xs sm:text-xs md:text-sm lg:text-base w-full px-1">
            {anime.title.userPreferred}
          </h3>
        </div>
        <div className="blur_bg"></div>
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
    </ContainerSeason>
  ));
  return (
    <>
      <Head>
        <title>{query.seasonid}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`a list of ${query.seasonid} animes to watch for free without anny ads`}
        />
      </Head>
      <Header />
      <div className="seasons_container my-12">
        <div className="seasons__animes flex justify-center items-center flex-wrap">
          {result}
        </div>
      </div>
    </>
  );
}

export default seasonId;
// styling
const ContainerSeason = styled(Container)``;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { seasonid: "WINTER" } },
      { params: { seasonid: "SUMMER" } },
      { params: { seasonid: "FALL" } },
      { params: { seasonid: "SPRING" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: any }) => {
  const { params } = context;
  const response1 = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/advanced-search?season=${params.seasonid}&perPage=100&page=1`
  );
  const data1 = await response1.json();
  const response2 = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/advanced-search?season=${params.seasonid}&perPage=100&page=2`
  );
  const data2 = await response2.json();
  const response3 = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/advanced-search?season=${params.seasonid}&perPage=100&page=3`
  );
  const data3 = await response3.json();
  const data = [...data1.results, ...data2.results, ...data3.results];
  return {
    props: {
      data,
    },
  };
};