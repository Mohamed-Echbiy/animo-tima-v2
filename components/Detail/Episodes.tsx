import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import { Play } from "../../Icons/Icons";
import NotFound from "../NotFound";

function Episodes({ id }) {
  const [Page, setPage] = useState(1);
  const [ImageLoad, setImageLoad] = useState(false);
  const FetchEpisodes = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/videos/episodes?page=${Page}`
    );
    const data = await res.json();
    return data;
  };
  const { data, isLoading } = useQuery(["Episodes", Page], FetchEpisodes, {
    keepPreviousData: true,
  });
  if (isLoading) {
    return <></>;
  }
  // DESTRUCTION
  const { data: results, pagination } = data;
  console.log(results);
  // console.log(Page);
  return (
    <Episodes_Container className="mt-10 px-4 md:px-2 lg:px-3 xl:px-5 2xl:px-10">
      <h1>Episodes : </h1>
      <Buttons>
        {data.pagination.last_visible_page !== 1 && (
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
            {results.map((e) => (
              <>
                <div key={nanoid()} className="episode">
                  <img
                    src={e.images.jpg.image_url}
                    width="100"
                    height="100"
                    alt={e.episode}
                    onLoad={() => setImageLoad((pre) => true)}
                  />

                  <div className="play_button">
                    <a href={e.url} title="watch the episode">
                      <Play />
                    </a>
                  </div>
                  {!ImageLoad && <div className="loading shine"></div>}
                  <p>{e.episode}</p>
                </div>
              </>
            ))}
          </Content>
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
  justify-content: space-around;
  position: relative;
  .loading {
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
  }
  .episode {
    width: 24%;
    min-width: 140px;
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
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media (max-width: 760px) {
        svg {
          width: 20px;
          height: 20px;
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
