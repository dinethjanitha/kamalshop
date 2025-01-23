'use client';
import Link from 'next/link';
import React, { useContext} from 'react'
import { ShopContext } from './shop/ShopContext';
import RemoveFromCart from './shop/RemoveFromCart';

const NavBarCartPreview = () => {

    const context = useContext(ShopContext);
    
    console.log("Renderd!!!")

    

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
            <span className="text-balance">Subtotal: ${context?.total.toFixed(2) || 0}</span>
            <div className="card-actions">
            <Link className='btn btn-primary btn-block' href="/shop/viewcart">
                                   view cart
            </Link>
            
            </div>
        </div>
    </div>
  )
}

export default NavBarCartPreview