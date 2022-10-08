import axios from "axios";

const BASE_URL = "https://44.210.140.91:5000/api";
const currentUser = JSON.parse(
   JSON.parse(localStorage.getItem("persist:root")).user
).currentUser;

const TOKEN = currentUser ? currentUser.accessToken : null;

export const publicRequest = axios.create({
   baseURL: BASE_URL,
});

export const userRequest = axios.create({
   baseURL: BASE_URL,
   headers: { token: `Bearer ${TOKEN}` },
});
