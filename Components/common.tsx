import { ReactElement } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Black = styled(motion.div)`
  width: 100%;
  background-color: #000;
  height: 100vh;
  position: fixed;
`;

export const usingTransistion = ({ Component }: any) => {
  return (
    <Black initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Component />
    </Black>
  );
};

interface IconContainerProps {
  fontSize?: string;
  position?: string;
  display?: string;
  margin?: string;
  inset?: string;
  cursor?: string;
  flexBasis?: string;
}
export const IconContainer = styled(motion.div)<IconContainerProps>`
  font-size: ${(props) => props.fontSize || "inherit"};
  position: ${(props) => props.position || "relative"};
  display: ${(props) => props.display || "inline"};
  margin: ${(props) => props.margin || "0"};
  inset: ${(props) => props.inset || "auto"};
  cursor: ${(props) => props.cursor || "unset"};
  flex-basis: ${(props) => props.flexBasis || "unset"};
`;

export const BlackBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
`;
