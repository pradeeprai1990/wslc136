"use client";
import { useState } from "react";
import ProductItems from "./common/ProductItems";
import EnquiryModel from "./common/EnquiryModel";

;

export default  function HomeProductCompontents({myProduct}) {

    let [modelStatus,setModalStatus]=useState(false);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="text-center font-bold text-[50px]">Our Product</div>

            <EnquiryModel modelStatus={modelStatus} setModalStatus={setModalStatus} />

            <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-4">
                {myProduct.map((product, index) => (
                    <ProductItems product={product} key={index} setModalStatus={setModalStatus} />
                ))}

            </div>
        </div>
    )
}
