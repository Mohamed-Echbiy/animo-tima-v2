import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { Play } from "../../Icons/Icons";
import { EpisodeVideos } from "../../interfaces";
import NotFound from "../NotFound";

function Episodes({ name }: [string, number] | any) {
  const Name = name[0]
    .split("")
    .map((letter: string) => {
      if (letter === " ") {
        return "-";
      } else if (
        letter === "?" ||
        letter === "!" ||
        letter === ":" ||
        letter === ";" ||
        letter === "(" ||
        letter === ")"
      ) {
        return "";
      } else {
        return letter;
      }
    })
    .join("");

  const [, id] = name;
  const [Page, setPage] = useState(1);
  const FetchEpisodes = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/videos/episodes?page=${Page}`
    );
    const data = await res.json();
    return { data };
  };
  const { data, isLoading, isError } = useQuery(
    ["Episodes", Page, name],
    FetchEpisodes,
    {
      keepPreviousData: true,
      refetchInterval: (data, isError) => (isError ? 2000 : false),
    }
  );
  if (isLoading) {
    return <h1>Please Wait we loading the Episodes</h1>;
  }
  if (isError) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  // DESTRUCTION
  const { data: Allresults } = data;
  const { data: results, pagination } = Allresults;
  console.log(results);
  return (
    <Episodes_Container className="mt-10 px-4 md:px-2 lg:px-3 xl:px-5 2xl:px-10">
      {pagination && (
        <>
          <h1>Episodes : </h1>
          <Buttons>
            {pagination.last_visible_page !== 1 && (
              <>
                <button
                  disabled={Page <= 1}
                  onClick={() => setPage((pre) => pre - 1)}
                >
                  prev
                </button>
                <button
                  disabled={!pagination.has_next_page}
                  onClick={() => setPage((pre) => pre + 1)}
                >
                  next
                </button>
              </>
            )}
          </Buttons>
          {results.length < 1 ? (
            <div className="w-full flex justify-center items-center mb-10">
              <button className="px-4 py-2 border-2 rounded border-lime-600 border-solid hover:scale-110 ease-in ">
                <Link href={`/watch/${id}_${Name}-episode-1`}>
                  <a className="text-xl md:text-3xl" title="watch The movie">
                    Watch 👀
                  </a>
                </Link>
              </button>
            </div>
          ) : (
            <>
              <Content>
                {results.map((e: EpisodeVideos) => (
                  <div key={nanoid()}>
                    <div className="episode">
                      <img
                        src={e.images.jpg.image_url}
                        width="100"
                        height="100"
                        alt={e.episode}
                      />

                      <div className="play_button">
                        <Link href={`/watch/${id}_${Name}-episode-${e.mal_id}`}>
                          <a title="watch the episode">
                            <Play />
                          </a>
                        </Link>
                      </div>
                      <p className="text-xs md:text-sm xl:text-base">
                        {e.episode}
                      </p>
                    </div>
                  </div>
                ))}
              </Content>
            </>
          )}
        </>
      )}
    </Episodes_Container>
  );
}

export default Episodes;

const Episodes_Container = styled.main`
  h1 {
    font-size: 2rem;
    color: gold;
    margin-bottom: 1rem;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  margin-bottom: 2.5rem;
  button {
    padding: 10px 20px;
    background-color: #045804;
    border-radius: 10px;
  }
  button:disabled {
    color: gray;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin: auto;
  @media (max-width: 420px) {
    justify-content: space-around;
  }
  div {
    width: 19.5%;
    margin-right: 0.5%;
    min-width: 135px;
  }
  /* .loading {
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
    border-radius: 10px 10px 0px 0px;
  } */
  .episode {
    width: 100%;
    min-width: 135px;
    max-width: 420px;
    margin-bottom: 1rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      filter: brightness(70%);
      border-radius: 10px 10px 0px 0px;
    }
    .play_button {
      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        width: 20%;
        height: 20%;
        svg {
          width: 100%;
          height: 100%;
          margin: auto;
          transform: translateY(-50%);
        }
      }
    }
    p {
      text-align: center;
      padding: 10px;
      background-color: #030303d7;
    }
  }
`;
/**
 */
