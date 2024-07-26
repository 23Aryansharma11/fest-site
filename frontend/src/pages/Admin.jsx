import React, { useState } from 'react'
// import { useGetEvents } from '../hooks/useGetEvents.js'
// import { Admincard } from '../components/adminpage/Admincard.jsx'
import toast from 'react-hot-toast'
import {useGetEvents} from '../hooks/useGetEvents.js'
import { Admincard } from '../components/adminpage/Admincard.jsx'

export const Admin =() => {
    const {events,loading}=useGetEvents()
    console.log(events)
  return (
    <>
    <h1 className='text-yellow-500 pb-8'>Submissions</h1>
     <div className='d-grid grid-cols-3 gap-1 m-0 p-0 place-items-center w-100'>
    {
       
  events?.map((e)=>{
    return  <div className='w-96'> <Admincard value={e}
        /></div>
    })}
    </div>
    </>
  )
}

// export default Admin