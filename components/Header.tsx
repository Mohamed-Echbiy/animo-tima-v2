import Link from "next/link";
import { Search } from "../Icons/Icons";
import { useState } from "react";
import SideBar from "./SideBar";
import styled from "styled-components";

function Header() {
  const [inputSearch, setInputSearch] = useState("unkown");
  return (
    <>
      <Div className="navbar">
        <SideBar />
        <div className="logo flex items-center">
          <Link href="/">
            <a title="logo Image">
              <img
                src="/logo-removebg-preview.png"
                alt="logo Image"
                width={70}
                height={70}
              />
            </a>
          </Link>
          <h1 className="logo_title">AnimoTime</h1>
        </div>
        <SearchBar className="SearchBar hidden lg:block">
          <div className="input_container">
            <input
              type="text"
              placeholder="search for anime"
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <Link href={`/search/${inputSearch}`}>
              <a title={`search for ${inputSearch}`}>
                <div className="svg">
                  <Search />
                </div>
              </a>
            </Link>
          </div>
        </SearchBar>
        <Ul_Links className="Links hidden 2xl:block">
          <Link href={`/top_movies`}>
            <a title="go to movies">TOP Movies</a>
          </Link>
          <Link href={`/top_series`}>
            <a title="go to top series">TOP Series</a>
          </Link>
          <Link href={`/popular`}>
            <a title="go to most popular">Most Popular</a>
          </Link>
          <Link href={`/top_upcoming`}>
            <a title="go to top upcoming">TOP Upcoming</a>
          </Link>
          <Link href={`/random`}>
            <a title="get a random anime">Random</a>
          </Link>
        </Ul_Links>
        <Login className="login_btn">login</Login>
      </Div>
    </>
  );
}

export default Header;

//-------------------------------------------

const Div = styled.nav`
  position: block;
  top: 0px;
  left: 0px;
  padding: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 80px;
  z-index: 1000;
  background-color: #202125;
  .burgger svg {
    @media (min-width: 765px) {
      width: 40px;
      height: 40px;
    }
    @media (min-width: 992px) {
      width: 50px;
      height: 50px;
    }
    @media (min-width: 1600px) {
      width: 60px;
      height: 60px;
    }
  }
  .menu {
    position: fixed;
    min-width: 300px;
    min-height: 100vh;
    overflow-y: scroll;
    left: -300px;
    top: 0;
    bottom: 0;
    transition: linear 0.3s;
    -webkit-transition: linear 0.3s;
    -moz-transition: linear 0.3s;
    -ms-transition: linear 0.3s;
    -o-transition: linear 0.3s;
    opacity: 0;
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
      color: #202125;
    }
  }
  .menu.open {
    left: 0px;
    z-index: 500000;
    opacity: 1;
  }

  .items a {
    padding: 1.4rem 10px;
    font-weight: 700;
    border-bottom: 1px solid rgb(205, 203, 203);
    font-size: 1.25rem;
  }
  .items a:hover {
    color: rgb(222, 221, 221);
  }
  nav .search-icon .input svg {
    position: absolute;
    z-index: 5;
    right: 20px;
    top: 10px;
    color: black;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .logo_title {
    font-size: 1.5rem;
  }
`;
const SearchBar = styled.div`
  .input_container {
    position: relative;
    min-width: 350px;
    input {
      display: block;
      width: 100%;
      padding: 15px 10px;
      outline: none;
      border-radius: 5px;
      color: black;
      font-weight: 700;
    }
    .svg {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      color: black;
    }
  }
`;
const Ul_Links = styled.div`
  a {
    padding: 5px 10px;
    font-size: 1rem;
    :hover {
      color: #c8c7c7;
    }
  }
`;
const Login = styled.button`
  padding: 10px 20px;
  background-color: #066a06;
  border-radius: 5px;
  font-weight: 600;
  :hover {
    background-color: #038703;
  }
  @media (max-width: 330px) {
    display: none;
  }
`;
