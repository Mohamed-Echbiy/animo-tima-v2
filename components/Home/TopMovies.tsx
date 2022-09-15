import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import styled from "styled-components";
import { anime } from "../../interfaces";
import { Top_Fav } from "./TopFav";

function TopMovies() {
  const fetchData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?type=movie`);
    const data = await res.json();
    return data.data.slice(0, 5);
  };
  const { data, isLoading, isError } = useQuery(["dataMovies"], fetchData);
  if (isLoading) {
    return <></>;
  }
  // console.log(data);
  const result = data.map((anime: anime) => {
    return (
      <div className={`list`}>
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
            <p> {anime.duration.slice(0, 2)}h </p>
            <p> {anime.type} </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Top_Movies className="top_movies px-2 md:px-4 lg:px-6">
      <h1 className="List_Header py-5 font-semibold">Movies</h1>
      <>{result}</>
      <div className="more_details py-5 font-semibold">
        <Link href={`/top_movies`}>
          <a title="more_details">More Details</a>
        </Link>
      </div>
    </Top_Movies>
  );
}
export default TopMovies;

const Top_Movies = styled(Top_Fav)``;
