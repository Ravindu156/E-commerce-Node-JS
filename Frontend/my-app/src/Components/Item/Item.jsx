import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className='item' style={{background:"#C5C5C5"}}>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
               ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item