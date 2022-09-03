import Link from "next/link";
import styled from "styled-components";
import { dataOb } from "../../interfaces";
// -----------

function SearchCard({ data }: dataOb) {
  // console.log(data);
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
              placeholder="blur"
            />
          </a>
        </Link>
      </div>
      <div className="info mt-1">
        <h1 className="p-1 bg-white text-gray-900" title={data.title}>
          {title}
          {data.title.length > 20 && "..."}
        </h1>
        <div className="score_type">
          <p className="type"> {data.type} </p>
          <p className="score">{data.score}</p>
        </div>
      </div>
    </Div>
  );
}

export default SearchCard;
// ------------------------
export const Div = styled.div`
  display: block;
  width: 200px;
  margin: 0px 1rem;
  margin-bottom: 0.7rem;
  position: relative;
  .cover_image {
    height: 285px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .score_type {
    p {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      font-weight: bold;
      padding: 5px;
      background-color: #ffd900d1;
      text-align: center;
    }
    p.type {
      top: 0px;
      left: 0px;
    }
    p.score {
      transform: rotate(270deg);
      right: -18px;
      bottom: 55px;
      padding: 0px 10px;
    }
  }
`;
// ------------------------
