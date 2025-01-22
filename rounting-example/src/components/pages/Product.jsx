import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CountContext } from '../../context/MainContext'

export default function Product() {
    let [product, setProduct] = useState([])
    let [category, setCategory] = useState([])
    let [catSlug, setSlug] = useState('')

    let [loaderStatus, setLoaderStatus] = useState(false)


    let getProduct = () => {
        setLoaderStatus(true)
        let apiUrl
        if (catSlug === '') {
            apiUrl = `https://dummyjson.com/products`
        }
        else {
            apiUrl = `https://dummyjson.com/products/category/${catSlug}`
        }
        axios.get(apiUrl)
            .then((res) => res.data)
            .then((finalRes) => {
                setProduct(finalRes.products)
                setLoaderStatus(false)
            })
    }

    let getCatgeory = () => {
        axios.get(`https://dummyjson.com/products/categories`)
            .then((res) => res.data)
            .then((finalRes) => {
                setCategory(finalRes)
            })
    }
    useEffect(() => {
        getProduct()


    }, [catSlug])

    useEffect(() => {
        getCatgeory()
    }, [])

    return (
        <div>

            <h1 className='text-center py-4 font-bold text-3xl'>Product</h1>

            <div className='max-w-[1320px] mx-auto grid grid-cols-[25%_auto] gap-6'>
                <div className='border-2'>
                    <h3 className='font-bold text-center p-3 text-2xl'>Category List</h3>
                    <ul>
                        {category.length >= 1
                            ?
                            category.map((catItems, index) => {
                                return (
                                    <li onClick={() => setSlug(catItems.slug)}

                                        className={`p-3 font-bold cursor-pointer ${catItems.slug == catSlug ? 'bg-yellow-500' : ''}  `}>

                                        {catItems.name}


                                    </li>
                                )
                            })
                            :
                            ''
                        }

                    </ul>

                </div>


                <div className='relative'>
                    {loaderStatus ?
                        <div class="grid absolute z-50 top-9 min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                            <svg class="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                                width="100" height="100">
                                <path
                                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                    stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                    stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
                                </path>
                            </svg>
                        </div>
                        :
                        ''

                    }

                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                        {product.length >= 1 ?

                            product.map((items, index) => {
                                return (
                                    <ProductItems pdata={items} />
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


function ProductItems({ pdata }) {
    let {cart,setCart}=useContext(CountContext)
    

    let addtoCart=()=>{
            let cartObj={
                title:pdata.title,
                image:pdata.thumbnail,
                price:pdata.price,
                id:pdata.id,
                qty:1
            }
        let oldData=[...cart,cartObj]    
        setCart(oldData)
    }
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
                    <button onClick={addtoCart} className='p-2 bg-red-500 text-white'>Add to Cart</button>
                </div>
                <p className="text-sm font-medium text-gray-900">${pdata.price}</p>
            </div>
        </div>
    )
}