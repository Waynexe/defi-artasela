import axios from "axios";
export default axios.create({
  baseURL: "https://artasela-node.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});