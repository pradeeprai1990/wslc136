let getProduct=async ()=>{
    let response = await fetch('https://dummyjson.com/products');
    let data=await response.json();
    return data.products;
  
  }


  let singleProduct=async (id)=>{
    let response = await fetch(`https://dummyjson.com/products/${id}`);
    let data=await response.json();
    return data;
  
  }
export { getProduct,singleProduct };