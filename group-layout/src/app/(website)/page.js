"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '@/FireBaseConfig';
import { Accordion } from "flowbite-react";
import { Carousel } from "flowbite-react";
export default function page() {

  const db = getDatabase(app);
  let [myblog, setMyBlog] = useState([])


  useEffect(() => {
    const blogRef = ref(db, 'blog/');
    onValue(blogRef, (data) => {
      let allBlogs = data.val();
      console.log(allBlogs)
      let blogs = []
      for (let key in allBlogs) {
        blogs.push(allBlogs[key])
      }

      setMyBlog(blogs)
    })

  }, [])


  //   let obj={
  //     1:{"heading":"ws",desc:"IIP"},
  //     9:{"heading":"N",desc:"IIP"},
  //     11:{"heading":"G",desc:"IIP"}
  //   }


  //  for(let k in obj){
  //   console.log(obj[k])
  //  }

  let blogDataNew = [
    {
      heading: "ws",
      desciption: "ws"
    }
  ]
  return (
    <div>
      
      <div className='w-full h-[500px]'>
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
      </div>

      <div>
        <h1 className='text-center py-5 font-bold text-3xl'>Our Blog</h1>

        <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>

          {myblog.length >= 1 ?
            myblog.map((items, index) => {
              return (
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

      <div className='max-w-[1320px] mx-auto my-10'>


        <Accordion>


          {

            myblog.map((items, index) =>
             
                <Accordion.Panel key={index} >
                  <Accordion.Title> {items.heading}  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {items.desciption}
                    </p>

                  </Accordion.Content>
                </Accordion.Panel>
              
           )


          }


        </Accordion>

      </div>
    </div>
  )
}
