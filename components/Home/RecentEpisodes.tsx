import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { recentEp } from "../../interfaces";

function RecentEpisodes() {
  const fetchData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/watch/episodes`);
    const data = await res.json();
    return data.data;
  };
  const { data, isLoading, isError } = useQuery(["recentep"], fetchData);
  if (isLoading) {
    return <></>;
  }
  const results = data.map((anime: recentEp) => (
    <div key={nanoid()} className="episode_item">
      <div className="image_container">
        <Link href={`/detail/${anime.entry.mal_id}`}>
          <a title="go to detail page">
            <img
              src={anime.entry.images.webp.image_url}
              alt={anime.episodes[0].title}
            />
          </a>
        </Link>
      </div>
      <div className="info">
        <div className="title">
          <h3 className="title"> {anime.entry.title} </h3>
        </div>
        <p className="episode">Ep: {anime.episodes[0].mal_id} </p>
      </div>
    </div>
  ));
  console.log(data);
  return (
    <Recent_Episodes>
      <h1 className="w-full text-2xl">Recently Updated</h1>
      <>{results}</>
    </Recent_Episodes>
  );
}

export default RecentEpisodes;

const Recent_Episodes = styled.main`
  h1 {
    color: gold;
    padding: 10px;
    margin: 4rem 0px;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  max-width: 1800px;
  margin: auto;
  .episode_item {
    width: 16%;
    min-width: 145px;
    .image_container {
      width: 100%;
      img {
        object-fit: fill;
        width: 100%;
        aspect-ratio: 0.7;
      }
    }
  }
`;
