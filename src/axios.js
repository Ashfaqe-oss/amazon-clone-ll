import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-ii-db6b7/us-central1/api",
  //api cloud function URL
});

export default instance;
