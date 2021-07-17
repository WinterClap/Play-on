import React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid yellowgreen;
  margin-bottom: 20px;
`;
export const Carousel: React.FC = (props: Props) => {
  return <Container></Container>;
};
