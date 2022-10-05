import { nanoid } from "nanoid";
import Head from "next/head";
import Header from "../../../components/Header";
import SearchCard from "../../../components/serach/SearchCard";
import { anilistInfo } from "../../../interfaces";

//--------------------------------------------

function searchFor({ searchResult }: { searchResult: [anilistInfo] }) {
  console.log(searchResult);
  const results = searchResult.map((anime: anilistInfo) => (
    <SearchCard key={nanoid()} data={anime} />
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

      <main className="Container ">
        <div className="crads flex flex-wrap justify-center items-center">
          {results}
        </div>
      </main>
    </>
  );
}

export default searchFor;
//-----------------------------------------------

//--------------------------------------------

export const getServerSideProps = async (context: {
  params: any;
  res: any;
}) => {
  const { params, res } = context;
  const data = await fetch(
    `${process.env.HOSTNAME}${params.searchFor}?perPage=100`
  );
  const response = await data.json();
  const searchResult = await response.results;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
      searchResult,
    },
  };
};
