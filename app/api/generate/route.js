import clientPromise from "@/lib/mongodb";


export async function POST(req) {
    const body = await req.json();
        const client = await clientPromise;
        const db = client.db("linkly");
        const collection = db.collection("url");


        // check if the short url exsit 
        const doc = await collection.findOne({ shorturl: body.shorturl });
        if (doc) {
            return Response.json({ message: "Short URL already exists!", error: true, success: false });
        }
        else {
       const result = await collection.insertOne({ url: body.url, shorturl: body.shorturl });
    }
    
    return Response.json({ message: "URL generated successfully!", error: false, success: true });





  }
