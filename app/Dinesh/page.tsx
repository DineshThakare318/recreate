'use client'
export async function getData() {
    const res = await fetch("https://dummyjson.com/products");
    console.log("gdfgdfgdf", res)
    if (!res.ok) {
        throw new Error("failed to fetch data")
    }
    return res.json();
}



import React from 'react'
import { CardComponent } from './card';
import "./products.css"

export default async function page() {

    const data = await getData();
    console.log("response data>>>>>> ", data)
    return (
        // style={{backgroundColor:"rgb(15 23 42)", paddingTop:"100px"}}
        <div className="products-container" >
            {data.products.splice(0, 5).map((element: any, index: number) => (
                <>


                    <div className='products-inner'>
                        <CardComponent
                            title={element.title}
                            description={element.description}
                            price={element.price}
                            image={element.images[0]}
                            brand={element.brand}
                            category={element.category}
                        //    image={element.images}
                        />
                    </div>


                </>
            ))}
        </div>
    )
}
