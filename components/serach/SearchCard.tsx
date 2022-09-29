import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Play } from "../../Icons/Icons";
import { anilistInfo } from "../../interfaces";

// -----------

function SearchCard({ data }: { data: anilistInfo }) {
  const title = data.title.userPreferred.slice(0, 19);
  const [hasCompleted, setHasCompleted] = useState(true);
  useEffect(() => {
    if (data.status === "Ongoing") {
      setHasCompleted(false);
    }
  }, []);
  // -----------

  return (
    <Div className="SearchCard">
      <div className="cover_image relative">
        <Link href={`/detail/${data.id}`}>
          <a title={`go to ${data.title.userPreferred} detail page`}>
            <Image src={data.image} alt="Cover image" layout="fill" />
          </a>
        </Link>
      </div>
      <div className="info mt-1">
        <div className="play__Icon">
          <Link href={`/detail/${data.id}`}>
            <a title="go to detail page">
              <Play />
            </a>
          </Link>
        </div>
        <div className="score_type hidden md:block text-xs md:text-sm">
          <h1
            className=" first-letter:text-yellow-500 title"
            title={data.title.userPreferred}
          >
            {title}
            {data.title.userPreferred.length > 20 && "..."}
          </h1>
          <p className=" first-letter:text-yellow-600 type">
            Type: {data.type} 📺
          </p>
          <p className=" first-letter:text-yellow-600 score">
            Rating: {data.rating}
          </p>
          <p className=" first-letter:text-yellow-600 status">
            Status : {data.status} {hasCompleted ? "✔️" : "👀"}
          </p>
          {data.hasOwnProperty("duration") && (
            <p className="first-letter:text-yellow-600 status">
              Duration ⏳ :{data.duration} min
            </p>
          )}
          {data.hasOwnProperty("genres") && (
            <div className="flex flex-wrap items-center justify-center mt-1">
              {data.genres.map((e) => (
                <p className="first-letter:text-yellow-600 status px-1 border border-solid mr-2 text-xs border-yellow-600">
                  {e}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </Div>
  );
}

export default SearchCard;
// ------------------------
export const Div = styled.div`
  display: block;
  width: 16%;
  margin-right: 0.6%;
  margin-bottom: 8px;
  position: relative;
  border-radius: 10px;
  min-width: 110px;
  .cover_image {
    height: auto;
    aspect-ratio: 0.7;
    span {
      position: initial !important;
    }
    img {
      height: 100%;
      width: 100%;
      aspect-ratio: 0.7;
    }
  }
  .info {
    position: absolute;
    top: -5px;
    padding-left: 5px;
    height: 100%;
    width: 100%;
    background-color: #040303e2;
    display: flex;
    flex-direction: column;
    justify-content: end;
    scale: 0;
    .play__Icon {
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
      width: 20%;
      height: 20%;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .score_type {
      padding: 10px;
    }
  }
  .cover_image:hover + .info,
  .info:hover {
    scale: 1;
  }
`;
// ------------------------
