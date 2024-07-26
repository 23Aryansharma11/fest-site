import React from 'react'
import { useStatus } from '../../hooks/useStatus.js'

export const Admincard = ({value}) => {
    const {loading,status}=useStatus()
    const id=value?._id
    const handleClick=async(value)=>{
             await status(value,id)
    }
    console.log(value.branch)
    
  return (
    <div className="card bg-neutral text-neutral-content w-96 border-yellow-500">
  <div className="card-body  text-left">
    <h2 className="card-title">{value.eventName}</h2>
    <p >{value.player1Name} ,{value.player2Name} ,{value.player3Name} ,{value.player4Name}</p>
    <p>Branch: {value.branch}<br></br> Year: {value.year} </p>
    <p>Contact: {value.contact}<br/> Email: {value.email}`</p>
    <p>Status: {value.status}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleClick("verify")} className="btn btn-success">Verify</button>
      <button onClick={()=>handleClick("reject")} className="btn btn-error">Reject</button>
    </div>
  </div>
</div>
  )
}
