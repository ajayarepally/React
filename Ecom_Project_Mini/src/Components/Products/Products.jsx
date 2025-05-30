import React from 'react'
import { products } from './ProductData'
import Product from './Product'
const Products = () => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:"10px",padding:"20px"}}>
       {
        products.products.map((p,index)=>{
            return (
                <>
                    <Product singleP={p}/>
                </>
            )
        })
       }
    </div>
  )
}

export default Products