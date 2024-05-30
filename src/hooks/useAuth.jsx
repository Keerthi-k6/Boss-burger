import { createContext } from "react";
import { useContext, useState } from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(userService.getUser());

    const login = async(email, password) => {
        try{
            const user = userService.login(email, password);
            setUser(user);
            toast.success('Login Successful!');
        }
        catch(err)
        {
            toast.error(err.response.data);
        }
    }
    const register = async(data) => {
        try
        {
            const user = userService.register(data);
            setUser(user);
            toast.success('Registration Successful!');
        }
        catch(err)
        {
            toast.error(err.response.data);
        }
    }
     const logout = () => {
         userService.logout();
         setUser(null);
         toast.success('Logout Successful!');
     }


    return (
        <AuthContext.Provider value={{ user, login, logout,register }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
