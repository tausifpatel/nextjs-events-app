import { MongoClient } from "mongodb";

async function handles (req, res){
    if(req.method === "POST"){
        const data = req.body;

        const uri = "mongodb+srv://tausifpatel:KQ3jIhLzoFmncHQJ@cluster0.akm73.mongodb.net/events?retryWrites=true&w=majority";

        const client = new MongoClient(uri);

        const clientConnected = await client.connect();

        const database = clientConnected.db();

        const eventsCollection = database.collection("events");

        const result = eventsCollection.insertOne(data);

        console.log(result)

        client.close();

        res.status(201).json({message: "Event inserted!"});
    }
}

export default handles;