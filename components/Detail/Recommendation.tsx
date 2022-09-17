import { useQuery } from "@tanstack/react-query";
import NoRecommendation from "./NoRecommendation";

function Recommendation({ id }: number | any) {
  const fetchRecomm_anime = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/recommendations`
    );
    const data = await res.json();
    return data.data.slice(0, 10);
  };
  const { data, isLoading, isError } = useQuery(
    ["recommended_Anime"],
    fetchRecomm_anime
  );
  if (isLoading) {
    return <></>;
  }
  console.log(data);
  if (data.length === 0) {
    return (
      <>
        <NoRecommendation />
      </>
    );
  }
  return <div></div>;
}

export default Recommendation;
