

import { getProduct } from "./api-services/HomePageApi";

import ProductItems from "./common/ProductItems";
import HomeProductCompontents from "./HomeProductCompontents";

export default async function Home() {
  

  let myProduct = await getProduct();
  
  return (
       <HomeProductCompontents myProduct={myProduct} />
  );
}
