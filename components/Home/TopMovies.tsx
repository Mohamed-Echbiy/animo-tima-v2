import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { anime } from "../../interfaces";
import { Top_Fav } from "./TopFav";
function TopMovies({ data }: anime | any) {
  const result = data.map((anime: anime) => {
    return (
      <div className={`list`} key={nanoid()}>
        <div className="list_image relative">
          <Link href={`/detail/${anime.id}`}>
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
            <h3 className="text-sm">
              {anime.title.english.slice(0, 25)}{" "}
              {anime.title.english.length > 25 && "..."}
            </h3>
          </div>
          <div className="more_info flex justify-around items-center text-xs capitalize">
            <p>{anime.rating}</p>
            <p> {anime.duration}h </p>
            <p> {anime.type} </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Top_Movies className="top_movies">
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
