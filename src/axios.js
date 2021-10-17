import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-mern-backend-ly.herokuapp.com",
});

export default instance; 