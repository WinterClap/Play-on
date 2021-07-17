import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PlayerOnIcon from "../../assets/Icon.svg";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { IconContainer } from "../../common";
import { IconLookup, IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSoap,
  faIndent,
  faBroadcastTower,
  faUsers,
  faRecordVinyl,
  faMusic,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";
import { faCompass, faChartBar, faHeart, faFolder } from "@fortawesome/free-regular-svg-icons";
import { Row } from "../common";
const SideBarContainerBackground = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  border: none;
  background-color: ${(props) => props.theme.colors.backgroundDark};
`;
const SideBarContainer = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  flex-shrink: 0;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundDark};
  color: #fff;
  border-radius: 0 20px 20px 0;
  border-right: 1px solid #828b9a;
`;

const SideBarSection = styled(motion.section)`
  /* possible straggerParent */
  width: 90%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SideBarSectionTitle = styled.h1`
  font-size: 1.3rem;
  padding-left: 20px;
  font-weight: 600;
`;
const SideBarSectionSubtitle = styled.h2`
  font-size: 1rem;
  width: 100%;
  font-weight: 600;
  padding-left: 20px;
  margin-bottom: 0;
  color: #828b9a;
`;
const BrandContainer = styled(motion.div)`
  width: 90%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface SectionComponentProps {
  icons: any;
  texts: string[];
  isActive?: boolean;
}
const SectionComponent = ({ icons, texts }: SectionComponentProps) => {
  return (
    <>
      {texts.map((text, index) => (
        <SideBarSectionSubtitle>
          <Row width="100%" justifyContent="flex-start">
            <IconContainer margin="0 0 0 0" flexBasis="20%">
              <FontAwesomeIcon icon={icons[index]} size="1x" />
            </IconContainer>
            <span>{text}</span>
          </Row>
        </SideBarSectionSubtitle>
      ))}
    </>
  );
};
interface Props {}
export const SideBar = (props: Props) => {
  const sectionsInfor = [
    {
      title: "Recommend",
      subsections: ["Home", "Explore", "Genres", "Radio", "Artist"],
      icons: [faHome, faSoap, faIndent, faBroadcastTower, faUsers],
    },
    {
      title: "My Library",
      subsections: ["Recently Played", "Albums", "Favorite Songs", "Local Files"],
      icons: [faMusic, faRecordVinyl, faHeart, faFolder],
    },
    { title: "Playlist", subsections: ["Getting data from async call to back..."], icons: [faCompactDisc] },
  ];
  const router = useRouter();

  return (
    <SideBarContainer>
      <SideBarContainerBackground />
      <BrandContainer>
        <Image src={PlayerOnIcon} width="50px" height="50px" />
      </BrandContainer>

      {sectionsInfor.map((section) => (
        <SideBarSection key={section.title}>
          <SideBarSectionTitle>{section.title}</SideBarSectionTitle>
          <SectionComponent icons={section.icons} texts={section.subsections} />
        </SideBarSection>
      ))}

      <Link href="/playeron/home">
        <a style={{ color: router.pathname === "/playeron/home" ? "red" : "inherit" }}> home </a>
      </Link>
    </SideBarContainer>
  );
};
