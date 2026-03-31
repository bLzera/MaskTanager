import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000"
});

/*api.interceptors.request.use(req => {
    console.log('REQ: ', req.url);
    return req;
})

console.log('API GLOBAL: ', api);*/