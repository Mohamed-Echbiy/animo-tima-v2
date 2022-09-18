import DetailHero from "../../components/Detail/Detail_Hero";
import Head from "next/head";
import { fullData } from "../../interfaces";
import Characters from "../../components/Detail/Character";
import Episodes from "../../components/Detail/Episodes";
import Recommendation from "../../components/Detail/Recommendation";

function id({ data }: fullData) {
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
        <Characters id={result.mal_id} />
        <Recommendation id={result.mal_id} />
        <Episodes name={[result.title, result.mal_id]} />
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
