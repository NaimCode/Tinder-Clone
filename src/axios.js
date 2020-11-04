import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-backend-naim.herokuapp.com",
});
export default instance;
