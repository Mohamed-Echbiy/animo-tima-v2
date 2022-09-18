import React from "react";
import PlayVideo from "../../components/PlayVideo";
function id({ data }) {
  console.log(data);
  return <div></div>;
}

export default id;
export const getServerSideProps = async (context: {
  params: any;
  res: any;
}) => {
  const { params, res } = context;

  const response = await fetch(
    `https://gogoanime.herokuapp.com/vidcdn/watch/${params.id}`
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
