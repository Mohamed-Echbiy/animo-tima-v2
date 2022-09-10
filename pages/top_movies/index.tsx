import React from "react";

function index({ data }) {
  console.log(data);
  return <div>index</div>;
}

export default index;

export const getStaticProps = async () => {
  const res = await fetch(`https://api.jikan.moe/v4/top/anime?type=movie`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
