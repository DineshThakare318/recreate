import { MongoClient } from "mongodb";

const getDB = async () => {

    const uri = "mongodb+srv://dineshthakare0319:Dinesh%401234@cluster0.j6ufgrt.mongodb.net/?retryWrites=true&w=majority"
    const options: any = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
    let client, db;

    if (!uri) {
        throw new Error("please enter correct uri");
    }

    client = new MongoClient(uri, options);
    await client.connect();
    db = client.db("NextJs_Demo");
    console.log("Connection>>>>>>>>", db)
    return db;

}
export default getDB;