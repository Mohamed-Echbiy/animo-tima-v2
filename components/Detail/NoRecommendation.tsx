import Link from "next/link";
import React from "react";
import styled from "styled-components";

function NoRecommendation() {
  return (
    <div className="px-4">
      <NoRecommendation_Container>
        <div className="image__NoRecommendation">
          <img src="/luffy_Chibi2.png" alt="not found image for luffy" />
        </div>
        <div className="para__NoRecommendation">
          <h1>Sorry</h1>
          <p>There is no Recommendation for this anime </p>
          <button>
            <Link href="/">
              <a title="go back to the home page">Go back home</a>
            </Link>
          </button>
        </div>
      </NoRecommendation_Container>
    </div>
  );
}

export default NoRecommendation;

const NoRecommendation_Container = styled.div`
  max-width: 820px;
  min-width: 250px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  padding: 50px 30px;
  box-shadow: 0px 0px 10px 5px #096209;
  border-radius: 5px;
  margin-bottom: 2.5rem;

  .image__NoRecommendation {
    width: 45%;
    @media (max-width: 620px) {
      display: none;
    }
  }
  .para__NoRecommendation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    align-items: center;
    margin: auto;
    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
      font-size: 1rem;
      text-transform: capitalize;
      text-align: center;
    }
    button {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #065d06;
      border-radius: 5px;
      transition: 0.3s linear;
      @media (max-width: 760px) {
        padding: 5px 10px;
      }
      :hover {
        box-shadow: 0px 0px 5px 5px white;
      }
    }
  }
`;
