import { SideBar } from "./SideBar";
import styled from "styled-components";
import { Background } from "./common";

const ContentContainer = styled.div`
  font-family: "Montserrat";
  width: calc(100% - 250px);
  display: flex;
  position: relative;
`;

const SideBarMock = styled.div`
  width: 250px;
  flex-shrink: 0;
`;
interface Props {
  children?: any;
}

export const Player = ({ children }: Props) => {
  return (
    <ContentContainer>
      <SideBarMock />
      <SideBar />
      {children}
    </ContentContainer>
  );
};
