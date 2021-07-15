import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
let date = new Date().getFullYear();

const Contact = ({ clr }) => {
  return (
    <Container id="contact">
      <First>
        <Wrapper>
          <Text>Let's work together on projects, just send me email</Text>
          <Name1>
            <input placeholder="Enter your name" />
            <input placeholder="Enter your email" />
            <input placeholder="Enter message" />
          </Name1>
          <Button onClick={clr}>Send Message</Button>
        </Wrapper>
        <Wrapper1></Wrapper1>
      </First>
      <Footer>
        <span>{date} all right reserved |</span>
        <a
          href="https://web.facebook.com/?_rdc=1&_rdr"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://github.com/Stella-coder/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
      </Footer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Footer = styled.div`
  width: 100vw;
  height: 80px;
  background-color: orangered;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  a {
    margin-left: 10px;
    color: white;
  }
`;

const Button = styled.div`
  height: 30px;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orangered;
  border-radius: 5px;
  margin: 20px;
  font-size: 15px;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
    background-color: orange;
    transform: scale(1.02);
  }
`;

const Name1 = styled.div`
  input {
    margin: 10px;
    height: 25px;
    width: 250px;
    border-radius: 5px;
    padding-left: 8px;
  }
`;

const First = styled.div`
  height: 100%;
  width: 100%;
  // background-color: white;
  display: flex;
  //flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  //margin-left: 30px;
  text-align: left;

  text-transform: uppercase;
  font-weight: bold;
`;
const Wrapper1 = styled.div`
  width: 300px;
  height: 500px;
`;
const Text = styled.div`
  font-size: 18px;
  margin-top: 40px;
`;
