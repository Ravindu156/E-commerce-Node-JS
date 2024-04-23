import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const {product} =props;
   
    if (!product) {
        return <div>Product not found</div>;
      }
  return (
    <div className='productdisplay'>
         <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div> 
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
             <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.name}
                </div>
                <div className="productdiplay-right-price-new">
                ${product.price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, polllover shirt, close-fitting and white 
                a round neckline and short sleeves, worn as an undershirt or outer garment.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            {/* <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> */}
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : </span>Women , T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Modern , Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay