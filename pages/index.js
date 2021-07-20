import Header from "../components/Header";
import Title  from "../components/Title";
import Footer from "../components/Footer";
import EventsList from "../components/EventsList";

export default function Home() {

  const events = [
    {
      id: "01",
      eventName: "React Meetup",
      eventDay: "Thursday",
      eventDate: "Aug 04",
      eventTime: "18:00",
      eventVenue: "Central Foundation Boys’ School, London",
      eventDescription: "React is having a huge impact on the way we think about Web UI development. Our Meetups are an opportunity to learn why and share experiences. We are a sociable group and very welcoming to newcomers"
    }, 
    {
      id: "02",
      eventName: "NextJs Meetup",
      eventDay: "Monday",
      eventDate: "Sep 30",
      eventTime: "17:00",
      eventVenue: "Plexal, London",
      eventDescription: "After two years with Next.js in production, I would like to sum up some of the results by comparing it with similar tools that caught my attention. It's going to be an interesting discussion about the strengths and weaknesses of SSR (server-side rendering) and SSG (static site generators)"
    }  
  ]

  return (
    <div>
      <Header />
      <Title />
      <EventsList events = {events} />
      <Footer />
    </div>
  );
}
