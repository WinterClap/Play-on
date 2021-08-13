import styled from "styled-components";
import { Col, Row, SectionTitle } from "../common";
import Image from "next/image";

const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
`;
const SongImageContainer = styled.div`
  border-radius: 0 15px;
  border: 1px solid white;
  width: 60px;
  margin-right: 20px;
  height: 60px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 10px;
`;

const DimmedText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${(props) => props.theme.colors.dimmedTextDark};
`;

const songs: { artist: string; title: string; imageUrl: string; duration: string }[] = [
  { artist: "Artist1", title: "Level of concern", imageUrl: "imageUrl1", duration: "4:40" },
  { artist: "Artist2", title: "My future", imageUrl: "imageUrl2", duration: "3:43" },
];
interface Props {}

export const TopSongsSection = (props: Props) => {
  return (
    <Container>
      <SectionTitle> Billboard Top Charts </SectionTitle>
      <Col>
        {songs.map((song) => (
          <SongContainer key={song.imageUrl}>
            <Row>
              <SongImageContainer />
              <Col>
                <Text>{song.title}</Text>
                <DimmedText>{song.artist}</DimmedText>
              </Col>
            </Row>
            <Row>{song.duration}</Row>
          </SongContainer>
        ))}
      </Col>
    </Container>
  );
};
