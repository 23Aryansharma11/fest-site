import React, {useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authcontext'
import { useNavigate } from 'react-router-dom'
export const useGetEvents =() => {
    const [events,setEvents]=useState(null)
    const[loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext()
   
    const navigate=useNavigate();
    useEffect(()=>{
        const getEvents=async()=>{
            
           
try{
const res=await fetch("/api/admin/getall")
const data=await res.json()
if(data.error==="Token expired"){
    localStorage.removeItem("user");
    setAuthUser(null);
    navigate("/home")
}
if(data.error){
    throw new Error(data.error)
}
setEvents(data)
}catch(err){
console.log(err)
toast.error(`${err}`);
}finally {
setLoading(false)
}
        }
         getEvents();
        console.log("caalled")
    },[])


    
     return {events,loading}
}
