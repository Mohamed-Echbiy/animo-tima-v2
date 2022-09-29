import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
import { anilistInfo } from "../../interfaces";
import { Recent_Episodes } from "../../components/Home/RecentEpisodes";
import Head from "next/head";
import Header from "../../components/Header";
import SearchCard from "../../components/serach/SearchCard";

function index({ data }: { data: [anilistInfo] }) {
  const results = data.map((anime: anilistInfo) => (
    <SearchCard data={anime} key={nanoid()} />
  ));
  return (
    <>
      <Head>
        <title>latest episodes</title>
        <meta name="description" content="watch all recant episodes for free" />
      </Head>
      <Header />
      <Full_Recent_Episodes className="px-1 md:px-3 lg:px-4 xl:px-5 2xl:px-7">
        <div className="text-container flex justify-between items-center w-full mt-5">
          <h1 className="w-full text-lg md:text-3xl">Latest Episodes :</h1>
        </div>
        <>{results}</>
      </Full_Recent_Episodes>
    </>
  );
}

const Full_Recent_Episodes = styled(Recent_Episodes)`
  padding: 0px 0.3rem;
  @media (min-width: 420px) {
    padding: 0px 0.6rem;
  }
  @media (min-width: 720px) {
    padding: 0px 0.9rem;
  }
  @media (min-width: 992px) {
    padding: 0px 1.2rem;
  }
  @media (min-width: 1220px) {
    padding: 0px 1.5rem;
  }
  @media (min-width: 1500px) {
    padding: 0px 1.8rem;
  }
  @media (min-width: 1800) {
    padding: 0px 2.1rem;
  }
`;

export default index;

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/trending?perPage=100&page=1`
  );
  const dataprops = await res.json();
  const data1 = dataprops.results;
  //
  const res1 = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/trending?perPage=100&page=2`
  );
  const dataprops1 = await res1.json();
  const data2 = dataprops1.results;
  //
  const data = [...data1, ...data2];
  return {
    props: {
      data,
    },
  };
};
