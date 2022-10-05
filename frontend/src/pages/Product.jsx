import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Add, Remove } from "@material-ui/icons";
import Newsletter from "../components/Newsletter";
import Announcement from "../components/Announcement";
import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
   padding: 50px;
   display: flex;
   ${mobile({ flexDirection: "column" })}
`;
const ImageContainer = styled.div`
   flex: 1;
`;
const Image = styled.img`
   width: 100%;
   height: 90vh;
   object-fit: cover;
   ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
   flex: 1;
   padding: 0px 20px;
   ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
   font-weight: 200;
`;
const Description = styled.p`
   margin: 20px 0px;
`;
const Price = styled.div`
   font-weight: 100;
   font-size: 40px;
`;

const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
   display: flex;
   align-items: center;
`;
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`;
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
   margin: 0px 5px;
   cursor: pointer;
`;
const FilterSize = styled.select`
   margin-left: 10px;
   padding: 7px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`;
const Amount = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;
`;
const Button = styled.button`
   background-color: white;
   border: 2px solid teal;
   padding: 15px;
   cursor: pointer;
   font-weight: 5000;
   &:hover {
      background-color: #f8f4f4;
   }
`;

const Product = () => {
   const location = useLocation();
   const id = location.pathname.split("/")[2];

   const [product, setProduct] = useState({});
   const [quantity, setQuantity] = useState(1);
   const [color, setColor] = useState(null);
   const [size, setSize] = useState(null);
   const dispatch = useDispatch();

   useEffect(() => {
      try {
         const getProduct = async () => {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
         };
         getProduct();
      } catch (error) {}
   }, [id]);

   const handleQuantity = (type) => {
      if (type === "dec") {
         quantity > 1 && setQuantity(quantity - 1);
      } else {
         setQuantity(quantity + 1);
      }
   };

   const handleClick = () => {
      dispatch(
         addProduct({
            ...product,
            quantity,
            color,
            size,
         })
      );
   };

   return (
      <Container>
         <Navbar />
         <Announcement />
         <Wrapper>
            <ImageContainer>
               <Image src={product.img} />
            </ImageContainer>
            <InfoContainer>
               <Title>{product.title}</Title>
               <Description>{product.desc}</Description>
               <Price>$ {product.price}</Price>
               <FilterContainer>
                  <Filter>
                     <FilterTitle>Color</FilterTitle>
                     {product.color?.map((c) => (
                        <FilterColor
                           onClick={() => setColor(c)}
                           color={c}
                           key={c}
                        />
                     ))}
                  </Filter>
                  <Filter>
                     <FilterTitle>Size</FilterTitle>
                     <FilterSize onChange={(e) => setSize(e.target.value)}>
                        {product.size?.map((s) => (
                           <FilterSizeOption key={s}>{s}</FilterSizeOption>
                        ))}
                     </FilterSize>
                  </Filter>
               </FilterContainer>
               <AddContainer>
                  <AmountContainer>
                     <Remove
                        onClick={() => handleQuantity("dec")}
                        style={{ cursor: "pointer" }}
                     />
                     <Amount>{quantity}</Amount>
                     <Add
                        onClick={() => handleQuantity("inc")}
                        style={{ cursor: "pointer" }}
                     />
                  </AmountContainer>
                  <Button onClick={handleClick}>ADD TO CART</Button>
               </AddContainer>
            </InfoContainer>
         </Wrapper>
         <Newsletter />
         <Footer />
      </Container>
   );
};

export default Product;
