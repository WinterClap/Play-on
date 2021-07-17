import { SideBar } from "./SideBar";
import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  font-family: "Montserrat";
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
