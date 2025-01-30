"use client";
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './ShopContext';
import { IoIosCheckmarkCircle } from "react-icons/io";


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

 const handleClick = () => { 

  context?.addToCart(cartItem)

 }

 const [buttonText , setButtonText] = useState<React.ReactNode>("Buy Now")

 useEffect(() =>{
    if(context?.cartItems.some((item) => item.id === cartItem.id)){
      document.getElementById('button-' + cartItem.id)?.classList.remove('btn-primary')
      document.getElementById('button-' + cartItem.id)?.classList.add('btn-success')
      document.getElementById('button-' + cartItem.id)?.classList.add('text-white')
      setButtonText(<div className='flex flex-row gap-1'>Bought <IoIosCheckmarkCircle /></div>)
    }else{
      document.getElementById('button-' + cartItem.id)?.classList.remove('text-white')
      document.getElementById('button-' + cartItem.id)?.classList.remove('btn-success')
      document.getElementById('button-' + cartItem.id)?.classList.add('btn-primary')
      setButtonText(<div>Buy It</div>)
      
    }

 },[context?.cartItems])
  return (
    <div  className="card-actions justify-end mt-5">
                        <button id={"button-" + cartItem.id}  className="btn  btn-primary transition duration-200 ease-in-out " onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

export default AddtoCart