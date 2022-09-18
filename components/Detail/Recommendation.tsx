import { useQuery } from "@tanstack/react-query";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import NoRecommendation from "./NoRecommendation";

import "swiper/css";
import "swiper/css/navigation";
import { nanoid } from "nanoid";
import Link from "next/link";
import { recentEp } from "../../interfaces";
import styled from "styled-components";

function Recommendation({ id }: number | any) {
  const fetchRecomm_anime = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/recommendations`
    );
    const data = await res.json();
    return data.data.slice(0, 10);
  };
  const { data, isLoading, isError } = useQuery(
    ["recommended_Anime", id],
    fetchRecomm_anime
  );
  if (isLoading) {
    return <></>;
  }

  if (data.length === 0) {
    return (
      <>
        <NoRecommendation />
      </>
    );
  }
  const result = data.map((anime: recentEp) => (
    <SwiperSlide className=" py-24">
      <Recommended_Anime>
        <div key={nanoid()} className="Recommended_item">
          <div className="image_container">
            <Link href={`/detail/${anime.entry.mal_id}`}>
              <a title="go to detail page">
                <img src={anime.entry.images.webp.image_url} alt={""} />
              </a>
            </Link>
          </div>
          <div className="info">
            <div className="title_container">
              <h3 className="title text-center text-xs sm:text-sm md:text-base w-full px-1">
                {anime.entry.title}
              </h3>
            </div>
            <div className="blur_bg"></div>
          </div>
        </div>
      </Recommended_Anime>
    </SwiperSlide>
  ));
  return (
    <Div className="recomended_anime px-4 md:px-3 lg:px-3 xl:px-5 2xl:px-10">
      <h1 className="text-lg md:text-2xl mb-7">Recomended :</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={0}
        grabCursor={true}
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 2,
          },
          768: {
            width: 760,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1280: {
            width: 1280,
            slidesPerView: 4,
          },
          1536: {
            width: 1536,
            slidesPerView: 5,
          },
        }}
        className="SwiperContainer"
      >
        {result}
      </Swiper>
    </Div>
  );
}

export default Recommendation;
const Div = styled.div`
  h1 {
    color: gold;
    font-size: 2rem;
  }
  .SwiperContainer {
    .swiper-button-next,
    .swiper-button-prev {
      color: #dabc0e;
      margin-top: 5px;
      top: 25px;
      font-weight: bold;
      ::after {
        padding: 10px;
        background-color: black;
        border-radius: 5px;
      }
      @media (max-width: 420px) {
        &::after {
          font-size: 20px;
        }
      }
    }
  }
`;
const Recommended_Anime = styled.div`
  .title_container {
    position: absolute;
    height: 80px;
    width: 100%;
    bottom: -95px;
    background-color: #2a2c31;
    display: flex;
    align-items: center;
    color: gold;
    text-transform: capitalize;
    transition: ease 0.3s;
    font-weight: 600;
    z-index: 50;
  }
  &:hover .title_container {
    bottom: 90px;
  }
  .image_container {
    img {
      width: 100%;
      aspect-ratio: 0.7;
    }
  }
`;
