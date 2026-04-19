import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://jankie-enterprises-demo.onrender.com/api",

});

export default API;