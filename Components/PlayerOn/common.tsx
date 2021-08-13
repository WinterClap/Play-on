import { useEffect, useState } from "react";
import styled from "styled-components";

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundDark};
  min-height: 100vh;
  width: 100%;
  color: #fff;
  font-family: "Montserrat";
`;

interface FlexProps {
  margin?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  padding?: string;
}
export const Row = styled.div<FlexProps>`
  display: flex;
  padding: ${(props) => props.padding || "0"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "0"};
`;
export const Col = styled.div<FlexProps>`
  display: flex;
  padding: ${(props) => props.padding || "0"};
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "0"};
  height: ${(props) => props.height};
`;

interface TextProps {
  fontSize?: string;
}
export const SectionTitle = styled.h1<TextProps>`
  font-size: ${(props) => props.fontSize || "3rem"};
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
`;
/* 
USEFUL COMPONENTS
*/

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  interface stateInterface {
    width: number | undefined;
    height: number | undefined;
  }
  const [windowSize, setWindowSize] = useState<stateInterface>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    if (typeof window !== "undefined") {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
