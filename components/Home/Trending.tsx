import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//
import "swiper/css";
import "swiper/css/navigation";
import { anime } from "../../interfaces";
import { nanoid } from "nanoid";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

function Trending({ data }: { data: anime } | any) {
  const results = data.map((anime: anime, index: number) => (
    <SwiperSlide key={nanoid()}>
      <Image__Container className="image_container relative">
        <Link href={`/detail/${anime.malId}`}>
          <a title="watch now">
            <Image
              src={anime.image}
              alt="cover image"
              width="130px"
              height={200}
              loading="lazy"
            />
          </a>
        </Link>
      </Image__Container>
      <div className="Number absolute top-1/2 -translate-y-2/4 bg-black left-0 py-2 w-10 text-center rounded-tr-2xl rounded-br-2xl opacity-90">
        <p>{index + 1}</p>
      </div>
    </SwiperSlide>
  ));
  return (
    <Container className=" mb-12 mt-16">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={7}
        slidesPerView={3}
        lazy={true}
        preloadImages={true}
        grabCursor={true}
        breakpoints={{
          360: {
            width: 336,
            slidesPerView: 3,
          },
          769: {
            width: 729,
            slidesPerView: 4,
          },
          1024: {
            width: 984,
            slidesPerView: 5,
          },
          1280: {
            width: 1232,
            slidesPerView: 6,
          },
          1536: {
            width: 1488,
            slidesPerView: 7,
          },
        }}
        className="SwiperContainer px-1 md:px-2 lg:px-4 xl:px-5 2xl:px-6"
      >
        {results}
      </Swiper>
    </Container>
  );
}

export default Trending;

const Image__Container = styled.div`
  aspect-ratio: 0.7;
  span {
    position: initial !important;
  }
`;
const Container = styled.div`
  .swiper-wrapper {
    padding-bottom: 50px;
  }
  .SwiperContainer {
    .swiper-button-next,
    .swiper-button-prev {
      color: #dabc0e;
      font-weight: bold;
      top: initial;
      bottom: 0px;
      margin-right: 12px;
      ::after {
        padding: 10px;
        background-color: black;
        border-radius: 5px;
        @media (min-width: 120px) {
          font-size: 10px;
        }
        @media (min-width: 768px) {
          font-size: 12px;
        }
        @media (min-width: 1024px) {
          font-size: 16px;
        }
        @media (min-width: 1280px) {
          font-size: 18px;
        }
      }
    }
  }
`;
