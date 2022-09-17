import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import Link from "next/link";
import styled from "styled-components";
import { anime } from "../../interfaces";

// this a component for top favourite

function TopFav() {
  const fetchData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/top/anime?filter=favorite`
    );
    const data = await res.json();
    return data.data.slice(0, 5);
  };
  const { data, isLoading, isError } = useQuery(["data"], fetchData);
  if (isLoading) {
    return <></>;
  }
  // console.log(data);
  const result = data.map((anime: anime) => {
    return (
      <div className={`list`} key={nanoid()}>
        <div className="list_image">
          <Link href={`/detail/${anime.mal_id}`}>
            <a title="">
              <img src={anime.images.webp.image_url} alt="cover image" />
            </a>
          </Link>
        </div>
        <div className="anime_information ml-2">
          <div className="anime_name text-base py-4 font-semibold text-center">
            <h3>
              {anime.title.slice(0, 25)} {anime.title.length > 25 && "..."}
            </h3>
          </div>
          <div className="more_info flex justify-around items-center text-sm capitalize">
            <p>{anime.score}</p>
            <p> {anime.duration.slice(0, 2)} min </p>
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
      <div className="more_details py-5 font-semibold">
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
    .list_image {
      width: 80px;
      img {
        width: 100%;
      }
    }
    .anime_information {
      width: calc(100% - 88px);
      height: 120px;
    }
  }
  .more_details,
  .List_Header {
    width: 100%;
    text-align: center;
    background-color: #4a4b51;
    font-size: 1.3rem;
    padding-left: 20px;
    letter-spacing: 1.5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .List_Header {
    color: gold;
    font-size: 1.5rem;
    text-align: start;
    border-radius: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  & .list:nth-child(2),
  & .list:nth-child(4),
  & .list:nth-child(6) {
    background-color: #414248;
  }
`;
