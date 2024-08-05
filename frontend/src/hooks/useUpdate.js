import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

export const useUpdate = () => {
    const navigate=useNavigate()
  const[loading,setLoading]=useState(false)
  const {id}=useParams()
  const update=async({contact,branch,year,player1Name,player2Name,player3Name,player4Name,transaction})=>{
    setLoading(true);
    try{
        const res=await fetch(`/api/form/update/${id}`,{
            method:"POST",
            body: JSON.stringify({contact,player1Name,player2Name,player3Name,player4Name,year,branch,transaction}),
            headers: {
              "Content-type": "application/json"
            }
        })
        const data=await res.json();
        if(data.error){
            throw new Error(data.error)
        }
    toast.success("Updated Successfully")
    navigate("/getme");
    }catch(err){
       toast.error(`${err}`)
       console.log(err)
    }
  }
  return {loading,update}
}
