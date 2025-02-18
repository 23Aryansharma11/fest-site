import React, { createContext, useState } from "react";
import { useContext } from 'react';
export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem("user"))||null)
    return(
    <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthContext.Provider>)
}
export const useAuthContext=()=>{
    return useContext(AuthContext)
}
// import React, {useState, createContext } from 'react'
// import { useContext } from 'react';

// export const AuthContext = createContext();

// export const AuthContextProvider=({children})=>{
   
//     const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem("user"))||null)

//  return   <AuthContext.Provider value={{authUser,setAuthUser}}>
        
// {children}
//     </AuthContext.Provider>
// }
// export const useAuthContext=()=>{
//     return useContext(AuthContext)
// }
