import { useState } from "react";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

function Characters({ id }: Number | any) {
  const [ImageLoad, setImageLoad] = useState(false);
  const fetchChracter = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    const data = await res.json();
    return data;
  };
  const { data, isLoading, isError } = useQuery(["charcters"], fetchChracter);

  if (isLoading) {
    return <></>;
  }
  const { data: results } = data;
  return (
    <Div className="Characters mt-10 px-4 md:px-3 lg:px-3 xl:px-5 2xl:px-10">
      <h1 className="Characters__text mb-5">Characters :</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={0}
        grabCursor={true}
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 1,
          },
          768: {
            width: 760,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
          1280: {
            width: 1280,
            slidesPerView: 5,
          },
          1536: {
            width: 1536,
            slidesPerView: 5,
          },
        }}
        className="SwiperContainer px-1 md:px-2 lg:px-4 xl:px-5 2xl:px-6"
      >
        {results.map(
          (chara: {
            character: {
              images: { webp: { image_url: string | undefined } };
              name: string | undefined;
            };
          }) => (
            <SwiperSlide
              key={nanoid()}
              className="SwiperContainer__Image py-16 "
            >
              <div className="container__swiper relative">
                <h2 className="charachter__name py-1 text-center font-semibold text-gray-300">
                  {chara.character.name}
                </h2>
                <img
                  src={chara.character.images.webp.image_url}
                  alt={chara.character.name}
                  title={chara.character.name}
                  onLoad={() => setImageLoad((pre) => true)}
                />
                {!ImageLoad && <div className="loading shine"></div>}
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Div>
  );
}

export default Characters;
// styling

const Div = styled.main`
  max-height: 700px;
  h1.Characters__text {
    font-size: 2rem;
    color: gold;
  }
  .SwiperContainer {
    width: 100%;
    max-height: 700px;
    .loading {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #0f1010;
      background-size: 40px 100%;
      background-repeat: no-repeat;
      background-position: left -40px top 0;
      background-image: linear-gradient(#090a0a60, #090a0a60);
      z-index: 100;
      top: 0px;
      left: 0px;
    }
    .swiper_wraper {
      max-height: 700px;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #067306;
      top: 25px;
      font-weight: bold;
      @media (max-width: 420px) {
        &::after {
          font-size: 30px;
        }
      }
    }
  }
  .SwiperContainer__Image {
    img {
      width: 100%;
      margin: auto;
    }
  }
`;
