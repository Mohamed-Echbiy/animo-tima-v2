import React from "react";
import styled from "styled-components";

import Top from "./Top";

function TopLists({ data }) {
  //   console.log(data);
  const { hero_top_data, pop_data, complete_data } = data;
  return (
    <TopList_Container>
      <Top data={hero_top_data} />
      <Top data={pop_data} />
      <Top data={complete_data} />
    </TopList_Container>
  );
}

export default TopLists;

const TopList_Container = styled.div``;
