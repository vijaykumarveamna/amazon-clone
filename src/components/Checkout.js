import React from 'react';
import './Checkout.css';
import CheckOutProduct from './CheckOutProduct';
import Subtotal from './Subtotal';
import{useStateValue} from './StateProvider';



function Checkout() {
  const [{basket},dispatch] =  useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" alt='add' className='checkout__add'></img>
            <div >
                <h1 className="checkout__title">Your Shopping List</h1>
                    {/* Basket item */}
                    {basket.map(item=>(

                    <CheckOutProduct
                     id={item.id}
                     price={item.price}
                     rating={item.rating}
                     image={item.image}
                     title={item.title}

                    />))}
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>

    </div>
  )
}

export default Checkout