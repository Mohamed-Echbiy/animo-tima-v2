import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { anime } from "../../interfaces";

// this a component for top favourite

function TopFav({ data }: anime | any) {
  const result = data.slice(0, 5).map((anime: anime) => {
    return (
      <div className={`list`} key={nanoid()}>
        <div className="list_image relative">
          <Link href={`/detail/${anime.malId}`}>
            <a title="">
              <Image
                src={anime.image}
                alt="cover image"
                width="55"
                height="200"
              />
            </a>
          </Link>
        </div>
        <div className="anime_information ml-2">
          <div className="anime_name text-base py-4 font-semibold text-center">
            <h3 className="text-xs">
              {anime.title.userPreferred.slice(0, 25)}
              {anime.title.length > 25 && "..."}
            </h3>
          </div>
          <div className="more_info flex justify-around items-center capitalize">
            <p>
              {anime.totalEpisodes}/<span className="font-semibold">Ep</span>
            </p>
            <p> {anime.duration} min </p>
            <p> {anime.type} </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Top_Fav className="top_fav">
      <h1 className="List_Header py-5 font-semibold">Favorite</h1>
      <>{result}</>
      <div className=" more_details py-5 font-semibold">
        <Link href={`/popular`}>
          <a title="more_details">More Details</a>
        </Link>
      </div>
    </Top_Fav>
  );
}

export default TopFav;

export const Top_Fav = styled.main`
  width: 24.5%;
  margin-bottom: 1.3rem;
  min-width: 320px;
  margin-right: 0.5%;
  .list {
    display: flex;
    flex-wrap: wrap;
    background-color: #4a4b51;
    height: 80px;
    .list_image {
      width: 15%;
      height: 100%;
      span {
        position: initial !important;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
    .anime_information {
      width: calc(100% - 88px);
      height: 120px;
      h3 {
        font-weight: 500;
        font-size: 12px;
      }
      p {
        font-size: 10px;
      }
    }
  }
  .more_details,
  .List_Header {
    width: 100%;
    text-align: center;
    background-color: #4a4b51;
    padding-left: 20px;
    letter-spacing: 1.5px;
  }
  .List_Header {
    color: gold;
    text-align: start;
  }
  & .list:nth-child(2),
  & .list:nth-child(4),
  & .list:nth-child(6) {
    background-color: #414248;
  }
`;
