import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import './Layout.css'

export default function Layout() {
  return (
    <div className='layout'>
        <Navbar/>
        <Main/>
    </div>
  )
}
