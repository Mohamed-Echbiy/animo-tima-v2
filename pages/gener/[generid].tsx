import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../../components/Header";
import SearchCard from "../../components/serach/SearchCard";
import { dataOb, fullData, searchResult } from "../../interfaces";

interface data {
  data: fullData;
}
interface result {
  mal_id: any;
  url?: "string";
  images?: {
    jpg: {
      image_url: "string";
      small_image_url: "string";
      large_image_url: "string";
    };
    webp: {
      image_url: "string";
      small_image_url: "string";
      large_image_url: "string";
    };
  };
  trailer?: { youtube_id: "string"; url: "string"; embed_url: "string" };
  approved?: boolean;
  titles?: ["string"];
  title?: "string";
  title_english?: "string";
  title_japanese?: "string";
  title_synonyms?: ["string"];
  type?: "TV";
  source?: "string";
  episodes?: number;
  status?: "Finished Airing";
  airing?: boolean;
  aired?: {
    from: "string";
    to: "string";
    prop: {
      from: { day: number; month: number; year: number };
      to: { day: number; month: number; year: number };
      string: "string";
    };
  };
  duration?: "string";
  rating?: "G - All Ages";
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: "string";
  background?: "string";
  season?: "summer";
  year?: number;
  broadcast?: {
    day: "string";
    time: "string";
    timezone: "string";
    string: "string";
  };
  producers?: [
    { mal_id: number; type: "string"; name: "string"; url: "string" }
  ];
  licensors?: [
    { mal_id: number; type: "string"; name: "string"; url: "string" }
  ];
  studios?: [{ mal_id: number; type: "string"; name: "string"; url: "string" }];
  genres?: [{ mal_id: number; type: "string"; name: "string"; url: "string" }];
  explicit_genres?: [
    { mal_id: number; type: "string"; name: "string"; url: "string" }
  ];
  themes?: [{ mal_id: number; type: "string"; name: "string"; url: "string" }];
  demographics?: [
    { mal_id: number; type: "string"; name: "string"; url: "string" }
  ];
}

function Gener({ data }: data) {
  const { query } = useRouter();
  const gener = query.generid;
  const [page, setpage] = useState(1);
  function pagePlus() {
    setpage((pre) => pre + 1);
  }
  function pageMoin() {
    setpage((pre) => pre - 1);
  }

  const fetchData = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v4/anime?geners=${gener}&order_by=favorites&sort=desc&page=${page}`
    );
    const res = await data.json();
    return res;
  };
  const {
    data: client,
    isLoading,
    isError,
  } = useQuery(["data", page, gener], fetchData, { keepPreviousData: true });

  if (isLoading) {
    return <></>;
  }
  console.log(client);
  const results = client.data.map((result: result | any) => (
    <SearchCard key={result.mal_id} data={result} />
  ));
  return (
    <>
      <Head>
        <title>AnimoTime</title>
        <meta
          name="description"
          content="animo time a website to watch your favorite anime online without any ads"
        />
      </Head>
      <Header />
      <main className=" px-2 md:px-5 Container ">
        <div className="navigate flex flex-row-reverse justify-between my-10">
          {client.pagination.has_next_page ? (
            <button
              onClick={pagePlus}
              className="py-1 px-3 bg-yellow-600 rounded"
            >
              Next
            </button>
          ) : (
            <button className="bg-gray-500 py-1 px-3 rounded cursor-not-allowed">
              Next
            </button>
          )}
          {page > 1 ? (
            <button
              onClick={pageMoin}
              className="py-1 px-3 bg-yellow-600 rounde"
            >
              Previous
            </button>
          ) : (
            <button className="bg-gray-500 py-1 px-3 rounded cursor-not-allowed">
              Previous
            </button>
          )}
        </div>
        <div className="crads flex flex-wrap justify-center items-center">
          {results}
        </div>
      </main>
    </>
  );
}

export default Gener;

export const getServerSideProps = async (context: {
  params: any;
  res: any;
}) => {
  const { params, res } = context;
  const respo = await fetch(
    `https://api.jikan.moe/v4/anime?${params.generid}&page=1`
  );
  const data = await respo.json();
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
