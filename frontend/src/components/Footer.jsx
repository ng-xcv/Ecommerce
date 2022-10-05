import {
   MailOutline,
   Facebook,
   Instagram,
   Phone,
   Pinterest,
   Room,
   Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
   display: flex;
   ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
   margin: 20px 0px;
`;
const SocialContainer = styled.h1`
   display: flex;
`;
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${(props) => props.bg};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`;
const Center = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({ display: "none" })}
`;
const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const Right = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`;

const Payement = styled.img`
   width: 50%;
`;

const Footer = () => {
   return (
      <Container>
         <Left>
            <Logo>NG.</Logo>
            <Description>
               There are many variations of Lorem ipsum avaible, but the
               majority have sufered alteration in some form, by injected
               humour, or randomised words which don't look even slighty
               believable
            </Description>
            <SocialContainer>
               <SocialIcon bg="385999">
                  <Facebook />
               </SocialIcon>
               <SocialIcon bg="E4405F">
                  <Instagram />
               </SocialIcon>
               <SocialIcon bg="55ACEE">
                  <Twitter />
               </SocialIcon>
               <SocialIcon bg="E60023">
                  <Pinterest />
               </SocialIcon>
            </SocialContainer>
         </Left>
         <Center>
            <Title>Usefuls Links</Title>
            <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Man fashion</ListItem>
               <ListItem>Woman fashion</ListItem>
               <ListItem>Accessories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms</ListItem>
            </List>
         </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room /> Hann Mariste I, Cité Hilal
            </ContactItem>

            <ContactItem>
               <Phone /> +221 77412 45 77
            </ContactItem>
            <ContactItem>
               <MailOutline /> ngaryfaye95@gmail.com
            </ContactItem>
            <Payement src="https://i.ibb.co/Qfvn4z6/payement.png" />
         </Right>
      </Container>
   );
};

export default Footer;
