"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '@/FireBaseConfig';

export default function page() {
  
  const db = getDatabase(app);
  let [myblog,setMyBlog]=useState([])


  useEffect(()=>{
    const blogRef = ref(db, 'blog/');
    onValue(blogRef,(data)=>{
      let allBlogs=data.val();
      console.log(allBlogs)
      let blogs=[]
      for(let key in allBlogs){
        blogs.push(allBlogs[key])
      }
      
      setMyBlog(blogs)
    })

  },[])
 

//   let obj={
//     1:{"heading":"ws",desc:"IIP"},
//     9:{"heading":"N",desc:"IIP"},
//     11:{"heading":"G",desc:"IIP"}
//   }


//  for(let k in obj){
//   console.log(obj[k])
//  }

  return (
    <div>
      <div>
        <h1 className='text-center py-5 font-bold text-3xl'>Our Blog</h1>

        <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>

          {myblog.length>=1 ?
          myblog.map((items,index)=>{
            return(
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" key={index}>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {items.heading}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {items.desciption}
              </p>
  
            </div>
            )
          })
           
          :
          <div>No Data Found</div>
          }
          
        </div>
      </div>
    </div>
  )
}
