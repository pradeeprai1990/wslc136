import React from 'react'

export default function SingleProductDetails({productdata}) {
  return (
    <div>
        <div className='max-w-[1320px] mx-auto grid grid-cols-2 gap-4'>
            <div>
                <img src={productdata.thumbnail}/>
            </div>
            <div></div>
        </div>
    </div>
  )
}
