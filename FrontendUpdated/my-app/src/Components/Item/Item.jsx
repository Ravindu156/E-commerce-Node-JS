import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item">
       <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link> 
      <p>{props.name}</p>
      <div className="item-prices">
      <Link to={`/product/${props.id}`}><div className="item-price-new">{props.name}</div></Link>
        <div className="item-price-new">${props.price}</div>
      </div>
    </div>
  );
}

export default Item;
