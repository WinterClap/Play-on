import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { BlackBackground, IconContainer } from "../common";
import { motion } from "framer-motion";
import Cover from "../assets/signCover.jpg";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "./carousel";
import "@fortawesome/fontawesome-svg-core/styles.css";
interface Props {}

const Container = styled(motion.div)`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  * > * {
    font-family: "Merriweather Sans", sans-serif;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignBox = styled(motion.article)`
  width: 360px;
  min-height: 600px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  overflow: hidden;
  box-shadow: 0px 50px 50px #000000;
`;
const SignBoxContent = styled.section`
  padding: 20px;
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const Backdrop = styled.div`
  border-radius: 0 30px;
  height: 180px;
  width: 120%;
  position: relative;
  top: -20px;
  background-color: ${(props) => props.theme.colors.dimmedLight};
`;
interface TitleProps {
  margin?: string;
  inset?: string;
  color?: string;
  position?: string;
}
const Title = styled.h1<TitleProps>`
  font-size: 2rem;
  font-weight: 700;
  margin: ${(props) => props.margin || "0"};
  position: ${(props) => props.position || "relative"};
  color: ${(props) => props.color || "#272f32"};
  inset: ${(props) => props.inset || "auto"};
`;
const Button = styled(motion.button)`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.spotifyGreen};
  font-size: 1.5rem;
  border: none;
  width: 100%;
  color: inherit;
  font-weight: 600;
  outline: none;
  padding: 20px;
  border-radius: 20px;
  transition: background-color 150ms ease-in-out;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.spotifyGreenOnHover};
  }
`;
const signInBoxVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { type: "spring", stiffness: 120, duration: 1, delay: 0.2 },
    originX: "center",
    originY: "center",
  },
};
const containerVariants = {
  initialPage: {
    opacity: 0,
  },
  showPage: {
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
  exitPage: {
    opacity: 0,
  },
};
export const SignIn: React.FC = () => {
  return (
    <BlackBackground>
      <Container initial="initialPage" animate="showPage" variants={containerVariants} exit="exitPage">
        <Image src={Cover} layout="fill" objectFit="cover" quality="100" />
        <SignBox variants={signInBoxVariants} initial="hidden" animate="show" style={{ transformOrigin: "-50% -50%" }}>
          <Backdrop>
            <IconContainer cursor="pointer" position="absolute" inset="auto auto 90px 20px">
              <Link href="/">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <FontAwesomeIcon icon={faArrowLeft} size="3x" color="#272f32" />
                </motion.div>
              </Link>
            </IconContainer>
            <Title position="absolute" inset="auto auto 0 auto" margin="40px 0 20px 20px">
              Sign In
            </Title>
          </Backdrop>
          <SignBoxContent>
            <Carousel />
            <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Login with Spotify
              <IconContainer fontSize="3rem">
                <FontAwesomeIcon icon={faSpotify} color="white" />
              </IconContainer>
            </Button>
          </SignBoxContent>
        </SignBox>
      </Container>
    </BlackBackground>
  );
};
