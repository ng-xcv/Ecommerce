import React from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Categories from "../components/Categories";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Home = () => {
   return (
      <div>
         <Announcement />
         <Navbar />
         <Slider />
         <Categories />
         <Products />
         <Newsletter />
         <Footer />
      </div>
   );
};

export default Home;
