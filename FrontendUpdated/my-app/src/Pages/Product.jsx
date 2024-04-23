import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';

import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';



const Product = () => {
  const {all_product} = useContext(ShopContext);
  

  const {productId} = useParams();
  const product = all_product.find((e)=>e.id ===productId)
 
  if(!product){
    return <div>No</div>
  }

  
  return (
    <div>
        
        <ProductDisplay product={product}/>
        
    </div>
  )
}

export default Product