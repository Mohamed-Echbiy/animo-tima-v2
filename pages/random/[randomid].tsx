import Head from "next/head";
import React from "react";
import Characters from "../../components/Detail/Character";
import DetailHero from "../../components/Detail/Detail_Hero";
import Episodes from "../../components/Detail/Episodes";
import { fullData } from "../../interfaces";

export default function randomids({ data }: fullData) {
  const { data: result } = data;
  console.log(result.mal_id);
  return (
    <>
      <Head>
        <title>{result.title}</title>
        <meta
          name="description"
          content="animo time a website to watch your favorite anime online without any ads"
        />
      </Head>
      <main className="Container">
        <DetailHero data={result} />
        <Characters id={result.mal_id} />
        <Episodes id={result.mal_id} />
      </main>
    </>
  );
}

export const getServerSideProps = async (context: {
  params: any;
  res: any;
}) => {
  const { params, res } = context;

  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${params.randomid}/full`
  );
  const data = await response.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
      data,
    },
  };
};
