import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { anime } from "../../interfaces";
import { Top_Fav } from "./TopFav";

// this a component for top favourite

function TopComplete({ data }: anime | any) {
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
            <h3 className="text-sm">
              {anime.title.userPreferred.slice(0, 25)}
              {anime.title.length > 25 && "..."}
            </h3>
          </div>
          <div className="more_info flex justify-around items-center text-xs  capitalize">
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
    <Top_Complete className="top_complete">
      <h1 className="List_Header py-5 font-semibold">Completed</h1>
      <>{result}</>
      <div className="more_details py-5 font-semibold">
        <Link href={`/completed`}>
          <a title="more_details">More Details</a>
        </Link>
      </div>
    </Top_Complete>
  );
}

export default TopComplete;

const Top_Complete = styled(Top_Fav)``;
