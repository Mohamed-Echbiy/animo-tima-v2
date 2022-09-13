import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Gener() {
  return (
    <Div className="gener_container">
      <Link href={`/gener/${1}`}>
        <a className=" text-red-600">Action</a>
      </Link>
      <Link href={`/gener/${2}`}>
        <a className=" text-emerald-600">Adventure</a>
      </Link>
      <Link href={`/gener/${4}`}>
        <a className=" text-orange-500">Comedy</a>
      </Link>
      <Link href={`/gener/${8}`}>
        <a className=" text-fuchsia-700">Drama</a>
      </Link>
      <Link href={`/gener/${10}`}>
        <a className=" text-yellow-500">Fantasy</a>
      </Link>
      <Link href={`/gener/${14}`}>
        <a className=" text-black">Horror</a>
      </Link>
      <Link href={`/gener/${7}`}>
        <a className=" text-teal-500">Mystery</a>
      </Link>
      <Link href={`/gener/${22}`}>
        <a className=" text-cyan-400">Romance</a>
      </Link>
      <Link href={`/gener/${24}`}>
        <a className=" text-violet-400">Sci-Fi</a>
      </Link>
      <Link href={`/gener/${36}`}>
        <a className=" text-rose-500">Slice Of Life</a>
      </Link>
    </Div>
  );
}

export default Gener;

const Div = styled.div`
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  > a {
    font-size: 16px;
    margin: 0px 7px;
    margin-bottom: 10px;
  }
`;
