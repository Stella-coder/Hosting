import React from "react";
import styled from "styled-components";
import { animateScroll as scroll, Link } from "react-scroll";

const HeaderN = () => {
  return (
    <Container>
      <Logo
        onClick={() => {
          scroll.scrollToBottom();
        }}
      >
        <img src="pics/m.png" />
        STELLA
      </Logo>
      <Wrapper>
        <Link
          offset={10}
          activeClass="active"
          to="body"
          smooth={true}
          duration={1000}
        >
          <span>Home</span>
        </Link>
        <Link
          offset={10}
          activeClass="active"
          to="about"
          smooth={true}
          duration={1000}
        >
          <span>About</span>
        </Link>

        <Link
          offset={10}
          activeClass="active"
          to="project"
          smooth={true}
          duration={1000}
        >
          <span>Project</span>
        </Link>
        <Link
          offset={10}
          activeClass="active"
          to="contact"
          smooth={true}
          duration={1000}
        >
          <span>Contact</span>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default HeaderN;

const Container = styled.div`
  height: 80px;
  width: 99vw;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.25);
  //background-color: blueviolet;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;
const Logo = styled.div`
  font-weight: bold;
  margin-left: 50px;
  color: orange;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  img {
    height: 50px;
    width: 50px;
    border-radius: 30px;
    object-fit: cover;
    border: 2px solid white;
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
  margin-right: 50px;
  span {
    margin: 20px;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`;
