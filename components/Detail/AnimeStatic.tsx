import { useQuery } from "@tanstack/react-query";

function AnimeStatic({ id }: number | any) {
  const fetchStatic = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/statistics`);
    const data = await res.json();
    return data;
  };
  const { data, isLoading, isError } = useQuery(["animeStatic"], fetchStatic);
  if (isLoading) {
    return <></>;
  }
  const { data: results } = data;
  if (isError || !results) {
    return <></>;
  }
  return (
    <div className="px-4 md:px-3 lg:px-3 xl:px-5 2xl:px-10 mt-5">
      <div className="anime_Statics  flex flex-wrap justify-around items-center text-xs md:text-sm text-gray-300 capitalize">
        <p className="border-2 rounded-md border-lime-600 border-solid mb-2 py-2 px-4 completed">
          <span>completed ✔️ : </span>
          {results.completed}
        </p>
        <p className="border-2 rounded-md border-lime-600 border-solid mb-2 py-2 px-4 dropped">
          <span>dropped ❌ : </span>
          {results.dropped}
        </p>

        <p className="border-2 rounded-md border-lime-600 border-solid mb-2 py-2 px-4 on_Hold">
          <span>on_hold 🔭 : </span>
          {results.on_hold}
        </p>
        <p className="border-2 rounded-md border-lime-600 border-solid mb-2 py-2 px-4 plan_To_Watch">
          <span>plan to watch 📅 : </span>
          {results.plan_to_watch}
        </p>
        <p className="border-2 rounded-md border-lime-600 border-solid mb-2 py-2 px-4 Watching">
          <span>watching 👀 : </span>
          {results.watching}
        </p>
      </div>
    </div>
  );
}

export default AnimeStatic;
