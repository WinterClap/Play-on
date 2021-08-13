import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { IconContainer } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRandom } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../../theme";

const options = [
  { title: "Play All", icon: faPlay },
  { title: "Mix", icon: faRandom },
];

const Container = styled.div`
  border-radius: 0 20px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
`;
interface SelectorInterface {
  selected: boolean;
}
const SelectorButton = styled(motion.div)<SelectorInterface>`
  border: none;
  margin: none;
  cursor: pointer;
  border-radius: 0px 20px;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.selected ? "white" : "")};
  padding: 10px 15px;
  transition: all 200ms ease-out;
  h1 {
    margin: 0;
    background: ${(props) =>
      props.selected
        ? `linear-gradient(
            135deg,
            ${props.theme.colors.main} 0%,
            ${props.theme.colors.secondary} 100%
            );`
        : ""};
    ${(props) =>
      props.selected
        ? "background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
        : "color: #fff;"}
    font-size: 1.3rem;
    font-weight: 900;
  }
`;

interface Props {}

export const PlayMode = (props: Props) => {
  const [playMode, setPlayMode] = useState<string>(options[0].title);
  return (
    <Container>
      {options.map((option) => (
        <SelectorButton
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          selected={playMode === option.title ? true : false}
          key={JSON.stringify(option)}
          onClick={() => setPlayMode(option.title)}
        >
          <IconContainer margin="0 10px 0 0" fontSize="1.3rem">
            <FontAwesomeIcon icon={option.icon} color={playMode === option.title ? theme.colors.main : "#fff"} />
          </IconContainer>
          <h1>{option.title.toUpperCase()}</h1>
        </SelectorButton>
      ))}
    </Container>
  );
};
