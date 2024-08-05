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
    <div className="card bg-neutral text-neutral-content max-w-full border-yellow-500">
  <div className="card-body  text-left">
    <h2 className="card-title text-yellow-500">{value.eventName}</h2>
    <p >{value.player1Name} ,{value.player2Name} ,{value.player3Name} ,{value.player4Name}</p>
    <p><span className='text-yellow-500'>Branch:</span> {value.branch}<br></br><span className='text-yellow-500'> Year: </span>{value.year} </p>
    <p><span className='text-yellow-500'>Contact:</span> {value.contact}<br/><span className='text-yellow-500'> Email:</span> {value.email}`</p>
    <p><span className='text-yellow-500'>Transaction ID:</span> {value.transaction}</p>
    <p><span className='text-yellow-500'>Status:</span> {value.status}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleClick("verify")} className="btn btn-success">Verify</button>
      <button onClick={()=>handleClick("reject")} className="btn btn-error">Reject</button>
    </div>
  </div>
</div>
  )
}
