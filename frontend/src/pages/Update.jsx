import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import useRegistration from '../hooks/useRegistration';
import { useUpdate } from '../hooks/useUpdate';
import Nav from '../components/navbar/Nav';

export const Update = () => {
    const {loading,update}=useUpdate()
    const {id}=useParams();
    const [values,setValues]=useState({
        branch: "",email: "",eventName: "",player1Name: "",player2Name: "",player3Name: "",player4Name
: "",status: "",transaction: "",year: "",contact:"" })
    console.log(id)
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }
    console.log(values)
    const handleClick=(e)=>{
      e.preventDefault();
       update(values);
    }
    useEffect(()=>{
        const fetchData=async()=>{
     try{
       const res= await fetch(`/api/form/getupdate/${id}`)
       const data=await res.json();
       
       if(data.error){
        throw new Error(data.error)
       }
       setValues(data)
       console.log(data)
     }catch(err){
        console.log(err)
        toast.error(`${err}`)
     }
    };
fetchData();
},[])
  return (
    <>
    <Nav/>
    <h1 className='text-yellow-500 p-4'>UPDATE</h1>
    <div className="card bg-neutral text-neutral-content w-96 border-yellow-500 max-w-full mx-auto">
    <div className="card-body  text-left">
    
<label  className="input input-bordered input-warning flex text-slate-700 items-center gap-2">
  EventName
  <input value={values?.eventName} name="eventName" onChange={handleChange} disabled type="text" className="grow text-slate-500 " placeholder="Daisy" />
</label>
    <label className="input input-bordered input-warning text-slate-700 flex items-center gap-2">
  player1Name
  <input value={values?.player1Name} name="player1Name" onChange={handleChange} type="text" className="grow text-slate-500" placeholder="player1Name" />
</label>

<label className="input input-bordered input-warning flex text-slate-700 items-center gap-2">
  player2Name
  <input type="text" value={values?.player2Name} name="player2Name" onChange={handleChange} className="grow text-slate-500 " placeholder="Enter player 2 name" />
</label>

<label className="input input-bordered input-warning flex text-slate-700 items-center gap-2">
  player3Name
  <input type="text" value={values?.player3Name} name="player3Name" onChange={handleChange} className="grow text-slate-500" placeholder="Enter player 3 name" />
</label>

<label className="input input-bordered input-warning flex text-slate-700 items-center gap-2">
  player4Name
  <input type="text" value={values?.player4Name} name="player4Name" onChange={handleChange} className="grow  text-slate-500 " placeholder="Enter player 4 name" />
</label>

<label className="input input-bordered input-warning flex text-slate-700 items-center gap-2">
  Contact
  <input type="text" value={values?.contact} name="contact" onChange={handleChange} className="grow text-slate-500 " placeholder="Enter Contact " />
</label>

<label className="input input-bordered input-warning flex text-slate-700 items-center gap-2">
  Year
  <input type="text" value={values?.year} name="year" onChange={handleChange} className="grow text-slate-500 " placeholder="Enter Year" />
</label>

<label className="input input-bordered input-warning text-slate-700 flex items-center gap-2">
  branch
  <input value={values?.branch} type="text" name="branch" onChange={handleChange} className="growtext-slate-500  " placeholder="Enter Branch" />
</label>

<label className="input input-bordered input-warning text-slate-700 flex items-center gap-2">
  Transaction ID:
  <input value={values?.transaction} type="text" name="transaction" onChange={handleChange} className="grow text-slate-500" placeholder="Enter Transaction" />
</label>


      <div className="card-actions justify-end">
        
        <button onClick={handleClick} className="btn btn-warning">{loading?<span className="loading loading-infinity loading-lg"></span>:"Update"}</button>
      </div>
    </div>
  </div>
  </>
  )
}
