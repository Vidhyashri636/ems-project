import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { __AUTH } from '../backend/firebaseConfig';
import toast from 'react-hot-toast';

//!1 create contex
export let AuthUserContext=createContext(null);
const AuthContextApi = ({children}) => {
    let [authUser, setAuthUser]=useState(null || {});

    useEffect(()=>{
       onAuthStateChanged(__AUTH,(userInfo)=>{
        if(userInfo?.emailVerified===true){
            window.localStorage.setItem("UserToken",userInfo?.accessToken);
            setAuthUser(userInfo)
        }else{
            window.localStorage.removeItem("UserToken");
            setAuthUser(null);
        }
       });
    },[]);

    //! logout functionality
    let logout=async()=>{
     try{
           await signOut(__AUTH);
        window.localStorage.removeItem("UserToken");
        toast.success("user logout successfully")
        setTimeout(()=>{
            window.location.assign("/");
        },1000);
     }catch(error){
       toast.error(error.message);
       console.log("Error while logout:",error);
       
     }
    };

  return <AuthUserContext.Provider value={{authUser,logout}}>
  {children}
  </AuthUserContext.Provider>
    
  
    
  
}

export default AuthContextApi;
