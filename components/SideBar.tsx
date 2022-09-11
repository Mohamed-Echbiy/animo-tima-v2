import Link from "next/link";
import { ArrowLeft, Burgger, Search } from "../Icons/Icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

function SideBar() {
  const { route } = useRouter();
  // console.log(route);
  const [active, setActive] = useState(0);
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
      case "/top_ova":
        setActive(5);
        break;
      case "/top_ona":
        setActive(6);
      case "/top_special":
        setActive(7);
        break;
      default:
        setActive(0);
        break;
    }
  }, []);
  const [inputSearch, setInputSearch] = useState("unkown");
  const [menu, setmenu] = useState(false);
  const Displaymenu = () => {
    setmenu((pre) => !pre);
  };
  return (
    <>
      <button className="burgger" onClick={Displaymenu}>
        <Burgger />
      </button>
      <div className={`menu flex flex-col py-3 bg-gray-700 ${menu && "open"} `}>
        <button
          className="w-fit ml-3 py-2 px-4 bg-gray-600 rounded-3xl mb-3 hover:bg-gray-500 flex items-center"
          onClick={Displaymenu}
        >
          <ArrowLeft /> <span className="ml-1">close menu</span>
        </button>
        <button className="py-2 px-4 my-3 mx-auto rounded bg-green-700 w-56 font-semibold hover:bg-green-800">
          Donate
        </button>
        <button className="py-2 px-4 mt-3 mb-7 mx-auto w-56 rounded bg-cyan-600 font-semibold hover:bg-cyan-700">
          Community
        </button>
        <SearchBar className="SearchBar">
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
        <div className="items flex flex-col">
          <Link href="/random">
            <a title="watch a random anime"> Random</a>
          </Link>
          <Link href="/popular">
            <a
              title="go to most popular"
              className={active === 3 ? ` text-yellow-600 font-semibold` : ``}
            >
              Most Popular
            </a>
          </Link>
          <Link href="/top_movies">
            <a
              title="go to movies section"
              className={active === 1 ? ` text-yellow-600 font-semibold` : ``}
            >
              Top Movies
            </a>
          </Link>
          <Link href="/top_series">
            <a
              title="go to tv series section"
              className={active === 2 ? ` text-yellow-600 font-semibold` : ``}
            >
              Top Tv Series
            </a>
          </Link>
          <Link href="/top_ova">
            <a
              title="go to ova section"
              className={active === 5 ? ` text-yellow-600 font-semibold` : ``}
            >
              OVAs
            </a>
          </Link>
          <Link href="/top_ona">
            <a
              title="go to ona section"
              className={active === 6 ? ` text-yellow-600 font-semibold` : ``}
            >
              ONAs
            </a>
          </Link>
          <Link href="/top_special">
            <a
              title="go to specials section"
              className={active === 7 ? ` text-yellow-600 font-semibold` : ``}
            >
              Specials
            </a>
          </Link>
          {/* <Link href="/recommendation">
            <a title="go to recommendation section"> Recommendation</a>
          </Link>
          <Link href="/reviews">
            <a title="go to reviews section"> Reviews</a>
          </Link>
          <Link href="/this_season">
            <a title="watch this season anime"> This Season</a>
          </Link> */}
          <Link href="/top_upcoming">
            <a
              title="discover the next season anime"
              className={active === 4 ? ` text-yellow-600 font-semibold` : ``}
            >
              Top Upcoming
            </a>
          </Link>
          <h3 className="p-3 font-semibold text-xl">
            Genre <span></span>
          </h3>
        </div>
        <Login className="login_btn">login</Login>
      </div>
    </>
  );
}

export default SideBar;
//-------------------------------------------------
const SearchBar = styled.div`
  .input_container {
    position: relative;
    padding: 0px 10px;
    width: 280px;
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
      right: 20px;
      transform: translateY(-50%);
      color: black;
    }
  }
`;
const Login = styled.button`
  display: block;
  padding: 10px 20px;
  background-color: #066a06;
  border-radius: 5px;
  font-weight: 600;
  max-width: 280px;
  align-self: center;
  :hover {
    background-color: #038703;
  }
`;
