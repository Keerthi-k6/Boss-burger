import axios from "axios";

axios.defaults.baseURL = 
    process.env.NODE_ENV === 'production'? 'https://bossburger-backend.onrender.com' : 'https://bossburger-backend.onrender.com';