"use client";
import React, { useContext } from 'react'
import { ShopContext } from './ShopContext';

interface ItemProp{
    cartItem : {
      id : number,
      name : string,
      price : number
    }
}


const AddtoCart = ({cartItem}:ItemProp) => {
 // console.log("-----------------------");
 // console.log(cartItem);
    const context = useContext(ShopContext);
  return (
    <div className="card-actions justify-end mt-5">
                        <button className="btn btn-primary" onClick={() => context?.addToCart(cartItem)}>Buy Now</button>
    </div>
  )
}

export default AddtoCart