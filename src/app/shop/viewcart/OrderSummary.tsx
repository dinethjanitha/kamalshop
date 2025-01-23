import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext'

const OrderSummary = () => {
    const context = useContext(ShopContext);
  return (
    <div>
         <div className='flex flex-row my-3'>
                  <div className='flex-none'>Subtotal</div>
                  <div className='flex-none grow'></div>
                  <div className='flex-none'>${context?.total}</div>
                </div>
                <hr />
               
                <div className='flex flex-row my-3'>
                  <div className='flex-none font-bold'>Order Total</div>
                  <div className='flex-none grow'></div>
                  <div className='flex-none'>${context?.total}</div>
                </div>
    </div>
  )
}

export default OrderSummary