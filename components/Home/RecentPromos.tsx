import Youtube, { YouTubeProps } from "react-youtube";
import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { recentEp } from "../../interfaces";

function RecentPromos({ data }: { data: recentEp } | any) {
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
        loading="lazy"
        className="video mb-5"
        key={nanoid()}
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
    margin-bottom: 2rem;
    margin-top: 3rem;
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
