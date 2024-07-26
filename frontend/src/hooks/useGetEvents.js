import React, {useState, useEffect } from 'react'
import toast from 'react-hot-toast'
export const useGetEvents =() => {
    const [events,setEvents]=useState(null)
    const[loading,setLoading]=useState(false)
    
   
    
    useEffect(()=>{
        const getEvents=async()=>{
            
           
try{
const res=await fetch("/api/admin/getall")
const data=await res.json()
if(data.error){
    throw new Error(data.error)
}
setEvents(data)
}catch(err){
console.log(err)
}finally {
setLoading(false)
}
        }
         getEvents();
        console.log("caalled")
    },[])


    
     return {events,loading}
}
