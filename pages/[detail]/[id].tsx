import DetailHero from "../../components/Detail/Detail_Hero";
import Head from "next/head";
import { fullData } from "../../interfaces";
import Recommended from "../../components/Detail/Recommended";

function id({ data }: fullData, C_data) {
  console.log(C_data);
  const { data: result } = data;
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
        <Recommended data={C_data} />
      </main>
    </>
  );
}

export default id;

export const getServerSideProps = async (context: {
  params: any;
  res: any;
}) => {
  const { params, res } = context;
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${params.id}/full`
  );
  const data = await response.json();
  const C_response = await fetch(
    `https://api.jikan.moe/v4/anime/${params.id}/characters`
  );
  const C_data = await C_response.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
      data,
      C_data,
    },
  };
};
