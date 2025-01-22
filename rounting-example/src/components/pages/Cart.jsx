import React, { useContext } from 'react'
import { CountContext } from '../../context/MainContext'

export default function Cart() {
    let { cart, setCart } = useContext(CountContext)
    return (
        <div>
            <h1 className='text-center py-4 font-bold text-3xl'>Cart</h1>

            <div className='max-w-[1320px] mx-auto grid grid-cols-[80%_auto] gap-5'>
                <div>


                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Sr No
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Product Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Qty
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Total Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.length >= 1 ?
                                    cart.map((items, index) => {
                                        return (
                                            <CartRow items={items} index={index}/>
                                        )
                                    })

                                    :
                                    <tr>
                                        <td colSpan={7}>No Product Found in Cart</td>
                                    </tr>

                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    )
}


function CartRow({items,index}){
    return(
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index+1}
                                                </th>
                                                <td class="px-6 py-4">
                                                   {items.title}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <img src={items.image} width={100}/>
                                                </td>
                                                <td class="px-6 py-4">
                                                {items.price}
                                                </td>
                                                <td class="px-6 py-4">
                                                {items.qty}
                                                </td>
                                                <td class="px-6 py-4">
                                                {items.qty*items.price}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <button>Delete</button>
                                                </td>
                                            </tr>
    )
}