import React, { ReactNode } from 'react'
import { CartProvider } from './ShopContext'
import NavBar from '../NavBar'

interface Props {
    children : ReactNode
}

const layout = ({children }: Props) => {
  return (
    <CartProvider>
         <NavBar/>
        {children}
  </CartProvider>
    
  )
}

export default layout