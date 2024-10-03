import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:'https://car-doctor-server-farid22022-md-farid-hossen-rehads-projects.vercel.app',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect( () =>{
        axios.interceptors.response.use( res =>{
            return res
        },error =>{
            console.log('error tracked in the interceptor ',error.response)
            if(error.response.status === 401 || error.response.status === 401 ){
                // console.log('logout the user');
                logOut()
                .then(() => { 
                    navigate('/login')
                })
                // .catch(error => console.log(error))
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;