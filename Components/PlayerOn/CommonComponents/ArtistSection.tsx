import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Row, SectionTitle } from "../common";

const artists: { name: string; imageUrl: string }[] = [
  { name: "Artist1", imageUrl: "imageUrl1" },
  { name: "Artist2", imageUrl: "imageUrl2" },
  { name: "Artist3", imageUrl: "imageUrl3" },
  { name: "Artist4", imageUrl: "imageUrl4" },
  { name: "Artist5", imageUrl: "imageUrl5" },
];

const ArtistImage = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid white;
  border-radius: 50%;
`;

const Container = styled.div`
  width: 100%;
`;

const DimmedLink = styled.p`
  color: ${(props) => props.theme.colors.dimmedTextDark};
`;

interface Props {}

export const ArtistSection = (props: Props) => {
  return (
    <Container>
      <Row justifyContent="space-between">
        <SectionTitle>Top Artist</SectionTitle>
        <DimmedLink>
          <Link href="VIEW-MORE">View More</Link>
        </DimmedLink>
      </Row>
      <Row>
        {artists.map((artist) => (
          <ArtistImage key={artist.imageUrl}></ArtistImage>
        ))}
      </Row>
    </Container>
  );
};
