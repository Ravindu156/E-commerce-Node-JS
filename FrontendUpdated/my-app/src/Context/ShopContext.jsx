import React, { createContext, useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
//import all_product from "../Components/Assests/all_product.js";


export const ShopContext = createContext(null);


const ShopContextProvider = (props)=>{

    const [all_product,setAll_Product] = useState([]);
    
  
    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/products/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))
    },[])
      
    if (!all_product) {
        return <div>Product not found</div>;
      }

    const contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;