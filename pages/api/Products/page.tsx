import { NextApiRequest, NextApiResponse } from "next"

export async function fetchAllProducts() {
    let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaW5lc2hAZ21haWwuY29tIiwiZXhwIjoxNjg0ODg2MDE5LCJpYXQiOjE2ODQ4NjgwMTl9.41W_Rxy63nRNzsChGQ4NIQz2FdjnvDDP2SNvknZ8lauz5iwJq2W9ye2Dc7-qZocIZFLuXDYvwuIGTP_CDJskKA"
    const res = await fetch("http://localhost:8080/api/v1/admin/product/allproducts",
        { method: 'GET', headers: { Authorization: "Bearer " + token } }

    )
    let data = res.json()
    return data;
}

import React from 'react'
import './PProducts.css'
export default async function page() {
    const data = await fetchAllProducts()
    // data.data.map((ele: any) => {
    //     console.log("all products", ele.productName)
    // })
    return (
        <div className="products-outer">
            {data.data.map((ele: any, index: number) => (
                <div className="products-inner">
                    <img src={"http://localhost:8080/api/v1/files/downloadFile/" + ele.photo} style={{ width: 200, height: 200 }} />
                    <h3>{ele.productName}</h3>
                    <h3>{ele.price}</h3>
                </div>
            ))}
        </div>
    )
}

