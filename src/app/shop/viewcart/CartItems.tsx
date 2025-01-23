'use client';
import React, { useContext } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Image from 'next/image';
import { ShopContext } from '../ShopContext';

const CartItems = () => {

    const context = useContext(ShopContext);


    const cartItem = context?.cartItems;

  return (
    <div>
        {
            cartItem?.map((e) => {
                return (
                    <div className='my-3' key={e.id}>
                        <div className='flex flex-row'>
                              <div className='w-28 lg:w-52 flex justify-center ite'>
                                <Image layout='responsive' width={100} height={100} src="https://st3.depositphotos.com/10866344/18700/v/450/depositphotos_187000366-stock-illustration-camera-photography-logo-icon-template.jpg" alt="" />
                              </div>
                              <div className='flex flex-col grow p-5'>
                                <div className='flex flex-row'>
                                  <div className='flex flex-col '>
                                    <span className='text-sm font-bold'>{e.name}</span>
                                    <span className='text-sm opacity-60 '>Sienna  |  Large</span>
                                    <span className='text-sm'>$ {e.price}</span>
                                  </div>
                                  <div className='grow text-center' >
                                    <span className='flex justify-center items-center'>
                                        <IoMdArrowRoundBack  onClick={() => {context?.deQuantity(e.id)}} />
                                            <span className='mx-2 text-cyan-950'>{e.quantity}</span>
                                        <IoMdArrowRoundForward  onClick={() => {context?.addQuantity(e.id)}} />
                                    </span>
                                  </div>
                                  <div>
                                    <IoCloseOutline onClick={() => {context?.removeFromCart(e)}} className='text-blue-400 text-xl' />
                                  </div>
                                </div>
                                <div className=' grow text-center flex items-center'></div>
                                <div className=''>In Stock</div>
                              </div>
                        </div>
        
                        <div className='mt-4'>
                          <hr />
                        </div>
                    </div>
                )
            })
        }

        {/* change git config details */}
        
    </div>
  )
}

export default CartItems