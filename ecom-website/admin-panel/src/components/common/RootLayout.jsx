import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='grid grid-cols-[20%_auto] gap-5'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Header/>
            <Outlet/>
        </div>
    </div>
  )
}
