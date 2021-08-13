import React from "react";
import { Background, Row } from "../common";
import { ArtistSection } from "../CommonComponents/ArtistSection";
import { TopSongsSection } from "../CommonComponents/TopSongsSection";
import { TrackShowCaseSlider } from "../TracksComponents/Slider";
import { Banner } from "./Banner";
interface Props {}

export const HomePage = (props: Props) => {
  return (
    <Background>
      <Banner title="dream top six train" />
      <TrackShowCaseSlider />
      <Row justifyContent="space-between" padding="30px 50px">
        <TopSongsSection />
        <ArtistSection />
      </Row>
    </Background>
  );
};
