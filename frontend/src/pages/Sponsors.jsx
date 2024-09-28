import React from 'react'
import { SponsorCard } from '../components/sponsors/SponsorCard'
import Nav from '../components/navbar/Nav'

export const Sponsors = () => {
  return (
    <>
    <Nav/>
    <h1 className='text-yellow-500'>Sponsors</h1>
    < SponsorCard/>

    <div className="border-2 border-yellow-500 rounded-lg p-4 w-11/12 mx-auto">
    <h3 className='text-2xl text-yellow-500 mb-4'>
      For Sponshorship Contact.
    </h3>
    <div className='flex justify-around gap-8  text-left '>
      <div> 
      <h3 className='text-yellow-500'>Sujal Verdhan</h3>
      <p>8626872550</p>
      <p>sujalverdhen1234@gmail.com</p>
      </div>

      <div> <h3 className='text-yellow-500'>Sushant Sharma</h3>
      <p>8626872550</p>
      <p>sujalverdhen1234@gmail.com</p></div>


      <div> <h3 className='text-yellow-500'>Pranjal Sharma</h3>
      <p>8626872550</p>
      <p>sujalverdhen1234@gmail.com</p></div>
    </div>
    </div>
    </>
  )
}
