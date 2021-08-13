import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import Image from "next/image";
interface Props {}

const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    z-index: 2;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.8);
  }
`;

SwiperCore.use([Autoplay, Pagination, Navigation]);

export const Carousel: React.FC = (props: Props) => {
  // Add new domains to the next.config.js file -> images.domains
  const imageUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
  ];
  return (
    <Container>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        spaceBetween={0}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={`cover-image-${index}`}>
            <Image src={url} alt={`cover-image-${index}`} layout="fill" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
