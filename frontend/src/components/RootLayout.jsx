import React from 'react'
import Nav from './navbar/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col w-full'>
      <Nav />
      <main className='flex-1 w-full'>
      <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
