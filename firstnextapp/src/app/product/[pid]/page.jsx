import { singleProduct } from "@/app/api-services/HomePageApi";
import SingleProductDetails from "@/app/common/SingleProductDetails";

export default async  function ProductDetails({params}) {

  let pid=params.pid


  let productdata=await singleProduct(pid);
  
  console.log(productdata)
  return (
    <div>
        <h1 className="text-center p-7 font-bold text-[30px]"> {productdata.title} </h1>
        <SingleProductDetails productdata={productdata}/>
    </div>
  )
}
