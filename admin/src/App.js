import "./App.css";
import Home from "./pages/home/Home";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import { useSelector } from "react-redux";
import Orders from "./pages/orders/orders";

function App() {
   const currentUser = useSelector((state) => state.user.currentUser);
   const admin = currentUser ? currentUser.isAdmin : null;

   return (
      <Router>
         <Routes>
            <Route
               path="/login"
               element={admin ? <Navigate to="/" /> : <Login />}
            />
            {admin ? (
               <>
                  <Route exact path="/" element={<Layout />}>
                     <Route path="" element={<Home />} />
                     <Route path="users" element={<UserList />} />
                     <Route path="user/:userId" element={<User />} />
                     <Route path="newUser" element={<NewUser />} />
                     <Route path="products" element={<ProductList />} />
                     <Route path="orders" element={<Orders />} />
                     <Route path="product/:productId" element={<Product />} />
                     <Route path="newproduct" element={<NewProduct />} />
                  </Route>
               </>
            ) : (
               <Route path="" element={<Navigate to="/login" />} />
            )}
         </Routes>
      </Router>
   );
}

export default App;
