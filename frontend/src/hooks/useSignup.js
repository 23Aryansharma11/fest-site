import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authcontext";
import toast from "react-hot-toast";
 
const useSignup=()=>{
    const {authUser,setAuthUser}=useAuthContext()
    const [loading,setLoading]=useState(false);
    const signup=async({name,email,password})=>{
      const success=check(name,email,password)
      if(!success){
        return
      }
      setLoading(true)
      try{
      
      const res=await fetch("/api/auth/signup",{
        method: "POST",
      
        body: JSON.stringify({fullName:name,email,password}),
        headers: {
          "Content-type": "application/json"
        }
      })
      const data=await res.json();
      if(data.error){
          throw new Error(data.error)
      }
      toast.success("Signedup Successfully")
      console.log(data)
      setAuthUser(data)
      localStorage.setItem("user",JSON.stringify(data))
      }catch(err){
        toast.error(err)
      console.log(err)
      }finally{
        setLoading(false)
      }
    }
    return {loading,signup}
}
const check=(name,email,password)=>{
    if(!email||!name||!password){
        return false;
    }
if(password.length<8){
    return false;
}
return true
}
export default useSignup