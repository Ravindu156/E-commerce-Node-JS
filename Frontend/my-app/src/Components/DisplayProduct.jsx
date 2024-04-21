import React,{ useState } from 'react';
import axios from 'axios';
import Item from './Item/Item';

const  DisplayProduct = () => {

  const [items,setItems] = useState([]);

  const handleGetProducts = () =>{

      axios.get("http://localhost:5000/api/v1/products")
      .then(res =>{
          setItems(res.data);
          console.log(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  }


  return (
    <div>
      <button onClick={handleGetProducts}> Get Products </button>
      <div>
          {items.map((item, index) => (
            <Item key={index} name={item.name} new_price={item.price} old_price={item.description} />
          ))}
        </div>
    </div>
  )
}

export default DisplayProduct;