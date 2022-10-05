import { nanoid } from "nanoid";
import Head from "next/head";
import Header from "../../components/Header";
import SearchCard from "../../components/serach/SearchCard";
import { anilistInfo } from "../../interfaces";

function index({ data }: { data: [anilistInfo] }) {
  return (
    <>
      <div className="top__ona__container flex flex-wrap justify-center">
        <Head>
          <title>Top Ona</title>
          <meta name="description" content="watch top movies anime free" />
        </Head>
        <Header />
        {data.map((anime: anilistInfo) => (
          <SearchCard key={nanoid()} data={anime} />
        ))}
      </div>
    </>
  );
}

export default index;
//styling

export const getServerSideProps = async () => {
  const resP1 = await fetch(
    `${process.env.HOSTNAME}advanced-search?format=ONA&perPage=50&page=1`
  );
  const dataP1 = await resP1.json();
  const result1 = await dataP1.results;
  const resP2 = await fetch(
    `${process.env.HOSTNAME}advanced-search?format=ONA&perPage=50&page=2`
  );
  const dataP2 = await resP2.json();
  const result2 = await dataP2.results;
  const resP3 = await fetch(
    `${process.env.HOSTNAME}advanced-search?format=ONA&perPage=50&page=3`
  );
  const dataP3 = await resP3.json();
  const result3 = await dataP3.results;
  //
  const resP4 = await fetch(
    `${process.env.HOSTNAME}advanced-search?format=ONA&perPage=50&page=4`
  );
  const dataP4 = await resP4.json();
  const result4 = await dataP4.results;

  const data = [...result1, ...result2, ...result3, ...result4];

  return {
    props: {
      data,
    },
  };
};
