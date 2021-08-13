import { useRef, useState } from "react";
import { faHeart, faSearch, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IconContainer } from "../../common";
import { Row, Col } from "../common";
import { motion } from "framer-motion";
import { PlayMode } from "./PlayMode";
import { UserMenu } from "./userMenu";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 380px;
  padding: 20px 80px;
  background: rgb(0, 255, 238);
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.main} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
`;

interface SearchBarContainerInterface {
  width?: string;
}
const SearchBarContainer = styled(motion.div)<SearchBarContainerInterface>`
  width: 150px;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(15, 15, 15, 0.05);
  transition: height 100ms ease-in-out;
  input {
    width: 100%;
    font-size: 1.3rem;
    font-weight: 600;
    background: transparent;
    border: none;
    outline: none;
    margin-left: 20px;
    caret-color: #fff;
    color: #fff;
    &::placeholder {
      color: #fff;
      font-weight: 400;
    }
    &:focus {
      scale: 1.05;
    }
    transition: border 200ms ease-in-out;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 3rem;
`;

const ButtonContainer = styled(motion.div)`
  width: 40px;
  cursor: pointer;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(15, 15, 15, 0.05);
  background-color: rgba(255, 255, 255, 0.5);
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const Button = ({ icon }: any) => {
  return (
    <ButtonContainer whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
      <IconContainer>
        <FontAwesomeIcon icon={icon} />
      </IconContainer>
    </ButtonContainer>
  );
};

interface Props {
  title?: string;
}

export const Banner = ({ title }: Props) => {
  const [searchBarFocus, setSearchBarFocus] = useState<Boolean>(false);
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  return (
    <Container>
      <Col height="100%" alignItems="flex-start" width="40%">
        <SearchBarContainer whileTap={{ scale: 1.05, originX: 0 }} animate={searchBarFocus ? { width: "450px" } : ""}>
          <Row justifyContent="space-between">
            <IconContainer>
              <FontAwesomeIcon icon={faSearch} fontSize="1.6rem" />
            </IconContainer>
            <motion.input
              type="text"
              placeholder="Search"
              whileFocus={{ width: "100%" }}
              value={searchBarValue}
              onChange={(e) => {
                setSearchBarValue(e.target.value);
              }}
              onFocus={() => {
                setSearchBarFocus(true);
              }}
              onBlur={() => {
                setSearchBarFocus(false);
              }}
            />
          </Row>
        </SearchBarContainer>
        <Title>{title}</Title>
        <PlayMode />
      </Col>
      <Col width="20%" justifyContent="space-between" height="100%">
        <UserMenu />
        <Row width="100%" margin="0 0 30px 0">
          <Button icon={faHeart} />
          <Button icon={faShareAlt} />
        </Row>
      </Col>
    </Container>
  );
};
