import Link from "next/link";
import styled from "styled-components";
import { Aproved, Clock, Play, Rejected } from "../../Icons/Icons";
import { dataOb } from "../../interfaces";
// -----------

function SearchCard({ data }: dataOb) {
  const title = data.title.slice(0, 19);
  // -----------

  return (
    <Div className="SearchCard">
      <div className="cover_image">
        <Link href={`/detail/${data.mal_id}`}>
          <a title={`go to ${data.title} detail page`}>
            <img
              src={data.images.webp.image_url}
              alt="Cover image"
              width="200"
              height="285"
            />
          </a>
        </Link>
      </div>
      <div className="info mt-1">
        <p className="approved">{data.approved ? <Aproved /> : <Rejected />}</p>
        <div className="play__Icon">
          <Link href={`/detail/${data.mal_id}`}>
            <a title="go to detail page">
              <Play />
            </a>
          </Link>
        </div>
        <div className="score_type">
          <h1 className="title" title={data.title}>
            {title}
            {data.title.length > 20 && "..."}
          </h1>
          <p className="type">Type: {data.type}</p>
          <p className="score">Score: {data.score}</p>
          <p className="duration flex items-center">
            <Clock /> {data.duration}
          </p>
          <p className="source">Source: {data.source}</p>
        </div>
      </div>
    </Div>
  );
}

export default SearchCard;
// ------------------------
export const Div = styled.div`
  display: block;
  width: 300px;
  margin: 0px 1rem;
  margin-bottom: 50px;
  position: relative;
  border-radius: 10px;
  .cover_image {
    height: 410px;
    img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
  }
  .info {
    position: absolute;
    top: -5px;
    padding-left: 5px;
    height: 100%;
    width: 100%;
    background-color: #040303b4;
    display: flex;
    flex-direction: column;
    justify-content: end;
    scale: 0;
    .play__Icon {
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
      width: 70px;
      height: 70px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .score_type {
      padding: 10px;
    }
    .approved {
      position: absolute;
      top: 10px;
    }
  }
  .cover_image:hover + .info,
  .info:hover {
    scale: 1;
  }
`;
// ------------------------
