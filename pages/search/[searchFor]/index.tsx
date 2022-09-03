import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../../components/Header";
import SearchCard from "../../../components/serach/SearchCard";
import { searchResult } from "../../../interfaces";

//--------------------------------------------

function searchFor({ searchResult }: searchResult) {
  const { data } = searchResult;
  const [page, setpage] = useState(1);
  const [Data, setData] = useState(data);
  const { query } = useRouter();
  //getting the dynamic title
  const title = query.searchFor;
  // mapping over SearchCard
  const results = Data.map((result) => (
    <SearchCard key={result.mal_id} data={result} />
  ));
  // if no search results found return an error page
  if (!data) {
    return <h1>error</h1>;
  }
  /*
   use this the handell pagination in client side rendering the idea base on the user if it click next indicating i will a function thath render the hole and also i will make another function for the previous 
   !note:
   i change the idea to make the client side handel when the page just get rendered 
   TODO why i didn't make the thing from the first client side because i care about the Performenc and SEO
  */
  function pagePlus() {
    setpage((pre) => pre + 1);
  }
  function pageMoin() {
    setpage((pre) => pre - 1);
  }

  const fetchData = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v4/anime?q=${title}&order_by=favorites&sort=desc&letter=${title}&page=${page}`
    );
    const res = await data.json();
    setData(res.data);

    return res;
  };
  const {
    data: client,
    isLoading,
    isError,
  } = useQuery(["data", page, title], fetchData, { keepPreviousData: true });

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
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

export default searchFor;
//-----------------------------------------------

//--------------------------------------------

export const getServerSideProps = async (context: {
  params: any;
  res: any;
}) => {
  const { params, res } = context;
  const data = await fetch(
    `https://api.jikan.moe/v4/anime?q=${params.searchFor}&order_by=favorites&sort=desc&letter=${params.searchFor}&page=1`
  );
  const response = await data.json();
  const searchResult = await response;
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
