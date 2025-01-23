"use client";

import React, { createContext, ReactNode, useEffect, useState } from 'react'

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
    total : number,
    addToCart : (item:ItemType) => void,
    removeFromCart : (item:CartType) => void 
    addQuantity : (item:number) => void,
    deQuantity : (item:number) => void,
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


    const addQuantity = (id:number) => {
        const updatedCart:CartType[] = cartItems.map((e) => {
            if(e.id == id ){
                return {...e , quantity : e.quantity + 1 }
            }else{
                return e;
            }
        })

        setcartItems(updatedCart)

        console.log(updatedCart);
    }


    const deQuantity = (id:number) => {
        

        const updatedCart:CartType[] = cartItems.map((e) => {
            if(e.id == id ){
                if(e.quantity == 0){
                    
                    return {...e , quantity : 0 }
                }else{
                    return {...e , quantity : e.quantity - 1 }
                }
            }else{
                return e
            }
        })

        
        setcartItems(updatedCart)

        console.log(updatedCart);
    }


    const [total , setTotal] = useState<number>(0);


    const totalCartItems:number = cartItems.length || 0;

    useEffect(() => {

        setTotal(0);
        let i:number = 0;
   
    let subtotal = 0;
    
    for (i; i < totalCartItems; i++){
        console.log("Looping...");
        
        subtotal = subtotal + ((cartItems[i].price || 0) * (cartItems[i].quantity || 0));
    }

    setTotal(parseFloat(subtotal.toFixed(2)))
    },[ cartItems ])
 
    console.log(totalCartItems)


    return (
        <ShopContext.Provider value={{cartItems ,total, addToCart , removeFromCart , addQuantity  ,deQuantity}}>
            {children}
        </ShopContext.Provider>
    )
}
