import { nanoid } from "nanoid";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";
import Header from "../../components/Header";
import { Play } from "../../Icons/Icons";
import { anilistInfo } from "../../interfaces";

interface videoData {
  headers: {
    Referer: string;
  };
  sources: [{ isM3U8: boolean; url: string }];
}

function id({
  results,
}: {
  results: [videoData, anilistInfo, string, string];
}) {
  const [data, info, id, episodeTitle] = results;
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const [search, setsearch] = useState(0);
  const [error, seterror] = useState(false);
  function handelChange(event: { target: { value: string | number } } | any) {
    if (+event.target.value === NaN) {
      seterror(true);
      setsearch(0);
    } else {
      if (
        +event.target.value > info.episodes.length ||
        event.target.value === ""
      ) {
        setsearch(info.episodes.length - 3);
      } else {
        setsearch(+event.target.value - 1);
      }
    }
  }

  const title = episodeTitle.replaceAll("-", " ");
  const episodeNumber = title.slice(title.lastIndexOf("-"));
  const animeEpisodeDetail = info.episodes.filter((e) => {
    if (e.number === +episodeNumber) {
      return e;
    }
  });
  return (
    <DivContainer>
      <Head>
        <title>AnimoTime / {title}</title>
        <meta
          name="description"
          content={`watch ${title} for free without any ads`}
        />
      </Head>
      <Header />
      <VideoContainer>
        <Image src={info.cover} layout="fill" priority={true} />
        <h2 className="ep__Title text-xl md:text-4xl mb-3 mt-3 text-center text-yellow-500">
          {animeEpisodeDetail[0].title}
        </h2>
        <p className="episode__number text-sm md:text-base mb-3">
          Episode Number :{" "}
          <span className="text-yellow-500">{episodeNumber}</span>
        </p>
        {hasWindow && (
          <ReactPlayer
            url={data.sources[0].url}
            width="none"
            height="auto"
            controls
            playing={false}
            className="video w-3/5"
          />
        )}
        <p className="episode__Description mt-5 pb-10 text-sm md:text-base text-gray-300 w-3/5 ">
          <span className="block text-yellow-500 text-base md:text-lg">
            Description :{" "}
          </span>
          {animeEpisodeDetail[0].description}
        </p>
      </VideoContainer>
      <div className="px-2 md:px-5 xl:px-7 mb-20">
        <h1 className="mt-5">Episodes :</h1>
        {info.episodes.length > 1 && (
          <div className="search">
            <input type="text" onChange={handelChange} placeholder="eg: 1" />
            <p className="text-center mb-3">{info.episodes.length} / Ep</p>
            {error && (
              <p className="text-red-400 text-xs block mb-3">
                search accept only numbers
              </p>
            )}
          </div>
        )}

        <div className="details flex justify-center flex-wrap">
          {info.episodes.slice(search, search + 5).map((anime) => (
            <div className="container flex-grow w-1/6  relative" key={nanoid()}>
              <Image src={anime.image} layout="fill" loading="lazy" />
              <p className="absolute block text-xs lg:text-sm z-10 w-fit left-1 top-1 p-1 px-3 first-letter:text-yellow-500 bg-black text-gray-200 rounded">
                Ep : {anime.number}
              </p>
              <div className="icon">
                <Link href={`/watch/${anime.id}@${info.id}`}>
                  <a>
                    <Play />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DivContainer>
  );
}
const DivContainer = styled.div`
  h1 {
    font-size: 2rem;
    color: gold;
    margin-bottom: 1rem;
  }
  input {
    padding: 3px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: black;
    margin-bottom: 15px;
    width: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 20%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .details {
    .container {
      aspect-ratio: 16/9;
      min-width: 150px;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      img {
        filter: brightness(80%);
      }
    }
  }
`;
const VideoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 117px);
  span {
    position: initial !important;
  }
  img {
    z-index: -1;
    filter: brightness(20%) saturate(120%) blur(10px);
  }
  .episode__Description {
    min-width: 290px;
  }
  .video {
    min-width: 290px;
    aspect-ratio: 16/9;
  }
`;
export default id;

export const getServerSideProps = async (context: {
  params: any;
  res: any;
}) => {
  const { params, res } = context;
  const url = await params.id;
  const episodeId = await url.slice(0, url.indexOf("@"));
  const Id = await url.slice(url.indexOf("@") + 1);
  const response = await fetch(`${process.env.HOSTNAME}watch/${episodeId}`);
  const data1 = await response.json();
  const InfoData = await fetch(`${process.env.HOSTNAME}info/${Id}`);
  const data2 = await InfoData.json();
  const results = [data1, data2, Id, episodeId];
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
      results,
    },
  };
};
