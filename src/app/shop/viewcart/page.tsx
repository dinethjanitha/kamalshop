'use client';
import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext';

const ViewCart = () => {

  const context = useContext(ShopContext);

  return (
    <div>{context?.cartItems.length}</div>
  )
}

export default ViewCart