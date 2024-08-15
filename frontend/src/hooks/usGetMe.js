import { useEffect, useState } from "react"
import toast from "react-hot-toast";

export const useGetMe=()=>{
    const [loading,setLoading]=useState(false)
    const [applied,setApplied]=useState([]);
    useEffect(()=>{
        const GetMe=async()=>{
            setLoading(true)
           try{
            const res=await fetch("/api/auth/getme");
            const data=await res.json();
            const reverse=await data.reverse();
            console.log(data)
            if(data.error){
                throw new Error(data.error)
            }
            setApplied(reverse)
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