import React from "react";
import styled from "styled-components";
import TopFav from "./TopFav";
import TopMovies from "./TopMovies";
import TopUpcoming from "./TopUpcoming";
import TopComplete from "./Top_Complete";

function TopLists() {
  return (
    <TopList_Container>
      <TopFav />
      <TopUpcoming />
      <TopMovies />
      <TopComplete />
    </TopList_Container>
  );
}

export default TopLists;

const TopList_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
