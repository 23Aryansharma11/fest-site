import React from 'react'
import { Link } from 'react-router-dom'

export const AppliedCard = ({value}) => {
  return (
    <div className="card bg-neutral text-neutral-content  border-yellow-500 max-w-full">
    <div className="card-body max-w-screen text-left">
      <h2 className="card-title">{value.eventName}</h2>
      <p >{value.player1Name} ,{value.player2Name} ,{value.player3Name} ,{value.player4Name}</p>
      <p>Branch: {value.branch}<br></br> Year: {value.year} </p>
      <p>Contact: {value.contact}<br/> Email: {value.email}`</p>
      <p>Status: {value.status}</p>
      <p>Transaction ID: {value.transaction}</p>
      <div className="card-actions justify-end">
        
        <Link to={`/update/${value._id}`} className="btn btn-warning btn-outline">Update</Link>
      </div>
    </div>
  </div>
  )
}
