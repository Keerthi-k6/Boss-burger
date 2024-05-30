import axios from "axios";

export const setLoadingInterceptor = ({showLoading, hideLoading}) => {
    axios.interceptors.request.use(req => {
        showLoading();
        return req;
    },
    err => {
        hideLoading();
        return Promise.reject(err);
    }
)

axios.interceptors.response.use(res => {
    hideLoading();
    return res; 
},
err => {
    hideLoading();
    return Promise.reject(err);
}
)  
}
export default setLoadingInterceptor