import React, { useState } from "react";
import { mobile } from "../responsive";
import styled from "styled-components";
import { sliderItems } from "../data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
   overflow: hidden;
`;
const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: #fff7f7;
   border-radius: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${(props) => props.direction === "left" && "10px"};
   right: ${(props) => props.direction === "right" && "10px"};
   margin: auto;
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
`;

const Slide = styled.div`
   display: flex;
   width: 100vw;
   height: 100vh;
   align-items: center;
   background-color: #${(props) => props.bg};
   ${mobile({ height: "80vh" })}
`;

const ImageContainer = styled.div`
   height: 100%;
   flex: 2;
   ${mobile({ display: "none" })}
`;

const Image = styled.img`
   object-fit: cover;
   width: 100%;
   height: 87%;
`;

const InfoContainer = styled.div`
   flex: 1;
   padding: 50px;
   ${mobile({ padding: "30px" })}
`;
const Title = styled.h1`
   font-size: 70px;
   ${mobile({ fontSize: "45px" })}
`;
const Description = styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
   ${mobile({ fontSize: "16px" })}
`;
const Button = styled.button`
   padding: 10px;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer;
   ${mobile({ marginTop: "30px" })}
`;

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);
   const handleClick = (direction) => {
      if (direction === "left") {
         setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
         setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
   };

   return (
      <Container>
         <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
         </Arrow>
         <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
               <Slide bg={item.bg} key={item.id}>
                  <ImageContainer>
                     <Image src={`images/${item.img}`} />
                  </ImageContainer>
                  <InfoContainer>
                     <Title>{item.title}</Title>
                     <Description>{item.desc}</Description>
                     <Button>SHOW NOW</Button>
                  </InfoContainer>
               </Slide>
            ))}
         </Wrapper>
         <Arrow direction="right" onClick={() => handleClick("left")}>
            <ArrowRightOutlined />
         </Arrow>
      </Container>
   );
};

export default Slider;
