import React from 'react';
import { useStateValue } from './StateProvider';

import './Product.css';
function Product({id,title,image,price,rating}) {
  const [{basket},dispatch] =  useStateValue();
    console.log("this is basket",basket);
  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,

      },
    });

  };

  return (
    <div className='product'>
    <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating).fill().map(()=>(<p>⭐</p>))
          }
                  </div>
    </div>
    <img src={image} alt="book_image"/> 
    <button onClick={addToBasket}  className="addto__Basket">Add to Basket</button>


</div>

  )
}

export default Product