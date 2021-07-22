import Header from "../components/Header";
import Footer from "../components/Footer";
import NewEventForm from "../components/NewEventForm";

const NewEventPage = () => {

    const handleAddNewEvent = async (eventData) => {
        const response = await fetch('/api/add-new-event', {
            method: "POST",
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <Header />
            <NewEventForm onAddEvent={handleAddNewEvent} />
            <Footer />
        </div>
    )
}

export default NewEventPage;