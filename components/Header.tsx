import Link from "next/link";
import { Search } from "../Icons/Icons";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import styled from "styled-components";
import { useRouter } from "next/router";

function Header() {
  const [inputSearch, setInputSearch] = useState("unkown");
  const { route } = useRouter();
  const [active, setActive] = useState(0);
  const [randomId, setRandomId] = useState(1);
  useEffect(() => {
    switch (route) {
      case "/top_movies":
        setActive(1);
        break;
      case "/top_series":
        setActive(2);
        break;
      case "/popular":
        setActive(3);
        break;
      case "/top_upcoming":
        setActive(4);
        break;

      default:
        setActive(0);
        break;
    }
    const randomid = () => {
      let a = Math.floor(Math.random() * 2000);
      setRandomId(a);
    };
    randomid();
  }, []);

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
            <a
              title="go to movies"
              className={active === 1 ? ` text-yellow-600 font-semibold` : ``}
            >
              TOP Movies
            </a>
          </Link>
          <Link href={`/top_series`}>
            <a
              title="go to top series"
              className={active === 2 ? ` text-yellow-600 font-semibold` : ``}
            >
              TOP Series
            </a>
          </Link>
          <Link href={`/popular`}>
            <a
              title="go to most popular"
              className={active === 3 ? ` text-yellow-600 font-semibold` : ``}
            >
              Most Popular
            </a>
          </Link>
          <Link href={`/top_upcoming`}>
            <a
              title="go to top upcoming"
              className={active === 4 ? ` text-yellow-600 font-semibold` : ``}
            >
              TOP Upcoming
            </a>
          </Link>
          <Link href={`/random/${randomId}`}>
            <a title="get a random anime" target="_blank">
              Random
            </a>
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
      width: 30px;
      height: 30px;
    }
    @media (min-width: 992px) {
      width: 40px;
      height: 40px;
    }
    @media (min-width: 1600px) {
      width: 50px;
      height: 50px;
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
    font-size: 1rem;
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
    font-size: 1.2rem;
  }
`;
const SearchBar = styled.div`
  .input_container {
    position: relative;
    min-width: 350px;
    input {
      display: block;
      width: 100%;
      padding: 13px 10px;
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
