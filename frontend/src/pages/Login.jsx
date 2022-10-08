import { ShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: url("images/loginImage.jpeg");
   background-size: cover;
   ${mobile({ justifyContent: "center" })}
`;

const Wrapper = styled.div`
   width: 20%;
   height: 60%;
   padding: 20px;
   margin-left: 30px;
   border-radius: 10px;
   background-color: white;
   ${mobile({ width: "75%", marginLeft: "7px", height: "50%" })}
`;

const Logo = styled.h1`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 20px;
   font-size: 30px;
   font-weight: bold;
   text-align: center;
`;
const Title = styled.h1`
   text-align: center;
   font-size: 16px;
   font-weight: 300;
   margin-bottom: 25px;
`;
const Form = styled.form`
   display: flex;
   flex-direction: column;
`;
const Input = styled.input`
   flex: 1;
   font-size: 16px;
   min-width: 40%;
   margin: 20px 10px 0px 10px;
   padding: 10px;
   border: none;
   background-color: whitesmoke;
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
   border: 3px solid #c84d62;
   margin: 40px 0px 20px 0px;
   cursor: pointer;
   &:disabled {
      color: green;
      cursor: not-allowed;
   }
   ${mobile({ margin: "20px 0px" })}
`;

const Link = styled.a`
   font-size: 12px;
   margin-top: 7px;
   ${mobile({ textAlign: "center" })}
`;

const Error = styled.span`
   color: red;
   margin: 20px 10px 0px 10px;
   text-align: center;
`;

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const { isFetching, error } = useSelector((state) => state.user);

   const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
   };

   return (
      <Container>
         <Wrapper>
            <Logo style={{ color: "black" }}>
               Faytek.
               <ShoppingCart style={{ color: "#c84d62 ", marginLeft: "5px" }} />
            </Logo>
            <Title>SIGN IN</Title>
            <Form>
               <Input
                  placeholder="Username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
               />
               <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
               />
               {error && <Error>Something went wrong ...</Error>}

               <ButtonContainer>
                  <Button disabled={isFetching} onClick={handleClick}>
                     LOG IN
                  </Button>
               </ButtonContainer>
               <Link>DO NOT YOU REMEMBER YOUR PASSWORD?</Link>
               <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
         </Wrapper>
      </Container>
   );
};

export default Login;
