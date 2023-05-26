// 'use client'

export async function showData() {
    const res = await fetch("http://localhost:3000/api/User/hello?action=getUserDetails",
        {
            method: 'GET',
            headers: {}
        }
    )
    console.log("show response ", res)
    if (!res.ok) {
        throw new Error("data not fetched")
    }
    return res.json();
}

import React from 'react'

export default async function page() {

    const data = await showData();
    console.log("Dummy data>>>>>>>>>>", data);
    return (
        <div>page</div>
    )
}