import React from 'react'
import { useGetMe } from '../hooks/usGetMe'
import { AppliedCard } from '../components/Appliedcard/AppliedCard'
import Nav from '../components/navbar/Nav'

export const Applied = () => {
    const {applied,loading} =useGetMe()
    console.log(applied)
  return (
    <>
    <Nav/>
    <h1 className='p-6 text-yellow-500'>Applied</h1>
    <div className='d-grid lg:grid-cols-3 gap-1 xs:grid-cols-1 md:grid-cols-2 place-items-center'>
    {applied && applied.map((e)=>{
        return <AppliedCard key={e._id} value={e}/>
    })}</div></>
  )
}
