import { MongoClient } from "mongodb";

async function handles(req, res){
    if(req.method === "POST"){
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://tausifpatel:Zzz1dW1NRWpnTfJr@cluster0.akm73.mongodb.net/events?retryWrites=true&w=majority");
        
        const db = client.db();  // Alternatively client.db("events") - where "events is db name"

        const eventsCollection = db.collection("events");

        const result = await eventsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: "Meetup inserted!"});
    }
}


////////// From documentation 
// async function handles(req, res){
//     if(req.method === "POST"){
//         const data = req.body;

//         const uri = "mongodb+srv://tausifpatel:Zzz1dW1NRWpnTfJr@cluster0.akm73.mongodb.net/events?retryWrites=true&w=majority";

//         const client = new MongoClient(uri);

//         const clientConnected = await client.connect();

//         const database = clientConnected.db("events");

//         const eventsCollection = database.collection("events");

//         const result = await eventsCollection.insertOne(data);

//         console.log(result)

//         client.close();

//         res.status(201).json({message: "Event inserted!"});
//     }
// }

export default handles;
