import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authcontext";

export const useGetMe=()=>{
    const navigate=useNavigate()
    const {setAuthUser}=useAuthContext();
    const [loading,setLoading]=useState(false)
    const [applied,setApplied]=useState([]);
    useEffect(()=>{
        const GetMe=async()=>{
            setLoading(true)
           try{
            const res=await fetch("/api/auth/getme");
            const data=await res.json();
            
            console.log(data)
            if(data.error==="Token expired"){
                localStorage.removeItem("user");
                setAuthUser(null);
                navigate("/")
            }
            if(data.error){
                throw new Error(data.error)
            }
            setApplied(data)
           }catch(err){
   toast.error(`${err}`)
   console.log(err)
           }finally{
setLoading(false)
           }
        }
        GetMe();
    },[])
    return {applied,loading}
  
}