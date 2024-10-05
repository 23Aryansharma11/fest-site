import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useCollab = () => {
    const [loading,setLoading]=useState(false)
  const collab=async({email,name,transaction,contact})=>{
    
    // console.log(eventName,email)
    const success=checkInput(email,name,transaction,contact);
    if(!success){
       return
    }
    setLoading(true)

    try {
        const response = await fetch('/api/collab/submit', {
          method: 'POST',
          credentials: 'include', // Include cookies for authentication
          body: JSON.stringify({name,contact,email,transaction}),
          headers: {
            "Content-type": "application/json"
          }
        });
    
        // Check if the response is a redirect
        if (response.redirected) {
          // Redirect the browser to the redirected URL
          window.location.href = response.url;
          return;
        }
    
        // Parse the JSON response
        const data = await response.json();
    
        // Handle successful form submission
        console.log('Form submitted successfully', data);
      } catch(error){
        console.log(error)
       toast.error(`${error}`)
    }finally{
        setLoading(false)
    }
 




//    try{
//        const res=await fetch("/api/collab/submit",{
//            method: "POST",
         
//            body: JSON.stringify({name,contact,email,transaction}),
//            headers: {
//              "Content-type": "application/json"
//            }
//          });
//        //   console.log(res)
//          const data=await res.json();
//          console.log(data)
        
//          if(data.error){
//            throw new Error(data.error)
//          }
//       toast.success("Thanks for tour valuable contribution")
      

//    }
}
return {collab,loading}
}

export default useCollab;
const checkInput=(email,name,transaction,contact)=>{
console.log(email,name,transaction,contact)
if(!email||!name||!transaction||!contact){
console.log("hello")
toast.error("Please fill all fields");
return false
}
console.log(contact.length,contact,email)
if(contact.length>10||contact.length<10){
toast.error("Contact No should be of 10 digits.")
return false
}
return true
}
