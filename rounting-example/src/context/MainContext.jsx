import React, { createContext, useEffect, useState } from 'react'
export let CountContext=createContext()


export default function MainContext({children}) {
   
  let [count,setCount]=useState(1) 
  let [cart,setCart]=useState(JSON.parse(localStorage.getItem('CART')) ?? []  )  //JSON to array
  

  let obj={
    count,setCount,cart,setCart
  }

  useEffect(()=>{
      localStorage.setItem("CART",JSON.stringify(cart)) //Array to JSON
  },[cart])

  return (
       <CountContext.Provider value={obj}>
      
        {children}
        </CountContext.Provider> 
  )
}
