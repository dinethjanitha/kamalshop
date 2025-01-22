'use client';
import React, { useContext } from 'react'
import { ShopContext } from './shop/ShopContext'

const NavBarCartValue = () => {

   const context = useContext(ShopContext) ;

  return (
    <span className="badge badge-sm indicator-item">{context?.cartItems.length || 0}</span>
  )
}

export default NavBarCartValue