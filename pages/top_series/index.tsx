import { nanoid } from "nanoid";
import Head from "next/head";
import Header from "../../components/Header";
import SearchCard from "../../components/serach/SearchCard";

interface Movie_card_types {
  mal_id: number;
  url: "string";
  images: {
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
  trailer: {
    youtube_id: "string";
    url: "string";
    embed_url: "string";
  };
  approved: boolean;
  titles: ["string"];
  title: "string";
  title_english: "string";
  title_japanese: "string";
  title_synonyms: ["string"];
  type: "TV";
  source: "string";
  episodes: number;
  status: "Finished Airing";
  airing: boolean;
  aired: {
    from: "string";
    to: "string";
    prop: {
      from: { day: number; month: number; year: number };
      to: { day: number; month: number; year: number };
      string: "string";
    };
  };
  duration: "string";
  rating: "G - All Ages";
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: "string";
  background: "string";
  season: "summer";
  year: number;
  broadcast: {
    day: "string";
    time: "string";
    timezone: "string";
    string: "string";
  };
  producers: [
    { mal_id: number; type: "string"; name: "string"; url: "string" }
  ];
  licensors: [
    { mal_id: number; type: "string"; name: "string"; url: "string" }
  ];
  studios: [{ mal_id: number; type: "string"; name: "string"; url: "string" }];
  genres: [{ mal_id: number; type: "string"; name: "string"; url: "string" }];
  explicit_genres: [
    { mal_id: number; type: "string"; name: "string"; url: "string" }
  ];
  themes: [{ mal_id: number; type: "string"; name: "string"; url: "string" }];
  demographics: [
    { mal_id: number; type: "string"; name: "string"; url: "string" }
  ];
}
interface Data_type {
  data: [Movie_card_types];
}
function index({ data }: Data_type) {
  return (
    <>
      <div className="top__tv__container flex flex-wrap justify-center">
        <Head>
          <title>Top Tv</title>
          <meta name="description" content="watch top movies anime free" />
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
//styling

export const getStaticProps = async () => {
  const resP1 = await fetch(`https://api.jikan.moe/v4/top/anime?type=tv`);
  const dataP1 = await resP1.json();
  const result1 = await dataP1.data;
  const resP2 = await fetch(
    `https://api.jikan.moe/v4/top/anime?type=tv&page=2`
  );
  const dataP2 = await resP2.json();
  const result2 = await dataP2.data;
  const resP3 = await fetch(
    `https://api.jikan.moe/v4/top/anime?type=tv&page=3`
  );
  const dataP3 = await resP3.json();
  const result3 = await dataP3.data;

  const data = [...result1, ...result2, ...result3];

  return {
    props: {
      data,
    },
  };
};
