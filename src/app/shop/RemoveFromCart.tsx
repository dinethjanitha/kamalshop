'use client';
import React, { useContext } from 'react'
import { ShopContext } from './ShopContext';
import { IoIosCloseCircleOutline } from "react-icons/io";


interface Prop {
    item : {
        id:number,
        name:string,
        price : number,
        quantity:number 
    }
}

const RemoveFromCart = ({item}:Prop) => {

    const context = useContext(ShopContext);


  return (
    <div><button className='p-1 bg-slate-100  rounded-xl  ml-5' onClick={() => context?.removeFromCart(item)}><IoIosCloseCircleOutline /></button></div>
  )
}

export default RemoveFromCart