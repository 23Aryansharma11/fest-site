import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authcontext.jsx";
import toast from "react-hot-toast";

 
const useLogin=()=>{
    const {setAuthUser}=useAuthContext()
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate()
    const logIn=async({email,password})=>{
        console.log(email)
      const success=check(email,password)
      if(!success){
        return
      }
      setLoading(true)
      try{
        
      const res=await fetch("/api/auth/login",{
        method: "POST",
      
        body: JSON.stringify({email,password}),
        headers: {
          "Content-type": "application/json"
        }
      })
      const data=await res.json();
      if(data.error){
          throw new Error(data.error)
      }
      console.log(data)
      localStorage.setItem("user",JSON.stringify(data))
      setAuthUser(data)
      toast.success("User Logged in")
      }catch(err){
        toast.error(`${err}`)
      console.log(err)
      }finally{
        setLoading(false)
      }
    }
    return {loading,logIn}
}
const check=(email,password)=>{
    if(!email||!password){
        return false;
    }
if(password.length<8){
    return false;
}
return true
}
export default useLogin