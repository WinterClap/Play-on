import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { IconContainer } from "../../../common";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useWindowSize } from "../../common";
import { motion } from "framer-motion";
interface Props {}
const Container = styled.div`
  padding: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;
interface ButtonProps {
  backgroundColor?: string;
}
const ButtonObject = styled(motion.button)<ButtonProps>`
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  height: 40px;
  width: 40px;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => (props.backgroundColor === "secondary" ? props.theme.colors.secondary : "#162131")};
`;
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Button = ({ icon, backgroundColor, ...rest }: any) => {
  return (
    <div {...rest}>
      <ButtonObject backgroundColor={backgroundColor} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
        <IconContainer>
          <FontAwesomeIcon icon={icon} size="2x" />
        </IconContainer>
      </ButtonObject>
    </div>
  );
};
const TrackShowCaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 200px;
  border-radius: 30px 0px;
  border: 1px solid white;
`;

const TrackCover = styled.div`
  height: 200px;
  width: 180px;
  border: 1px solid white;
  border-radius: 30px 0px;
`;
const TrackTitle = styled.h1`
  font-weight: 600;
  font-size: 1.2rem;
  color: #fff;
`;
const TrackArtist = styled.h2`
  font-size: 1rem;
  margin-top: 0;
  color: ${(props) => props.theme.colors.dimmedText};
`;

const TrackSlide = styled.div`
  width: 100%;
`;
const StyledSwiper = styled(Swiper)`
  height: 320px;
`;
export const TrackShowCaseSlider = (props: Props) => {
  const size = useWindowSize();
  const tracks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
  return (
    <Container>
      <Header>
        <Title>Weekly Top Track</Title>
        <ButtonContainer>
          <Button className="prev" icon={faAngleLeft} />
          <Button className="next" icon={faAngleRight} backgroundColor="secondary" />
        </ButtonContainer>
      </Header>
      <TrackSlide>
        <StyledSwiper
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          centerInsufficientSlides
          spaceBetween={20}
          slidesPerView={
            size.width !== undefined && size.width > 1600
              ? 6
              : size.width !== undefined && size.width > 1250
              ? 4
              : size.width !== undefined && size.width > 1050
              ? 3
              : size.width !== undefined && size.width > 800
              ? 2
              : 1
          }
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("change!")}
        >
          {tracks.map((track) => (
            <SwiperSlide key={track}>
              <TrackShowCaseContainer>
                <TrackCover></TrackCover>
                <TrackTitle>{track}</TrackTitle>
                <TrackArtist>{Number(track) * 2}</TrackArtist>
              </TrackShowCaseContainer>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </TrackSlide>
    </Container>
  );
};
