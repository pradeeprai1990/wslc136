import React, { useContext } from 'react'
import Header from '../common/Header'
import { CountContext } from '../../context/MainContext'

export default function Home() {
  let {count,setCount}=useContext(CountContext)
  
  return (
    <div>
   
      <h1 className='text-[40px] font-bold text-center py-[30px]'>Home Page</h1>

      <div className='max-w-[1320px] mx-auto'>
            <button onClick={()=>setCount(count+1)}>Change Count</button>
            <p className='text-[18px] mb-4 leading-9' >Learning Digital Marketing from WsCube Tech was an outstanding experience. The team is diligent in every aspect, from class schedules, to fee arrangements, and providing ample support in regards to education. The trainers are extremely supportive, making the whole experience truly enjoyable.</p>
            <p className='text-[18px] mb-4 leading-9' >Learning Digital Marketing from WsCube Tech was an outstanding experience. The team is diligent in every aspect, from class schedules, to fee arrangements, and providing ample support in regards to education. The trainers are extremely supportive, making the whole experience truly enjoyable.</p>
            <p className='text-[18px] mb-4 leading-9' >Learning Digital Marketing from WsCube Tech was an outstanding experience. The team is diligent in every aspect, from class schedules, to fee arrangements, and providing ample support in regards to education. The trainers are extremely supportive, making the whole experience truly enjoyable.</p>
            <p className='text-[18px] mb-4 leading-9' >Learning Digital Marketing from WsCube Tech was an outstanding experience. The team is diligent in every aspect, from class schedules, to fee arrangements, and providing ample support in regards to education. The trainers are extremely supportive, making the whole experience truly enjoyable.</p>
            <p className='text-[18px] mb-4 leading-9' >Learning Digital Marketing from WsCube Tech was an outstanding experience. The team is diligent in every aspect, from class schedules, to fee arrangements, and providing ample support in regards to education. The trainers are extremely supportive, making the whole experience truly enjoyable.</p>
            <p className='text-[18px] mb-4 leading-9' >Learning Digital Marketing from WsCube Tech was an outstanding experience. The team is diligent in every aspect, from class schedules, to fee arrangements, and providing ample support in regards to education. The trainers are extremely supportive, making the whole experience truly enjoyable.</p>
            <p className='text-[18px] mb-4 leading-9' >Learning Digital Marketing from WsCube Tech was an outstanding experience. The team is diligent in every aspect, from class schedules, to fee arrangements, and providing ample support in regards to education. The trainers are extremely supportive, making the whole experience truly enjoyable.</p>
            <p className='text-[18px] mb-4 leading-9' >Learning Digital Marketing from WsCube Tech was an outstanding experience. The team is diligent in every aspect, from class schedules, to fee arrangements, and providing ample support in regards to education. The trainers are extremely supportive, making the whole experience truly enjoyable.</p>
      </div>
    </div>
  )
}
