import { MongoClient } from "mongodb";

import Header from "../components/Header";
import Title  from "../components/Title";
import Footer from "../components/Footer";
import EventsList from "../components/EventsList";
import Nav from "../components/Nav";

export default function Home(props) {

  return (
    <div>
      <Header />
      <Title />
      <EventsList events = {props.events} />
      <Nav />
      <Footer />
    </div>
  );
}


export async function getStaticProps(){

  const client = await MongoClient.connect("mongodb+srv://tausifpatel:Zzz1dW1NRWpnTfJr@cluster0.akm73.mongodb.net/events?retryWrites=true&w=majority");

  const db = client.db();

  const collection = db.collection("events");

  const events = await collection.find().toArray();

  return {
    props: {
      events: events.map(event => ({
        eventName : event.eventName,
        eventDDT : event.eventDDT,
        eventVenue : event.eventVenue,
        eventDescription : event.eventDescription,
        id : event._id.toString()
      }))
    }
  }
}
