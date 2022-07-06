import { publicRequest, userRequest } from "../requestMethod";
import {
   getProductFailure,
   getProductSuccess,
   getProductStart,
   deleteProductFailure,
   deleteProductSuccess,
   deleteProductStart,
   updateProductFailure,
   updateProductSuccess,
   updateProductStart,
   addProductFailure,
   addProductSuccess,
   addProductStart,
} from "./productSlice";
import { loginStart, loginSuccess, loginFailure, logout } from "./userSlice";

export const login = async (dispatch, user) => {
   dispatch(loginStart());
   try {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
   } catch (error) {
      dispatch(loginFailure());
   }
};

export const endSession = (dispatch) => {
   dispatch(logout());
};

export const getProducts = async (dispatch) => {
   dispatch(getProductStart());
   try {
      const res = await publicRequest.get("/products");
      dispatch(getProductSuccess(res.data));
   } catch (error) {
      dispatch(getProductFailure());
   }
};



export const deleteProduct = async (id, dispatch) => {
   dispatch(deleteProductStart());
   try {
      //const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(id));
   } catch (error) {
      dispatch(deleteProductFailure());
   }
};

export const updateProduct = async (id, product, dispatch) => {
   dispatch(updateProductStart());
   try {
      //const res = await userRequest.update(`/products/${id}`, product);
      dispatch(updateProductSuccess({ id, product }));
   } catch (error) {
      dispatch(updateProductFailure());
   }
};

export const addProduct = async (product, dispatch) => {
   dispatch(addProductStart());
   try {
      console.log(product);
      const res = await userRequest.post("/products", product);
      dispatch(addProductSuccess(res.data));
   } catch (error) {
      dispatch(addProductFailure());
   }
};
