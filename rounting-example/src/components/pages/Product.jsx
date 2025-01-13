import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
    let [product,setProduct]=useState([])

  

    let getProduct=()=>{
        axios.get(`https://dummyjson.com/products`) 
        .then((res)=>res.data)
        .then((finalRes)=>{
            setProduct(finalRes.products)
        })
    }

  useEffect(()=>{
    getProduct()
    
  },[])
 
    return (
        <div>
         
            <h1 className='text-center py-4 font-bold text-3xl'>Product</h1>

            <div className='max-w-[1320px] mx-auto grid grid-cols-[25%_auto] gap-6'>
                <div></div>


                <div>
                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        
                        { product.length>=1 ?

                            product.map((items,index)=>{
                                return(
                                    <ProductItems pdata={items}/>
                                )
                            })
                            
                        

                            :
                            "No Data Found"
                        }
                       

                    </div>
                </div>
            </div>
        </div>
    )
}


function ProductItems( {pdata} ) {
    return (
        <div className="group relative shadow-lg">
            <img src={pdata.thumbnail} alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div className="mt-4 flex justify-between p-3">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`/product-details/${pdata.id}`}>
                          
                           {pdata.title}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{pdata.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${pdata.price}</p>
            </div>
        </div>
    )
}