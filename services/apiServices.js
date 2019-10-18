import axios from 'axios'

let instance;

instance = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=id&apiKey=0011a3c08d6c44bc8e68eb7bce22b787'
});

const apiInstance = instance;

export default apiInstance;