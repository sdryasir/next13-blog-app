import { use } from "react";
const getProduct = async (id:number) => {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`);
    
    return product.json()
}

function Page({params}:any):JSX.Element {
    const {id} = params;
    
    const product = use(getProduct(id));   
    
  return (
    <div className="container mx-auto py-6">
        <h1 className="text-4xl">{product.title}</h1>
        <p>{product.description}</p>
    </div>
  )
}

export default Page