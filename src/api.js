import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "f3e51bf3b1a3f8bcb87fc17f17ed8c28",
        language: "en-US"
    }

})

export default api;