import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { Play } from "../../Icons/Icons";
import { anilistInfo } from "../../interfaces";
import NotFound from "../NotFound";

interface episodeData {
  description: string;
  id: string;
  image: string;
  number: number;
  title: string;
}

function Episodes({ data }: { data: anilistInfo }) {
  const [search, setsearch] = useState(0);
  const [error, seterror] = useState(false);
  function handelChange(event: { target: { value: string | number } } | any) {
    if (+event.target.value === NaN) {
      seterror(true);
      setsearch(0);
    } else {
      if (
        +event.target.value > data.episodes.length ||
        event.target.value === ""
      ) {
        setsearch(data.episodes.length - 3);
      } else {
        setsearch(+event.target.value - 1);
      }
    }
  }
  return (
    <>
      <Episodes_Container className="mt-10 px-4 md:px-2 lg:px-3 xl:px-5 2xl:px-10">
        <h1>Episodes :</h1>
        {data.episodes.length > 1 && (
          <div className="search">
            <input type="text" onChange={handelChange} placeholder="eg: 1" />
            <p className="text-center mb-3">{data.episodes.length} / Ep</p>
            {error && (
              <p className="text-red-400 text-xs block mb-3">
                search accept only numbers
              </p>
            )}
          </div>
        )}
        <Content>
          {data.episodes
            .slice(search, search + 5)
            .map((e: episodeData, index: number) => (
              <div
                key={Math.pow(+data.id, +data.malId)}
                className="containerEpisode"
              >
                <div className="episode">
                  <Image src={e.image} layout="fill" alt={`${e.number}`} />
                  <div className="play_button">
                    <div className=" cursor-pointer w-2/12 h-1/6">
                      <Link href={`/watch/${e.id}@${data.id}`}>
                        <a>
                          <Play />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <p className="text-xs lg:text-sm z-10 first-letter:text-yellow-500 ">
                    episode : {e.number}
                  </p>
                </div>
              </div>
            ))}
        </Content>
      </Episodes_Container>
    </>
  );
}

export default Episodes;

const Episodes_Container = styled.main`
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
  span {
    position: initial !important;
  }
  h1 {
    font-size: 2rem;
    color: gold;
    margin-bottom: 1rem;
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
  div.containerEpisode {
    width: 19%;
    margin-right: 1%;
    min-width: 135px;
    flex-grow: 1;
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
    margin-bottom: 1rem;
    aspect-ratio: 16/9;
    border: 2px gold solid;
    box-shadow: 0px 8px 20px 2px black;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      filter: brightness(90%) saturate(130%);
      z-index: -1;
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
      svg {
        width: 100%;
        height: 100%;
        margin: auto;
        cursor: pointer;
      }
    }
    p {
      text-align: center;
      padding: 10px;
      background-color: #030303d7;
    }
  }
`;
