import React, { useState } from 'react'
import useRegistration from '../hooks/useRegistration.js'
import Nav from '../components/navbar/Nav'
import { useAuthContext } from '../context/authcontext'
import { useParams } from 'react-router-dom'
// import { useRegistration } from '../hooks/useRegistration.js'
// import Input from '../components/input/Input.jsx'
import QR from "./qrcode.jpg"
export const Form = () => {
  const handleModal=()=>{
    setQr(!qr)
  }
  const [qr,setQr]=useState(false)
  const {registration,loading}=useRegistration()
  const {name}=useParams()
  console.log(name)
  const {authUser}=useAuthContext()
  const [values,setValues]=useState({email:authUser.email,player2Name:"",player3Name:"",player4Name:"",eventName:name})
  const handleChange=(e)=>{
        setValues((prev)=>{return {...prev,[e.target.name]:e.target.value}})
  }
  
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
    <>
    <Nav/>
    <div className='w-full '>
    <h1 className='text-yellow-500 py-3 orbitron xs:text-4xl'>Registration Form</h1>
    <form onSubmit={(e)=>handleSubmit(e)}>
    {qr?
    <div className=' w-full d-flex justify-center'>
  <div className='fixed h-max top-5 p-4 bg-white z-30 mx-auto  max-w-96'>
   <div className='mx-auto'>
    <img className="h-72 object-cover w-64 mx-auto pb-7" src={QR}></img>
    
   </div>
 
 <p className='text-error'><b>Note:</b> Everyone is required to pay fees according to their event.And after payment it is required to fill transaction id in the form. Please keep in mind that Tech Team will only accept application after verification of transaction id. </p>
 <button onClick={handleModal} className='absolute top-0 right-0 text-white'>X</button>
  </div></div>:null
  }
     <label className="form-control p-12 mx-auto backdrop:blur-xl max-w-lg min-w-64 bg-transparent border-yellow-400 border-l cabin">
    
     <div className='relative' >
    
  <div className="label w-full">
    <span className="label-text text-white">Event Name *</span>
   
  </div>
  <input disabled onChange={(e)=>{handleChange(e)}} value={name} name='eventName' required="true" type="text" placeholder="Enter event name" className="input input-bordered bg-black text-white select-warning border-white  w-full " />
  <div className="label">
    <span className="label-text text-white">Email *</span>
   
  </div>
  <input type="text" required="true" disabled value={authUser.email} onChange={(e)=>{handleChange(e)}} name='email'  placeholder="Enter Your email" className="input input-bordered bg-black text-white select-warning border-white  w-full " />
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
  <input  type="text" onChange={(e)=>{handleChange(e)}} name='player2Name'  placeholder="Enter player 2 name (if applicable)" className="input input-bordered bg-black text-white select-warning border-white  w-full " />
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
  
  <a onClick={handleModal} className='text-error ml-auto float-right pt-6'>Generate QR Code</a>
  
  <div className="label">
    <span className="label-text text-white">Transaction ID *</span>
   
  </div>
  <input type="text" required placeholder="Enter Transaction id" onChange={(e)=>{handleChange(e)}} name='transaction'  className="input input-bordered select-warning border-white  bg-black text-white w-full " />
</div>
<button className="btn btn-warning   mt-6">{loading?<span className="loading loading-infinity loading-lg"></span>:"Submit"}</button>
</label>
</form>
 


    </div>
    </>
  )
}

