import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authcontext"
import { useNavigate } from "react-router-dom"

export const useStatus=()=>{
    const [loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext();
    const navigate=useNavigate()
    const status=async(value,id)=>{
        setLoading(true)
        console.log(id)
        try{
            console.log("hello")
            const res=await fetch(`/api/admin/${value}/${id}`,{
                method: "POST",
              
              
                headers: {
                  "Content-type": "application/json"
                }
              })

            const data=await res.json()
            if(data.error==="Token expired"){
              localStorage.removeItem("user");
              setAuthUser(null);
              navigate("/")
          }
            if (data.error){
                throw new Error(data.error)
            }
            console.log(data)
          toast.success(`Successfully ${value}`)
        }catch(error){
            toast.error(`${error}`)
console.log(error)
        }finally{
            setLoading(false)
        }

    }
    return {loading,status};
}