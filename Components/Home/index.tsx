import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import CoverImage from "../assets/coverImg.jpg";
import Image from "next/image";
import React, { ReactElement } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconContainer } from "../common";
const Title = styled.h1`
  font-size: 5rem;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 1280px) and (min-width: 768px) {
    font-size: 4.5rem;
  }
`;
const Subtitle = styled.h1`
  margin-top: 20px;
  font-size: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  color: ${(props) => props.theme.colors.dimmedText};
`;
const Article = styled.article`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  * > * {
    color: #fff;
  }
  background-color: ${(props) => props.theme.colors.black};
`;

const Container = styled(motion.section)`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 120px;
    margin-bottom: 30px;
  }
  @media screen and (max-height: 800px) {
    margin-bottom: 30px;
    margin-top: 150px;
  }
  @media screen and (max-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
interface ColumnProps {
  flexBasis?: string;
  alignItems?: string;
}
const Column = styled.div<ColumnProps>`
  display: flex;
  flex-basis: ${(props) => props.flexBasis || "auto"};
  justify-content: space-around;
  align-items: ${(props) => props.alignItems || "center"};
  flex-direction: column;
`;

const ImageBox = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 380px;
    height: 380px;
  }
  @media screen and (max-width: 1280px) and (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 280px) {
    width: 250px;
    height: 250px;
  }
`;
const StyledImage = styled(Image)`
  border-radius: 20px;
`;
interface ButtonComponentProps {
  padding?: string;
  backgroundColor?: string;
  fontSize?: string;
  gradient?: string;
  margin?: string;
  color?: string;
  border?: { size: string; color: string };
  hover?: boolean;
  filled?: boolean;
}
const ButtonComponent = styled(motion.button)<ButtonComponentProps>`
  outline: none;
  border: none;
  color: ${(props) => props.color || "inherit"};
  border-radius: 20px;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: 600;
  padding: ${(props) => props.padding || "20px"};
  cursor: pointer;
  margin: ${(props) => props.margin || "0"};
  transition: background-position 0.5s ease-in-out;
  background-size: 200% auto;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  background-image: linear-gradient(
    to right,
    ${(props) => props.gradient || "#FC354C  0%, #0ABFBC    51%, #5C258D  100%"}
  );
  ${(props) => (props.filled ? "background-image: none" : "")};
  ${(props) =>
    typeof props.border === "object"
      ? `background-image: none; border: ${props.border.size}px solid ${props.border.color};`
      : ""}
  ${(props) =>
    props.hover
      ? `div {
    transition: opacity 0.5s ease-in-out;
    height: 0;
    opacity: 0;
    overflow: hidden;
  }

  &:hover {
    background-position: right center;
    div {
      display: inline;
      opacity: 1;
      height: auto;
    }
  }`
      : "div{display:none;}"}

      @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
interface ExtravagantButtonProps {
  text: string;
  margin?: string;
  initialBoxShadow?: string;
  animateBoxShadow?: string;
  padding?: string;
  backgroundColor?: string;
  gradient?: string;
  filled?: boolean;
  fontSize?: string;
  border?: { size: string; color: string };
  color?: string;
  hover?: boolean;
  children?: ReactElement;
  hoverWidth?: string;
}
export const ExtravagantButton = React.forwardRef(
  (
    {
      text,
      filled,
      margin,
      fontSize,
      initialBoxShadow,
      animateBoxShadow,
      padding,
      backgroundColor,
      gradient,
      border,
      color,
      children,
      hover,
      hoverWidth,
    }: ExtravagantButtonProps,
    ref: any
  ) => {
    const buttonVariants = {
      initial: { boxShadow: initialBoxShadow },
      animate: {
        boxShadow: animateBoxShadow,
        transition: { duration: 1 },
      },
    };
    return (
      <a ref={ref}>
        <ButtonComponent
          border={border}
          filled={filled}
          margin={margin}
          fontSize={fontSize}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          padding={padding}
          gradient={gradient}
          backgroundColor={backgroundColor}
          transition={{ boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" } }}
          whileHover={{ scale: 1.05, width: hoverWidth ? hoverWidth : "content-fit" }}
          whileTap={{ scale: 0.95 }}
          color={color}
          hover={hover}
        >
          {text}
          {children}
        </ButtonComponent>
      </a>
    );
  }
);

export const Landing = () => {
  return (
    <Article>
      <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Column flexBasis="50%">
          <Column alignItems="flex-start">
            <Title>Playing</Title>
            <Title>The</Title>
            <Title>Mood</Title>
          </Column>
          <Subtitle>Enjoy music even more!</Subtitle>
          <Link passHref href="/signin">
            <div>
              <ExtravagantButton text="Get Started" margin="40px 0 0 0" hover hoverWidth="320px">
                <div>
                  <IconContainer margin="0 0 0 15px">
                    <FontAwesomeIcon icon={faArrowRight} size="1x" color="#272f32" />
                  </IconContainer>
                </div>
              </ExtravagantButton>
            </div>
          </Link>
        </Column>
        <Column flexBasis="50%">
          <ImageBox>
            <StyledImage
              src={CoverImage}
              layout="fill"
              objectFit="cover"
              alt="Cover Image for the website home page, music related"
              aria-label="Cover image - music related"
            />
          </ImageBox>
        </Column>
      </Container>
    </Article>
  );
};
