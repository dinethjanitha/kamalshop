"use client";

import React, { createContext, ReactNode, useState } from 'react'

interface CartType{
    id:number,
    name:string,
    price : number,
    quantity:number
}

interface ItemType {
    id:number,
    name:string,
    price : number,
}


interface ShopContextType {
    cartItems : CartType[],
    addToCart : (item:ItemType) => void,
    removeFromCart : (item:CartType) => void 
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined)

export const CartProvider : React.FC<{children : ReactNode}> = ({children}) => {
    const [cartItems , setcartItems] = useState<CartType[]>([]); 

    const addToCart = (item:ItemType) => {
        console.log(item)

        const sameItem:boolean = cartItems.some((i) => i.id == item.id)

        if(sameItem){
           const updatedCart:CartType[] = cartItems.map((e) => {
                if(e.id == item.id){
                    e.quantity += 1;
                }

                return e

           })

           setcartItems(updatedCart)
        }else{
            setcartItems([...cartItems , {...item , quantity : 1}])
        }

    }

    console.log(cartItems);
    
    const removeFromCart = (item:ItemType) => {
        const newCartItem = cartItems.filter((e) => e.id !== item.id)
        setcartItems(newCartItem);
    }

    return (
        <ShopContext.Provider value={{cartItems , addToCart , removeFromCart }}>
            {children}
        </ShopContext.Provider>
    )
}
