import Link from "next/link";
import { ArrowLeft, Burgger, Search } from "../Icons/Icons";
import { useState } from "react";
import styled from "styled-components";

function SideBar() {
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
            <a title="go to most popular"> Most Popular </a>
          </Link>
          <Link href="/movie">
            <a title="go to movies section"> Movies</a>
          </Link>
          <Link href="/tv">
            <a title="go to tv series section"> Tv Series</a>
          </Link>
          <Link href="/ova">
            <a title="go to ova section"> OVAs</a>
          </Link>
          <Link href="/ona">
            <a title="go to ona section"> ONAs</a>
          </Link>
          <Link href="/special">
            <a title="go to specials section"> Specials</a>
          </Link>
          <Link href="/recommendation">
            <a title="go to recommendation section"> Recommendation</a>
          </Link>
          <Link href="/reviews">
            <a title="go to reviews section"> Reviews</a>
          </Link>
          <Link href="/this_season">
            <a title="watch this season anime"> This Season</a>
          </Link>
          <Link href="/upcoming_season">
            <a title="discover the next season anime"> Upcoming Season</a>
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
