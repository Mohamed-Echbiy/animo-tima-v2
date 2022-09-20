import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import Link from "next/link";
import styled from "styled-components";
import { anime } from "../../interfaces";
import { Top_Fav } from "./TopFav";

function TopUpcoming() {
  const fetchData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/top/anime?filter=upcoming`
    );
    const data = await res.json();
    return data.data.slice(0, 5);
  };
  const { data, isLoading, isError } = useQuery(["dataUpcoming"], fetchData);
  if (isLoading) {
    return <></>;
  }
  const result = data.map((anime: anime) => {
    return (
      <div className={`list`} key={nanoid()}>
        <div className="list_image">
          <Link href={`/detail/${anime.mal_id}`}>
            <a title="">
              <img
                src={anime.images.webp.image_url}
                alt="cover image"
                width="200"
                height="200"
              />
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
            <p>{anime.season ? anime.season : "unkown"}</p>
            <p> {anime.year ? anime.year : "unkown"} </p>
            <p> {anime.type} </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Top_Upcoming className="top_fav">
      <h1 className="List_Header py-5 font-semibold">Upcoming</h1>
      <>{result}</>
      <div className="more_details py-5 font-semibold">
        <Link href={`/top_upcoming`}>
          <a title="more_details">More Details</a>
        </Link>
      </div>
    </Top_Upcoming>
  );
}

export default TopUpcoming;

const Top_Upcoming = styled(Top_Fav)`
  .anime_information {
    height: 120px;
  }
`;
