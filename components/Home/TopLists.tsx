import React from "react";
import styled from "styled-components";
import TopFav from "./TopFav";
import TopMovies from "./TopMovies";
import TopUpcoming from "./TopUpcoming";

function TopLists() {
  return (
    <TopList_Container>
      <TopFav />
      <TopUpcoming />
      <TopMovies />
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
  max-width: 1800px;
  margin: auto;
  margin-top: 6rem;
  margin-bottom: 6rem;
`;
