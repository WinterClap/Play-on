import React from "react";
import { Background } from "../common";
import { TrackShowCaseSlider } from "../TracksComponents/Slider";

interface Props {}

export const HomePage = (props: Props) => {
  return (
    <Background>
      <TrackShowCaseSlider></TrackShowCaseSlider>
    </Background>
  );
};
