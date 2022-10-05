import { publicRequest } from "../requestMethod";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";

export const login = async (dispatch, user) => {
   dispatch(loginStart());
   try {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
   } catch (error) {
      dispatch(loginFailure());
   }
};
