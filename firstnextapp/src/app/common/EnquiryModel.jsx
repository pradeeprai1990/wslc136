"use client";
import React, { useState } from 'react'

export default function EnquiryModel({modelStatus,setModalStatus}) {
    
    return (
       <>
        {
            modelStatus &&

        <div className='w-[350px] bg-white p-4 rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='text-center text-[20px] font-bold'>Enquiry Form
                <span onClick={()=>setModalStatus(false)}>&times;</span>
            </div>
            <form className='flex flex-col space-y-4'>
                <input type='text' placeholder='Enter Name' className='border border-gray-200 p-2 rounded-lg' />
                <input type='text' placeholder='Enter Email' className='border border-gray-200 p-2 rounded-lg' />
                <input type='text' placeholder='Enter Phone' className='border border-gray-200 p-2 rounded-lg' />
                <textarea placeholder='Enter Message' className='border border-gray-200 p-2 rounded-lg'></textarea>
                <button className='bg-blue-500 text-white p-2 rounded-lg'>Submit</button>
            </form>
        </div>
           }
           </> 
           
        
    )
}
