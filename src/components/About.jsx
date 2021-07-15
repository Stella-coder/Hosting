import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container id="about">
      <Image src="pics/m.png" />
      <TextHolder>
        <span>
          I am Sani Stella, a creative thinker, a web and software developer and
          a UI/UX developer. An intern at codelab and a 300 level student of
          Computer Science.
          <p>
            Works with a team of great developers at codelab, we build the
            product you need on time with an experience team that use a clear
            and effective process, we carry more than just coding skills our
            values makes us stand out from others.
          </p>
          <p>
            We also train and mentor young ones to be outstanding in the tech
            space as technology is the future.
          </p>
        </span>
      </TextHolder>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  // background-color: white;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 400px;
  width: 500px;
  margin-top: 150px;
  object-fit: contain;
`;
const TextHolder = styled.div`
  height: 400px;
  width: 400px;
  margin-top: 250px;
`;
