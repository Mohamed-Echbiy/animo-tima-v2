import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Header from "../components/Header";
import HeroSlide from "../components/Home/HeroSlide";
import RecentEpisodes from "../components/Home/RecentEpisodes";
import RecentPromos from "../components/Home/RecentPromos";
import Seasons from "../components/Home/Seasons";
import TopFav from "../components/Home/TopFav";
import TopMovies from "../components/Home/TopMovies";
import TopUpcoming from "../components/Home/TopUpcoming";
import TopComplete from "../components/Home/Top_Complete";
import Trending from "../components/Home/Trending";

const Home: NextPage = ({ Alldata }: any) => {
  const [
    hero_data,
    popular_data,
    completed_data,
    movie_data,
    upcoming_data,
    recent_Episodes_data,
    recent_promos_data,
  ] = Alldata;
  return (
    <div className="page">
      <Head>
        <title>Animo Time</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="animo time a website to watch your favorite anime online without any ads"
        />
      </Head>
      <Header />
      <main className="">
        <HeroSlide data={hero_data} />
        <div className="main_info  px-3 md:px-5  xl:px-7">
          <Trending data={hero_data} />
          <TopList_Container>
            <TopFav data={popular_data} />
            <TopUpcoming data={upcoming_data} />
            <TopMovies data={movie_data} />
            <TopComplete data={completed_data} />
          </TopList_Container>
          <RecentEpisodes data={recent_Episodes_data} />
          <RecentPromos data={recent_promos_data} />
          <Seasons />
        </div>
      </main>
    </div>
  );
};

export default Home;
//styling
const TopList_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const getStaticProps = async () => {
  const hero_res = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/trending`
  );

  const data = await hero_res.json();
  const hero_data = await data.results;
  //
  const popular_res = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/popular`
  );

  const data1 = await popular_res.json();
  const popular_data = await data1.results;
  //
  const completed_res = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/advanced-search?type=ANIME&page=1&perPage=6&status=FINISHED&format=TV&sort=["END_DATE_DESC"]`
  );

  const data2 = await completed_res.json();
  const completed_data = await data2.results;
  //
  const movie_res = await fetch(
    `https://api.jikan.moe/v4/top/anime?type=movie&limit=5`
  );

  const data4 = await movie_res.json();
  const movie_data = await data4.data;
  //
  const upcoming_res = await fetch(
    `https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=5`
  );

  const data5 = await upcoming_res.json();
  const upcoming_data = await data5.data;
  //
  const recent_Episodes = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/recent-episodes?perPage=12`
  );
  const data6 = await recent_Episodes.json();
  const recent_Episodes_data = await data6.results;
  //
  const recent_promos = await fetch(`https://api.jikan.moe/v4/watch/promos`);
  const data7 = await recent_promos.json();
  const recent_promos_data = await data7.data.slice(0, 3);
  const Alldata = [
    hero_data,
    popular_data,
    completed_data,
    movie_data,
    upcoming_data,
    recent_Episodes_data,
    recent_promos_data,
  ];

  return {
    props: {
      Alldata,
    },
    revalidate: 3600,
  };
};
