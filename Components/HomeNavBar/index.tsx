import React, { BlockquoteHTMLAttributes, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import PlayerOnIcon from "../assets/Icon.svg";
import { ExtravagantButton } from "../Home";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContainer } from "../common";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
interface ContainerProps {
  show?: boolean;
}
const Container = styled(motion.div)<ContainerProps>`
  position: fixed;
  z-index: 2;
  width: 100%;
  color: #fff;
  background-color: #0e1929;
`;
const Nav = styled.nav`
  margin: 20px 0 20px 0;
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  ul {
  }
  li {
    transition: color 120ms ease-in-out;
    display: inline-block;
    list-style: none;
    font-size: 1.5rem;
    &:last-of-type {
      margin-left: 20px;
    }
    &:hover {
      color: #bcbcbc;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;
const SignContainer = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li {
    display: inline-block;
    list-style: none;
    font-size: 1rem;
    &:not(last-of-type) {
      margin-right: 20px;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

const ToggleMenu = styled(motion.button)`
  outline: none;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

interface NavBarProps {
  toggleMenu: boolean;
  setToggleMenu: SetStateAction<any>;
  links: string[];
  toggleMenuLinks: string[];
}
export const NavBar = ({ toggleMenu, setToggleMenu, links, toggleMenuLinks }: NavBarProps) => {
  const [state, setState] = useState<any>({ show: true, scrollPos: 0 });
  const handleState = () => {
    setState((prevState: any) => {
      return {
        ...prevState,
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > prevState.scrollPos,
      };
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleState);
    return () => {
      window.removeEventListener("scroll", handleState);
    };
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <Container
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: state.show ? 0 : -300, opacity: state.show ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        show={state.show}
      >
        <Nav>
          <Image src={PlayerOnIcon} width="50px" height="50px" />
          <ul>
            {links.map((link) => {
              return (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/\s+/g, "")}`}>{link}</Link>
                </li>
              );
            })}
          </ul>
          <SignContainer>
            <ul>
              <li>
                <Link href="/signin" passHref>
                  <div>
                    <ExtravagantButton
                      color="#000"
                      filled
                      backgroundColor="#31ddd3"
                      padding="12px 15px"
                      fontSize="1rem"
                      text="Sign in"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/signup" passHref>
                  <div>
                    <ExtravagantButton
                      border={{ size: "2", color: "#fff" }}
                      padding="12px 15px"
                      fontSize="1rem"
                      text="Sign up"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </SignContainer>
          <ToggleMenu onClick={() => setToggleMenu(!toggleMenu)}>
            <IconContainer
              key="toggleMenu"
              cursor="pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
              exit={{ opacity: 0 }}
            >
              <FontAwesomeIcon icon={toggleMenu ? faTimes : faBars} size="4x" color="white" />
            </IconContainer>
          </ToggleMenu>
        </Nav>
      </Container>
    </AnimatePresence>
  );
};
