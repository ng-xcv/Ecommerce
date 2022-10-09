import axios from "axios";

const BASE_URL = "https://ecommerce-api.faytek.net/api";
const TOKEN = ""; //JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//.currentUser.accessToken;

export const publicRequest = axios.create({
   baseURL: BASE_URL,
});

export const userRequest = axios.create({
   baseURL: BASE_URL,
   header: { token: `Bearer ${TOKEN}` },
});
