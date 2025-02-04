"use client"
import React from 'react'
import { getDatabase, ref, set } from "firebase/database";



import { app } from '@/FireBaseConfig';
import { toast, ToastContainer } from 'react-toastify';
import { redirect } from 'next/navigation';

export default function Blog() {

  
    let db=getDatabase(app)

    let saveBlog=(event)=>{

        let obj={
            heading:event.target.heading.value,
            desciption:event.target.desciption.value,
        }

        let ID=Date.now();

      

        set(ref(db, 'blog/' + ID),obj );
        toast.success("Data Save")
        event.target.reset()
        event.preventDefault()
        setTimeout(()=>{
            redirect("/")
        },2000)
       
       
    
       

    }

    return (
        <div className='max-w-[1320px] mx-auto'>
            <ToastContainer/>
            <div className="lg:mx-auto rounded-lg p-4 px-2  my-8" >
                
                <form onSubmit={saveBlog}><label htmlFor="heading" className="block my-4 md:text-lg text-sm font-medium text-gray-900">Heading</label>


                <input type="text" name="heading" rows="4" className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." fdprocessedid="f83ds" />


                <label htmlFor="desciption" className="block my-4 text-sm md:text-lg font-medium text-gray-900">Desciption</label><textarea name="desciption" className="block min-h-[300px] mt-4 p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea><div className="text-center"><button type="submit" className="transform  w-[40%] rounded-md mt-10  bg-[black] text-white py-2 font-bold duration-300 hover:bg-[#4B0082] " fdprocessedid="d9tkrk">Add Blog</button></div></form>
                
                </div>
        </div>
    )
}
