import { SideBar } from "./SideBar";
import styled from "styled-components";
import { Background } from "./common";

const ContentContainer = styled.div`
  font-family: "Montserrat";
  display: flex;
  width: 100%;
  position: relative;
`;

interface Props {
  children?: any;
}

export const Player = ({ children }: Props) => {
  return (
    <ContentContainer>
      <SideBar />
      {children}
    </ContentContainer>
  );
};
