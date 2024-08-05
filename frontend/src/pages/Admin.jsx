import React, { useState } from 'react'
// import { useGetEvents } from '../hooks/useGetEvents.js'
// import { Admincard } from '../components/adminpage/Admincard.jsx'
import toast from 'react-hot-toast'
import {useGetEvents} from '../hooks/useGetEvents.js'
import { Admincard } from '../components/adminpage/Admincard.jsx'
import Nav from '../components/navbar/Nav.jsx'

export const Admin =() => {
    const {events,loading}=useGetEvents()
    console.log(events)
  return (
    <>
    <Nav/>
    <h1 className='text-yellow-500 pb-8 text-4xl'>Submissions</h1>
     <div className='d-grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1  gap-1 m-0 p-0 place-items-center w-full'>
    {
       
  events?.map((e)=>{
    return  <div className='max-w-screen'> <Admincard value={e}
        /></div>
    })}
    </div>
    </>
  )
}

// export default Admin