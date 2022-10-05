import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: end;
   background: url("images/registerImage.jpeg");
   background-size: cover;
   ${mobile({ justifyContent: "center" })}
`;

const Wrapper = styled.div`
   width: 20%;
   height: 80%;
   padding: 20px;
   margin: 30px 30px 0px 0px;
   border-radius: 10px;
   background-color: white;
   ${mobile({ width: "75%", marginLeft: "7px", height: "82%" })}
`;

const Logo = styled.h1`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 25px;
   font-size: 30px;
   font-weight: bold;
   text-align: center;
`;
const Title = styled.h1`
   text-align: center;
   font-size: 18px;
   font-weight: 500;
   margin-bottom: 20px;
`;
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`;
const Input = styled.input`
   flex: 1;
   font-size: 18px;
   min-width: 40%;
   margin: 10px 10px 0px 10px;
   padding: 10px;
   border: none;
   background-color: whitesmoke;
`;
const Agreement = styled.span`
   font-size: 12px;
   margin: 30px 0px;
`;
const ButtonContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: white;
   border: 3px solid rgb(231, 151, 54);
   margin-top: 5px;
   cursor: pointer;
`;

const Register = () => {
   return (
      <Container>
         <Wrapper>
            <Logo style={{ color: "black" }}>
               NG
               <ShoppingCart style={{ color: "#e79736 ", marginLeft: "5px" }} />
            </Logo>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
               <Input placeholder="First Name" />
               <Input placeholder="Last Name" />
               <Input placeholder="Username" />
               <Input placeholder="Email" />
               <Input placeholder="Password" />
               <Input placeholder="Confirm Password" />
               <Agreement>
                  By creating an account, I consent to the processing of my
                  personnal data in accordance with the PRIVACY POLICY
               </Agreement>
               <ButtonContainer>
                  <Button>CREATE</Button>
               </ButtonContainer>
            </Form>
         </Wrapper>
      </Container>
   );
};

export default Register;
