import React from "react";
import styled from "styled-components";

const Project = ({ bclr }) => {
  return (
    <Container id="project">
      <Text>View Repo of my recent projects</Text>
      <MainWrapper>
        <a
          href="http://createweatherapp.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span>My Weather app</span>
        </a>

        <a
          href="https://www.github.com/Stella-coder/Replica/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Replicate of vercel website</span>
        </a>

        <a
          href="https://github.com/Stella-coder/FrontEnd"
          target="_blank"
          rel="noreferrer"
        >
          <span>Awesome front-end projects</span>
        </a>
        <a
          href="https://github.com/Stella-coder/Database"
          target="_blank"
          rel="noreferrer"
        >
          <span>Creating dummy database using mongoose</span>
        </a>
      </MainWrapper>
      <Button onClick={bclr}> Change Mode</Button>
    </Container>
  );
};

export default Project;

const Button = styled.div`
  height: 40px;
  width: 150px;
  border-radius: 8px;
  border: 2px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
  transition: all 350ms;
  margin: 10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  // background-color: white;
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  // background-color: white;
  display: flex;
  flex-wrap: wrap;
  a {
    width: 200px;
    height: 300px;
    background-color: orangered;
    margin: 20px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 10px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    cursor: pointer;
    color: white;
    text-decoration: none;
    transition: all 350ms;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
const Text = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  color: gray;
  font-weight: bold;
`;
