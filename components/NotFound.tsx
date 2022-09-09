import Link from "next/link";
import React from "react";
import styled from "styled-components";

function NotFound() {
  return (
    <div className="px-4">
      <NotFound_Container>
        <div className="image__notfound">
          <img src="/luffy_Chibi.png" alt="not found image for luffy" />
        </div>
        <div className="para__notfound">
          <h1>404</h1>
          <p>the requested episode is not found </p>
          <button>
            <Link href="/">
              <a title="go back to the home page">Go back home</a>
            </Link>
          </button>
        </div>
      </NotFound_Container>
    </div>
  );
}

export default NotFound;

const NotFound_Container = styled.div`
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

  .image__notfound {
    width: 45%;
    @media (max-width: 620px) {
      display: none;
    }
  }
  .para__notfound {
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
