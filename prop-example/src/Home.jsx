import React, { useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export default function Home() {

  let [count,setCount]=useState(1)
  let [passwordStatus,setPasswordStatus]=useState(false)


  let cname="wscubetech"; 
  let phone=88888888


  let obj={
    cname:"wscubetech",
    phone:88888888,
    email:"ws@gmail.com"
  }

  let user=["pradeep","rahul","rajesh","rajat"]

  let changeCount=()=>{

    setCount(count+1)
      
  }

  let addData=(num1,num2)=>{
      console.log(num1+num2)
  }

  let welcomeFunction=()=>{
    alert("Welcome")
  }




let showHidepassword=()=>{
  setPasswordStatus(!passwordStatus)
}


  return (
    <div>
       <div className='text-center'>

            <input type={passwordStatus ? "text":"password" }  className='border-2'/>
             <button onClick={showHidepassword}>
              {passwordStatus ? "hide" : "show"  }
            </button>


            <h1 className='text-3xl font-bold'>{count}</h1>

             <button onClick={changeCount} className='bg-red-500 p-3 mr-4 text-white'>  Change Count</button>

            
        </div>
        <Header  companyName={cname}  email={"pradeep.ws@gmail.com"} phone={phone} />
             <h1 className='text-3xl font-bold text-center py-[40px]'>Home</h1>

            <div className='grid grid-cols-4 max-w-[1320px] mx-auto gap-5'>
                <ProductItems image="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" name="iphone16"/>

                <ProductItems image="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png" name="iphone14"/>
                
                <ProductItems image="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" name="iphone16"/>

                <ProductItems image="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png" name="iphone14"/>
                
             </div>



             <Footer footerDetails={obj} userList={user}/>

        <Footer footerDetails={obj} userList={user}>
                <h3>Welcome to Middle part of Footer Comp.</h3>
        </Footer>
    </div>
  )
}


function ProductItems({image,name}) {
    return(
        <div className='shadow-lg'>
            <img src={image} alt="" />   
            <h3 className='font-bold text-center py-3'>{name}</h3> 
     </div>   
    
    )
}