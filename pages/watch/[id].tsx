import { nanoid } from "nanoid";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";
import Header from "../../components/Header";
import NotFound from "../../components/NotFound";
import { anime } from "../../interfaces";

function id({
  data,
}: {
  data: [
    { Reffer: string; sources: [{ file: string }] },
    { data: anime },
    string
  ];
}) {
  const [episodeAvailble, setEpAvailble] = useState(true);
  const [episodeData, details, epId] = data;
  const { data: results } = details;
  const episodeId = epId.slice(0, epId.lastIndexOf("-"));
  const [hasWindow, setHasWindow] = useState(false);
  let episodes_list = [];
  for (let index = 1; index <= results.episodes; index++) {
    episodes_list.push(`${episodeId}-${index}`);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
    if (episodeData.sources === undefined) {
      setEpAvailble(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{epId}</title>
        <meta
          name="description"
          content="watch anime episodes free on AnimoTime"
        />
      </Head>
      <Header />
      <Div className="Container relative pt-7 px-2 md:px-3 lg:px-5">
        <h1 className="episode_title text-xl md:text-4xl p-5 w-full text-center">
          {epId} :
        </h1>
        <img
          src={results.images.webp.large_image_url}
          className=" absolute w-full h-full top-0 left-0 blur-2xl -z-10 brightness-50"
        />
        {hasWindow && (
          <>
            {episodeAvailble ? (
              <ReactPlayer
                url={episodeData.sources[0].file}
                width="none"
                height="auto"
                controls
                light={`background-color: balck`}
                playing={true}
                className="video flex justify-center items-center"
              />
            ) : (
              <NotFound />
            )}
          </>
        )}
        <div className="details py-2">
          <div className="cover__image mb-3">
            <img
              src={results.images.webp.image_url}
              alt={`${results.title} cover image`}
            />
          </div>
          <div className="title mb-3">
            <h1 className="h1_title text-base md:text-3xl mb-1 text-lime-400 font-semibold">
              {results.title}
            </h1>
            <h2 className="h2_title-japanese text-sm md:text-2xl text-gray-400 mb-3">
              {results.title_japanese}
            </h2>
          </div>
          <div className="more_details flex items-center justify-around text-xs sm:text-sm md:text-base flex-wrap mb-3 font-semibold">
            <p className="status py-1 mb-1 px-2 border border-lime-400 border-solid text-gray-200 rounded">
              {results.type} 📺
            </p>
            <p className="episodes py-1 mb-1 px-2 border border-lime-400 border-solid text-gray-200 rounded">
              Ep/{results.episodes}
            </p>
            <p className="score py-1 mb-1 px-2 border border-lime-400 border-solid text-gray-200 rounded">
              {results.score} ⭐
            </p>
            <p className="status py-1 mb-1 px-2 border border-lime-400 border-solid text-gray-200 rounded">
              {results.status}
            </p>
          </div>
          <div className="synopsis_container mb-3">
            <h1 className="synopsis_title text-lg mb-2 mt-2 font-semibold">
              Story 🖊️:
            </h1>
            <p className="synopsis text-xs md:text-sm text-gray-300">
              {results.synopsis}
            </p>
          </div>
          <button className=" py-2 px-4 bg-lime-500 text-black rounded">
            <Link href={`/detali/${results.mal_id}`}>
              <a title="more details">More Details</a>
            </Link>
          </button>
        </div>
        {episodes_list.length > 0 && (
          <div className="episodes_list my-10">
            <h1 className="episodes-number text-4xl w-full mb-5">Episodes :</h1>
            {episodes_list.map((e, index) => (
              <Link href={`/watch/${results.mal_id}_${e}`} key={nanoid()}>
                <a className=" w-20 h-20 mb-2 flex items-center justify-center border-solid border-lime-500 border-4 rounded-md text-2xl text-center mr-2 font-semibold  ">
                  {index + 1}
                </a>
              </Link>
            ))}
          </div>
        )}
      </Div>
    </>
  );
}

export default id;

// styling

const Div = styled.div`
  min-height: calc(100vh - 130px);
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #000000ad;
  justify-content: center;
  flex-direction: column;
  .video {
    min-width: 300px !important;
    max-width: 820px !important;
    /* height: calc(100vh - 130px) !important; */
    margin-bottom: 4rem;
    aspect-ratio: 16/9;
    flex-grow: 2;
    flex-shrink: 3;
    min-height: 200px;
    > div {
      background-color: black;
      min-height: 200px;
    }
    video {
      width: 100% !important;
      aspect-ratio: 16/9 !important;
      min-width: 300px !important;
      display: block;
      margin: auto;
    }
  }
  .details {
    min-width: 290px;
    max-width: 720px;
    max-height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    .cover__image {
      width: 100px;
      img {
        width: 100%;
      }
    }
    .title {
      h2 {
        word-break: keep-all;
        padding: 0px 2px;
      }
    }
  }
  .episodes_list {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const getServerSideProps = async (context: {
  params: any;
  res: any;
}) => {
  const { params, res } = context;
  const Index = params.id.indexOf("_");
  const epId = params.id.slice(Index + 1);
  const Id = params.id.slice(0, Index);
  const response = await fetch(
    `https://gogoanime.herokuapp.com/vidcdn/watch/${epId}`
  );
  const data1 = await response.json();
  const details_Res = await fetch(`https://api.jikan.moe/v4/anime/${Id}/full`);
  const details = await details_Res.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
      data: [data1, details, epId],
    },
  };
};
