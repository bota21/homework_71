import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.reddit.com/r/pics"
});

export default instance;
