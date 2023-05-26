import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/dist/client/components/headers";
import getDB from "../Connection";
let db: any = undefined;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    db = await getDB()
    console.log("::>>>", db)
    const {
        query: { action },
        method,
        headers: { authorization: token }
    } = req;
    let data: any
    switch (action) {
        case "getUser":
            return res.status(200).json({ name: 'John Doe' });

        case "createUser":
            return await createUser(req, res);



        case "getUserDetails":
            data = await getUserDetails(res)
            return res.status(200).json({ action: action, data: data });

        case "deleteUserDetails":
            return await deleteUserDetails(req, res)

        case "updateUser":
            return await updateUser(req, res)

        case "aggregateMatch":
            return await aggregateMatch(req, res)

        case "aggregateSort":
            return await aggregateSort(req, res)


        default:
            return res.status(200).json({ data: "No data found for: " + action })
    }
}



export async function createUser(req: NextApiRequest, res: NextApiResponse) {
    const user = await db.collection("users")
    const data = await user.insertOne(req.body)
    return res.status(200).json({ data: data });

}

export async function getUserDetails(res: NextApiResponse) {
    const user = await db.collection("users")
    const data = await user.find().toArray()
    return res.status(200).json({ data: data });

}

export async function deleteUserDetails(req: NextApiRequest, res: NextApiResponse) {
    const user = await db.collection("users")
    const data = await user.deleteOne({ firstName: req.body.firstName })
    return res.status(200).json({ data: data });

}

export async function updateUser(req: NextApiRequest, res: NextApiResponse) {
    const user = await db.collection("users")
    const data = await user.updateOne({
        firstName: "Gaurav"
    },
        {
            $set: { firstName: "Dinesh" }
        }
    )
}


export async function aggregateMatch(req: NextApiRequest, res: NextApiResponse) {
    const products = await db.collection("products");
    const data = await products.aggregate([
        { $match: { price: 14 } }]).toArray();
    return res.status(200).json({ data })

}


export async function aggregateSort(req: NextApiRequest, res: NextApiResponse) {
    const products = await db.collection("products")
    const data = await products.aggregate([{ $sort: { price: -1 } }]).toArray();
    return res.status(200).json({ data });
}


// export async function fetchAllProducts(req: NextApiRequest, res: NextApiResponse) {
//     let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaW5lc2hAZ21haWwuY29tIiwiZXhwIjoxNjg0ODg2MDE5LCJpYXQiOjE2ODQ4NjgwMTl9.41W_Rxy63nRNzsChGQ4NIQz2FdjnvDDP2SNvknZ8lauz5iwJq2W9ye2Dc7-qZocIZFLuXDYvwuIGTP_CDJskKA"
//     const data = await fetch("http://localhost:8080/api/v1/admin/product/allproducts",
//         { method: 'GET', headers: { Authorization: "Bearer " + token } }

//     )

//     if (!data.ok) {
//         throw new Error("Error in fetching data")
//     }
//     console.log("fetch data ", data)
//     return res.status(200).json({ data })
// }



