import { nanoid } from "nanoid";
import Head from "next/head";
import Header from "../../components/Header";
import SearchCard from "../../components/serach/SearchCard";
import { Data_type, Movie_card_types } from "../popular";

function index({ data }: Data_type) {
  console.log(data);
  return (
    <>
      <div className="completed__container flex flex-wrap justify-center">
        <Head>
          <title>Completed Anime</title>
          <meta name="description" content="watch top completed anime free" />
        </Head>
        <Header />
        {data.map((movieCard: Movie_card_types) => (
          <SearchCard key={nanoid()} data={movieCard} />
        ))}
      </div>
    </>
  );
}

export default index;

export const getStaticProps = async () => {
  //-------------------------
  const resP1 = await fetch(
    `https://api.jikan.moe/v4/anime?status=complete&order_by=scored_by&sort=desc`
  );
  const dataP1 = await resP1.json();
  const result1 = await dataP1.data;
  //-------------------------
  const resP2 = await fetch(
    `https://api.jikan.moe/v4/anime?status=complete&page=2&order_by=scored_by&sort=desc`
  );
  const dataP2 = await resP2.json();
  const result2 = await dataP2.data;
  //-------------------------
  const resP3 = await fetch(
    `https://api.jikan.moe/v4/anime?status=complete&page=3&order_by=scored_by&sort=desc`
  );
  const dataP3 = await resP3.json();
  const result3 = await dataP3.data;
  //-------------------------

  const data = [...result1, ...result2, ...result3];

  return {
    props: {
      data,
    },
  };
};
