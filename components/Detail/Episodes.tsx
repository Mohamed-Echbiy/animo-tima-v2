import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import { Play } from "../../Icons/Icons";
import { EpisodeVideos } from "../../interfaces";
import NotFound from "../NotFound";

function Episodes({ id }: Number | any) {
  const [Page, setPage] = useState(1);
  const FetchEpisodes = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/videos/episodes?page=${Page}`
    );
    const data = await res.json();
    return data;
  };
  const { data, isLoading, isError } = useQuery(
    ["Episodes", Page, id],
    FetchEpisodes,
    {
      keepPreviousData: true,
      refetchInterval: (data, isError) => (isError ? 2000 : 0),
    }
  );
  if (isLoading) {
    return <></>;
  }
  if (isError) {
    return <></>;
  }
  // DESTRUCTION
  const { data: results, pagination } = data;
  // console.log(data);
  return (
    <Episodes_Container className="mt-10 px-4 md:px-2 lg:px-3 xl:px-5 2xl:px-10">
      <h1>Episodes : </h1>
      {pagination && (
        <>
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
                  disabled={!data.pagination.has_next_page}
                  onClick={() => setPage((pre) => pre + 1)}
                >
                  next
                </button>
              </>
            )}
          </Buttons>
          {results.length < 1 ? (
            <NotFound />
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
                        onErrorCapture={() => console.log("error")}
                      />

                      <div className="play_button">
                        <a href={e.url} title="watch the episode">
                          <Play />
                        </a>
                      </div>
                      <p>{e.episode}</p>
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
    margin-bottom: 1.25rem;
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
