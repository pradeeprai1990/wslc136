import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import "./Faq.css"
import { questions } from './Data/Question'
export default function Faq() {
  let [currentId,setCurrentId]=useState(0)  
  return (
    <div className='faqOuter'>
        <h1>FAQ</h1>
       
        {questions.map((items,index)=>{
            return(
                <div className='FaqItems'>
                    <h3 style={{position:"relative"}} onClick={()=>setCurrentId( currentId==items.id ? 0 :items.id )}>{items.question}

                    { currentId==items.id
                        ?
                        <FaMinusCircle style={{position:"absolute",right:"10px"}} />


                        :
                        <FaPlusCircle style={{position:"absolute",right:"10px"}} />

                    
                    }

                    <FaPlusCircle style={{position:"absolute",right:"10px"}} />


                    </h3>
                    <p className={`ans ${items.id==currentId ? 'showAns' : '' }   `}>
                        {items.answer}
                    </p>
                </div>
            )
        })}
        


    </div>
  )
}
