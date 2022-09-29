import DetailHero from "../../components/Detail/Detail_Hero";
import Head from "next/head";
import Characters from "../../components/Detail/Character";
import Episodes from "../../components/Detail/Episodes";
import Recommendation from "../../components/Detail/Recommendation";
import AnimeStatic from "../../components/Detail/AnimeStatic";
import { anilistInfo } from "../../interfaces";
import NotFound from "../../components/NotFound";
import Header from "../../components/Header";

function id({ data }: { data: anilistInfo }) {
  if (!data.hasOwnProperty("title")) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <NotFound />
        </div>
      </div>
    );
  }
  return (
    <div className="page relative w-full h-full">
      <Head>
        <title>{"AnimoTime"}</title>
        <meta
          name="description"
          content="animo time a website to watch your favorite anime online without any ads"
        />
      </Head>
      <main className="Container -z-10">
        <DetailHero data={data} />
        <AnimeStatic id={data.malId} />
        <Characters data={data.characters} />
        <Recommendation data={data.recommendations} />
        <Episodes data={data} />
      </main>
    </div>
  );
}

export default id;

export const getServerSideProps = async (context: {
  params: any;
  res: any;
}) => {
  const { params, res } = context;
  //
  const info_res = await fetch(
    `https://consumet-api.herokuapp.com/meta/anilist/info/${params.id}`
  );
  const info_data = await info_res.json();
  const infoResult = await info_data;
  //
  const data = infoResult;
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
