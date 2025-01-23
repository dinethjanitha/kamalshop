'use client';
import React from 'react'
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Link from 'next/link';

const ViewCart = () => {


  return (
    <div className='lg:mx-24 border rounded-lg p-5'>
      <h2 className='text-4xl font-bold flex flex-row items-center'><Link href="/shop"><IoArrowBackCircleSharp /></Link> <span className='ml-4'>Shopping Cart</span></h2>
        <div className='grid lg:grid-cols-10 sm:grid-cols-1 mt-5 gap-2 '>
          <div className="lg:col-span-6">
            <div className=' flex flex-col'>
            <CartItems/>
            </div>
          </div>
          <div className="lg:col-span-4  ">
              <div className='bg-slate-50 rounded-xl flex flex-col p-5'>
                <h2 className='text-xl mb-2'>Order Summary</h2>
                <hr />
                <OrderSummary/>
                <div className='btn btn-primary mt-2'>Submit Order</div>
              </div>
          </div>
        </div>
    </div>
    //<div>{context?.cartItems.length}</div>
  )
}

export default ViewCart