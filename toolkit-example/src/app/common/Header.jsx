import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
    //ToolKit data Display
    let myData=useSelector((myStore)=>myStore.counterReducer.count)

  return (
    <div>
      <h1 className='text-3xl text-center py-5 font-bold'>Counter {myData}</h1>
    </div>
  )
}
