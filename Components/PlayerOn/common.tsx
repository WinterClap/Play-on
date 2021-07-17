import styled from "styled-components";

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundDark};
  width: 100%;
  min-height: 100vh;
  color: #fff;
  font-family: "Montserrat";
`;

interface FlexProps {
  margin?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
}
export const Row = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "0"};
`;
