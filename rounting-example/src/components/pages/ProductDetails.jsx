import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    let {pid}=useParams();  //{id:4}
    let [pDetails,setPDetails]=useState(null)
    
    useEffect(()=>{
       axios.get(`https://dummyjson.com/products/${pid}`)
       .then((res)=>{
        setPDetails(res.data)
       })
    },[pid])
  return (
    <div>
        {
            pDetails!==null &&
             <div className='max-w-[1320px] mx-auto grid grid-cols-2 py-4'>
                    <div className='shadow-lg'>
                        <img src={pDetails.thumbnail}  alt="" />
                        <div className='flex'>
                            {pDetails.images.map((src)=><img src={src} width={"100"} alt="" />)}
                            
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold text-center text-[30px]'>{pDetails.title}</h3>
                        <p className='mt-4'>{pDetails.description}</p>
                    </div>
             </div>
        }
    </div>
  )
}
