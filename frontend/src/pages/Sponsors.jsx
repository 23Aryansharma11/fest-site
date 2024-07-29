import React from 'react'
import { SponsorCard } from '../components/sponsors/SponsorCard'
import Nav from '../components/navbar/Nav'

export const Sponsors = () => {
  return (
    <>
    <Nav/>
    <h1 className='text-yellow-500'>Sponsors</h1>
    < SponsorCard/>
    </>
  )
}
