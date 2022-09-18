import { useQuery } from "@tanstack/react-query";
import Youtube, { YouTubeProps } from "react-youtube";
import React from "react";
import styled from "styled-components";

function RecentPromos() {
  const fetchData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/watch/promos`);
    const data = await res.json();
    return data.data.slice(0, 3);
  };
  const { data, isLoading, isError } = useQuery(["recentpromos"], fetchData, {
    refetchInterval: (data, isError) => (isError ? 3000 : 0),
  });
  if (isLoading) {
    return <></>;
  }
  console.log(data);
  if (isError) {
    return <></>;
  }
  const opts: YouTubeProps["opts"] = {
    height: "100",
    width: "100",
  };
  const result = data.map(
    (trailer: {
      trailer: { youtube_id: string | undefined };
      entry: { images: { webp: { image_url: string | undefined } } };
    }) => (
      <Youtube
        videoId={trailer.trailer.youtube_id}
        opts={opts}
        loading={"lazy"}
        className="video mb-5"
      />
    )
  );
  return (
    <Recent_Promos>
      <h1 className="text-lg md:text-3xl ">Recent Promos:</h1>
      <Div className="video_container">{result}</Div>
    </Recent_Promos>
  );
}

export default RecentPromos;

const Recent_Promos = styled.main`
  h1 {
    margin-bottom: 4rem;
    margin-top: 6rem;
    color: gold;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  .video {
    width: 32.5%;
    aspect-ratio: 16/9;
    min-width: 200px;
    flex-grow: 1;
    margin-right: 0.8%;
    iframe {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`;
