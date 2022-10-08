import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { publicRequest } from "../requestMethod";
import { useNavigate } from "react-router-dom";

const KEY =
   "pk_test_51K22v5AYJWHtaKj5pGgJTKc84DFreFgTTRjSW9GBUi9nAbpVSPWSO8k0iI7AlfWP51yZTRVH60DA8PQ99xeC1KxX00btpHVknA";

const Container = styled.div``;
const Wrapper = styled.div`
   padding: 20px;
   ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
   font-weight: 300;
   text-align: center;
`;
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`;

const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: ${(props) => props.type === "filled" && "none"};
   background-color: ${(props) =>
      props.type === "filled" ? "black" : "transparent"};
   color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
   ${mobile({ width: "100%" })}
`;
const TopText = styled.span`
   text-decoration: underline;
   cursor: pointer;
   margin: 0px 10px;
`;
const Bottom = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   background-color: whitesmoke;
   ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
   flex: 3;
`;

const Hr = styled.hr`
   background-color: #eee;
   border: none;
   height: 1px;
`;

const Product = styled.div`
   display: flex;
   justify-content: space-between;
`;
const ProductDetail = styled.div`
   flex: 2;
   height: 22vh;
   display: flex;
`;

const ImageContainer = styled.div`
   width: 150px;
   overflow: hidden;
`;
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
`;
const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`;
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;
   border: 2px solid teal;
   padding: 4px;
   border-radius: 5px;
   ${mobile({ margin: "10px 0px" })}
`;
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 200;
   ${mobile({ margin: "5px 15px" })}
`;
const Summary = styled.div`
   flex: 1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 20px;
   height: 40%;
`;
const SummaryItem = styled.div`
   margin: 20px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${(props) => props.type === "total" && "500"};
   font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryTitle = styled.h1`
   font-weight: 200;
`;
const SummaryItemPrice = styled.span``;
const SummaryItemText = styled.span``;
const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;
`;

const Cart = () => {
   const cart = useSelector((state) => state.cart);
   const [stripeToken, setStripeToken] = useState(null);
   const navigate = useNavigate();

   const onToken = (token) => {
      setStripeToken(token);
   };

   useEffect(() => {
      const makeRequest = async () => {
         try {
            const res = await publicRequest.post("/checkout/payment", {
               tokenId: stripeToken.id,
               amount: 500, //cart.total * 100,
            });
            const data = res.data;
            navigate("/success", { state: res.data, replace: true });
         } catch (error) {
            console.log(error);
         }
      };
      stripeToken && makeRequest();
   }, [stripeToken, cart.total, navigate]);

   const last = Object.values(cart.products)[
      Object.values(cart.products).length - 1
   ];

   return (
      <Container>
         <Navbar />
         <Announcement />
         <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
               <TopButton>CONTINUE SHOPPING </TopButton>
               <TopTexts>
                  <TopText>Shopping Bag(2)</TopText>
                  <TopText>Your Wishlist</TopText>
               </TopTexts>
               <TopButton type="filled">CHECKOUT NOW </TopButton>
            </Top>
            <Bottom>
               <Info>
                  {cart.products.map((product) => (
                     <>
                        <Product>
                           <ProductDetail>
                              <ImageContainer>
                                 <Image src={product.img} />
                              </ImageContainer>
                              <Details>
                                 <ProductName>
                                    <b>Product: </b> {product.title}
                                 </ProductName>
                                 <ProductId>
                                    <b>ID: </b> {product._id}
                                 </ProductId>
                                 <ProductColor color={product.color} />
                                 <ProductSize>
                                    <b>Size:</b> {product.size}
                                 </ProductSize>
                              </Details>
                           </ProductDetail>
                           <PriceDetail>
                              <ProductAmountContainer>
                                 <Add />
                                 <ProductAmount>
                                    {product.quantity}
                                 </ProductAmount>
                                 <Remove />
                              </ProductAmountContainer>
                              <ProductPrice>
                                 $ {product.price * product.quantity}
                              </ProductPrice>
                           </PriceDetail>
                        </Product>
                        {product._id !== last._id && <Hr />}
                     </>
                  ))}
               </Info>
               <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Estimated Shipping </SummaryItemText>
                     <SummaryItemPrice>$ 5.98</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                     <SummaryItemText>Total</SummaryItemText>
                     <SummaryItemPrice>$ 80</SummaryItemPrice>
                  </SummaryItem>
                  <StripeCheckout
                     name="Faytek."
                     image="https://lh3.googleusercontent.com/-2CM1pnzJlE0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckDzEMekOLFH38qi_umB63t-t6bQw/photo.jpg?sz=46"
                     billingAddress
                     shippingAddress
                     description={`Your total is $${cart.total}`}
                     amount={cart.total * 100}
                     token={onToken}
                     stripeKey={KEY}
                  >
                     <Button>CHECKOUT NOW</Button>
                  </StripeCheckout>
               </Summary>
            </Bottom>
         </Wrapper>
         <Footer />
      </Container>
   );
};

export default Cart;
