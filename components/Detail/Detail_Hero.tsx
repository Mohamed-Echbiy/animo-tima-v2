import styled from "styled-components";
import { useState } from "react";
import Header from "../Header";
import { nanoid } from "nanoid";
import Image from "next/image";
import { anilistInfo } from "../../interfaces";

//-------------------------

function DetailHero({ data }: { data: anilistInfo }) {
  // console.log(data);
  const [showMore, setshowMore] = useState(false);
  const summaryVsibility = () => {
    setshowMore((pre) => !pre);
  };
  let summary;
  if (data.hasOwnProperty("description")) {
    summary = data.description.slice(0, 350);
  }
  return (
    <>
      <Header />
      <Div_A className="Detail_page">
        <div className="hero_container">
          <div className="background__image ">
            <Image
              src={data.cover}
              alt="background image"
              layout="fill"
              priority={true}
              className="hidden lg:block"
            />
          </div>
          <div className="infos px-7 mt-10  md:mt-0">
            <div className="image_summary">
              <div className="cover_image mb-3 mt-3 relative">
                <Image
                  src={data.image}
                  alt={`cover image`}
                  layout="fill"
                  priority={true}
                  className="mb-2"
                />
              </div>
              <div className="title_summary ml-10 flex flex-col md:flex-row md:items-center">
                <div className="summary mt-5">
                  <h1 className="title text-2xl lg:text-3xl">
                    {data.title.userPreferred}
                  </h1>
                  <p className="synposis h-40 overflow-y-scroll">
                    {showMore ? data.description : `${summary}...`}
                    <span
                      className="block text-green-700 font-semibold cursor-pointer"
                      onClick={summaryVsibility}
                    >
                      {showMore ? "less -" : "more +"}
                    </span>
                  </p>
                </div>
                <div className="more_details md:ml-2">
                  <p className="title_japanese text-yellow-400">
                    {data.synonyms[0]}
                  </p>
                  <p className="releaseDate">
                    releaseDate:{" "}
                    <span className="text-yellow-500">{data.releaseDate}</span>
                  </p>
                  <p className="type">
                    Type: <span className="text-yellow-500">{data.type}</span>
                  </p>
                  <p className="status">
                    Status:{" "}
                    <span className="text-yellow-500">{data.status}</span>
                  </p>
                  <p className="duration">
                    Duration:{" "}
                    <span className="text-yellow-500">{data.duration}</span>
                  </p>
                  <p className="eposides">
                    Episodes:{" "}
                    <span className="text-yellow-500">
                      {data.totalEpisodes}
                    </span>
                  </p>
                  <p className="score">
                    Score:{" "}
                    <span className="text-yellow-500">{data.rating}</span>
                  </p>
                  <p className="gener mb-2 flex items-center flex-wrap">
                    <span className="block mb-2 w-full">Genre:</span>
                    {data.genres.map((e: string | number | boolean) => (
                      <span
                        key={nanoid()}
                        className="p-1 mr-1 mb-1 border border-solid rounded-lg"
                      >
                        <span className="">{e}</span>
                      </span>
                    ))}
                  </p>
                  <p>
                    Studios:{" "}
                    {data.studios.map((e: string | number | boolean) => (
                      <span key={nanoid()} className="text-yellow-500">
                        {e}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Div_A>
    </>
  );
}

export default DetailHero;

//-----------------------------------

const Div_A = styled.div`
  span {
    position: initial !important;
  }
  min-height: 100vh;
  position: relative;
  .background__image {
    z-index: -1;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      filter: blur(5px) brightness(43%) saturate(150%);
      @media (max-width: 820px) {
        filter: blur(25px) brightness(43%) saturate(150%);
      }
    }
  }
  .cover_image {
    width: 20%;
    min-width: 200px;
    aspect-ratio: 0.7;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      box-shadow: 0px 0px 20px 5px #000000b8;
    }
  }
  .infos {
    width: 100%;
    display: flex;
    align-items: center;
    min-height: calc(100vh - 130px);
    .image_summary {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      h1 {
        margin-bottom: 5px;
        font-weight: 600;
        color: gold;
      }
      .title_summary {
        width: 75%;
        flex-grow: 1;
      }
      .summary {
        min-width: 300px;
      }
    }
    .more_details {
      min-width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 10px;
    }
  }
`;
