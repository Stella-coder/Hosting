import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "react-scroll";

const Home = () => {
  const Slider = useRef();
  const Slider1 = useRef();
  const Slider2 = useRef();

  const [image, setImage] = useState([
    "./pics/lap5.jpg",
    "./pics/lap6.jpg",
    "./pics/lap2.jpg",
  ]);
  const [counter, setCounter] = useState(0);
  const addCount = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    setInterval(() => {
      setCounter((r) => r + 1);
    }, 5000);
  }, []);

  const Slidercolor = ["gray", "black", "black"];
  const Slidercolor1 = ["black", "gray", "black"];
  const Slidercolor2 = ["black", "black", "gray"];

  const add = counter % 3;

  useEffect(() => {
    Slider.current.style.background = Slidercolor[add];
    Slider.current.style.transition = "all 350ms";
    Slider1.current.style.background = Slidercolor1[add];
    Slider1.current.style.transition = "all 350ms";
    Slider2.current.style.background = Slidercolor2[add];
    Slider2.current.style.transition = "all 350ms";
  }, [counter]);
  return (
    <Container id="body">
      <BackgroundImage src={image[counter % image.length]} />
      <Wrapper>
        <Text>
          <div>I am sani stella</div>
          <span>
            A creative thinker, software and web developer, UI/UX designer.
          </span>
        </Text>

        <Button>Know More</Button>

        <Slides>
          <Slide1
            ref={Slider}
            onClick={() => {
              setCounter(0);
            }}
          ></Slide1>
          <Slide2
            ref={Slider1}
            onClick={() => {
              setCounter(1);
            }}
          ></Slide2>
          <Slide3
            ref={Slider2}
            onClick={() => {
              setCounter(2);
            }}
          ></Slide3>
        </Slides>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  transition: all 350ms;
  transform-origin: center left;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  //padding-top: 70px;
`;
const BackgroundImage = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  //position: relative;
  z-index: -1;
  display: flex;
  // opacity: 0.5;
`;
const Wrapper = styled.div`
  position: absolute;
  //top: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.div`
  height: 40px;
  width: 130px;
  background-color: orangered;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: all 350ms;
  &:hover {
    transform: scale(1.01);
    background-color: orange;
  }
`;

const Slides = styled.div`
  display: flex;
  margin: 50px;
`;
const Slide1 = styled.div`
  height: 5px;
  width: 20px;
  background-color: yellow;
  margin-right: 5px;
`;
const Slide2 = styled.div`
  height: 5px;
  width: 25px;
  background-color: yellow;
  margin-right: 5px;
`;
const Slide3 = styled.div`
  height: 5px;
  width: 20px;
  background-color: yellow;
  margin-right: 5px;
`;
const Text = styled.div`
  text-align: center;
  margin: 30px;
  div {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 50px;
    color: white;
  }
  span {
    font-size: 25px;
  }
`;
