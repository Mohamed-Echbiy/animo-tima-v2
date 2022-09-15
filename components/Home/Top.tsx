import React from "react";
import styled from "styled-components";

function Top({ data }) {
  const { data: info } = data;
  console.log(info);
  return <List></List>;
}

export default Top;

const List = styled.div``;
