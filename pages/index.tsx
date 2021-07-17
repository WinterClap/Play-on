import styled from "styled-components";
import { Landing } from "../Components/Home";
import { NavBar } from "../Components/HomeNavBar";
import { AnimatePresence, motion } from "framer-motion";
import { BlackBackground } from "../Components/common";
import React, { useState } from "react";
import Link from "next/link";
const Container = styled(motion.div)`
  overflow: hidden;
  position: relative;
`;
const MenuContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  color: #fff;
  background-color: #0e1929;
  top: 90px;
  width: 100%;

  ul {
    padding: 0;
  }
  li {
    list-style: none;
    font-size: 2rem;
    padding: 20px 50px;
    cursor: pointer;
    &:hover {
      background-color: #066aff;
    }
  }
  @media screen and (max-width: 600px) {
    display: inline;
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
const Index: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const links = ["Player On", "About"];
  const toggleMenuLinks = [...links, "Sign in", "Sign up"];
  return (
    <BlackBackground>
      <Container initial={false} exit={{ opacity: 0 }}>
        <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} links={links} toggleMenuLinks={toggleMenuLinks} />
        <Landing />
        <AnimatePresence>
          {toggleMenu && (
            <MenuContainer initial={{ x: 600 }} animate={{ x: 0 }} exit={{ x: 600 }} transition={{ ease: "easeOut" }}>
              <ul>
                {toggleMenuLinks.map((link) => {
                  return (
                    <Link key={link} href={`/${link.toLowerCase().replace(/\s+/g, "")}`}>
                      <li>{link}</li>
                    </Link>
                  );
                })}
              </ul>
            </MenuContainer>
          )}
        </AnimatePresence>
      </Container>
    </BlackBackground>
  );
};
export default Index;
