import Image from 'next/image';
import React from 'react'

interface ShopItem{
    id:number,
    name : string,
    price : number,
    description : string,
    category:string
}


const shopItems:ShopItem[] = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        description: "A high-performance laptop suitable for all your computing needs.",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 699.99,
        description: "A latest model smartphone with all the modern features.",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Headphones",
        price: 199.99,
        description: "Noise-cancelling headphones for an immersive audio experience.",
        category: "Accessories"
    },
    {
        id: 4,
        name: "Coffee Maker",
        price: 49.99,
        description: "A compact coffee maker for a perfect cup every time.",
        category: "Home Appliances"
    },
    {
        id: 5,
        name: "Bookshelf",
        price: 89.99,
        description: "A sturdy wooden bookshelf to organize your books and decor.",
        category: "Furniture"
    }
];


const ShopItems = () => {
  return (
    <div className='grid grid-cols-3 mx-32'>

        {shopItems.map((item) => {
            return (
                <div className="card bg-base-100 w-96 shadow-xl my-4" key= {item.id}>
                <figure>
                    <Image
                    layout='responsive'
                    width={500}
                    height={500}
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                         {item.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{item.category}</div>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                    <div className="card-actions justify-end mt-5">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default ShopItems