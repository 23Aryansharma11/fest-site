import { useState } from "react";
import toast from "react-hot-toast";

 const useRegistration=()=>{
    const [loading,setLoading]=useState(false)
    const registration=async({email,player1Name,player2Name,player3Name,player4Name,transaction,contact,branch,year,eventName})=>{
      
         const success=checkInput(email,eventName,player1Name,transaction,contact,branch,year);
         if(!success){
            return
         }
         setLoading(true)
        try{
            const res=await fetch("/api/form/submit",{
                method: "POST",
              
                body: JSON.stringify({eventName,contact,player1Name,player2Name,player3Name,player4Name,email,year,branch,transaction}),
                headers: {
                  "Content-type": "application/json"
                }
              });
              console.log(res)
              const data=await res.json();
              if(data.error){
                throw new Error(data.error)
              }
        //    toast.success(data)

        }catch(error){
            console.log(error)
        //    toast.error(error)
        }finally{
            setLoading(false)
        }

    }
return {registration,loading}
}

export default useRegistration;
const checkInput=(email,eventName,player1Name,transaction,contact,branch,year)=>{
    console.log(email,eventName,player1Name,transaction,branch,year)
if(!email||!player1Name||!transaction||!contact||!branch||!year||!eventName){
    console.log("hello")
toast.error("Please fill all fields");
return false
}
console.log(contact.length,contact,email,branch)
if(contact.length>10||contact.length<10){
    toast.error("Contact No should be of 10 digits.")
return false
}
return true
}