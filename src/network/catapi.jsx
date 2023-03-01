import axios from "axios";
const theCatAPI = axios;
theCatAPI.defaults.baseURL = "https://api.thecatapi.com/v1/";
theCatAPI.defaults.headers["x-api-key"] = process.env.REACT_APP_KEY;
export default theCatAPI;
