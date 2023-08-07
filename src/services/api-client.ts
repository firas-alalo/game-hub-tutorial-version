import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8290d8abc53448b0a72dc9d8140fdcd7'
    }
})