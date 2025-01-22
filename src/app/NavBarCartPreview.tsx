'use client';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './shop/ShopContext';
import RemoveFromCart from './shop/RemoveFromCart';

const NavBarCartPreview = () => {

    const context = useContext(ShopContext);
    
    console.log("Renderd!!!")

    const [total , setTotal] = useState<number>(0);


    const totalCartItems:number = context?.cartItems.length || 0;

    useEffect(() => {

        setTotal(0);
        let i:number = 0;
   
    let subtotal = 0;
    
    for (i; i < totalCartItems; i++){
        console.log("Looping...");
        
        subtotal = subtotal + ((context?.cartItems[i].price || 0) * (context?.cartItems[i].quantity || 0));
    }

    setTotal(subtotal)
    },[ context?.cartItems ])
 
    console.log("=================================sdsdsd====================")
    console.log(totalCartItems)


    //const totalvalue 

  return (

    <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-60 shadow">
        <div className="card-body">
            <span className="text-lg font-bold">{context?.cartItems.length} Items</span>

            { context?.cartItems.length || 0 > 1 ? context?.cartItems.map((e) => {
                return (
                    <span key={e.id} className="text-info flex flex-row justify-between items-center"><div>{e.name}: ${e.price} <span className='text-slate-950'>Q:{e.quantity}</span> </div> <div><RemoveFromCart item={e}/></div></span>
                )
            } ) : 0}
            <hr />
            <span className="text-balance">Subtotal: ${total.toFixed(2) || 0}</span>
            <div className="card-actions">
            <   button className="btn btn-primary btn-block"><Link href="/shop/viewcart">view cart</Link></button>
            </div>
        </div>
    </div>
  )
}

export default NavBarCartPreview