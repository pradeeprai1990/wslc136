import React, { createContext, useState } from 'react'
export let CountContext=createContext()


export default function MainContext({children}) {
   
  let [count,setCount]=useState(1) 
  

  let obj={
    count,setCount
  }


  return (
       <CountContext.Provider value={obj}>
      
        {children}
        </CountContext.Provider> 
  )
}
