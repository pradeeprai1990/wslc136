import React from 'react'
import EnquiryModel from './EnquiryModel'
import Link from 'next/link'

export default function ProductItems({product,setModalStatus}) {
  return (
    <div>
       
       <div className="flex flex-col items-center justify-center p-4 space-y-4 border border-gray-200 rounded-lg">
           <Link href={`/product/${product.id}`}><img src={product.thumbnail} width={200} height={200} />
            <div className="text-xl font-bold">{product.title}</div>
            <div className="text-lg text-gray-500">{product.price}</div></Link> 
            <button onClick={()=>setModalStatus(true)}>Save</button>
          </div>
    </div>
  )
}
