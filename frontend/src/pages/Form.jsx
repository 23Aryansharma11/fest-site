import React, { useState } from 'react'
import useRegistration from '../hooks/useRegistration'
// import { useRegistration } from '../hooks/useRegistration.js'
// import Input from '../components/input/Input.jsx'

export const Form = () => {
  const [values,setValues]=useState({})
  const handleChange=(e)=>{
        setValues((prev)=>{return {...prev,[e.target.name]:e.target.value}})
  }
  const {registration}=useRegistration()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await registration(values);


    }catch(err){
      console.log(err)
    }
  }
  console.log(values)
  return (
    <div className='w-full '>
    <form onSubmit={(e)=>handleSubmit(e)}>
     <label className="form-control p-12 mx-auto backdrop:blur-xl max-w-lg min-w-64 bg-transparent border-yellow-400 border-l">
     <div >
  <div className="label w-full">
    <span className="label-text text-white">Event Name *</span>
   
  </div>
  <input onChange={(e)=>{handleChange(e)}} name='eventName' required="true" type="text" placeholder="Enter event name" className="input input-bordered bg-black text-white select-warning border-white  w-full " />
  <div className="label">
    <span className="label-text text-white">Email *</span>
   
  </div>
  <input type="text" required="true" onChange={(e)=>{handleChange(e)}} name='email'  placeholder="Enter Your email" className="input input-bordered bg-black text-white select-warning border-white  w-full " />
  <div className="label">
    <span required= "true"  className="label-text text-white">Contact No. *</span>
   
  </div>
  <input type="tel" required="true" onChange={(e)=>{handleChange(e)}} name='contact'  placeholder="Enter Contact No" className="input input-bordered bg-black text-white select-warning border-white  w-full " />
  <div className="label">
    <span className="label-text text-white">Player 1 Name * </span>
   
  </div>
  <input type="text" required="true" placeholder="Enter player 1 name " onChange={(e)=>{handleChange(e)}} name='player1Name'  className="input input-bordered bg-black text-white select-warning border-white  w-full " />
  <div className="label">
    <span className="label-text text-white">Player 2 Name (if applicable)</span>
   
  </div>
  <input required="true" type="text" onChange={(e)=>{handleChange(e)}} name='player2Name'  placeholder="Enter player 2 name (if applicable)" className="input input-bordered bg-black text-white select-warning border-white  w-full " />
  <div className="label">
    <span className="label-text text-white">Player 3 Name (if applicable)</span>
   
  </div>
  <input type="text" placeholder="Enter player 3 name (if applicable)" onChange={(e)=>{handleChange(e)}} name='player3Name'  className="input input-bordered bg-black text-white select-warning border-white  w-full " />
  <div className="label">
    <span className="label-text text-white">Player 4 Name (if applicable)</span>
   
  </div>
  <input type="text" placeholder="Enter player 4 name (if applicable)" onChange={(e)=>{handleChange(e)}} name='player4Name'  className="input input-bordered bg-black text-white select-warning border-white  w-full " />
  <div className="label">
    <span className="label-text text-white">Year *</span>
   
  </div>
  <input type="text" required="true" placeholder="Enter Year" onChange={(e)=>{handleChange(e)}} name='year'  className="input input-bordered bg-black text-white select-warning border-white  w-full " />
  <div className="label">
    <span className="label-text text-white">Branch *</span>
   
  </div>
  <input type="text" required placeholder="Enter Branch" onChange={(e)=>{handleChange(e)}} name='branch' className="input input-bordered select-warning border-white  bg-black text-white w-full " />
  <div className="label">
    <span className="label-text text-white">Transaction ID *</span>
   
  </div>
  <input type="text" required placeholder="Enter Transaction id" onChange={(e)=>{handleChange(e)}} name='transaction'  className="input input-bordered select-warning border-white  bg-black text-white w-full " />
</div>
<button className="btn btn-warning   mt-6">Submit</button>
</label>
</form>
 


    </div>
  )
}

