import router, { useRouter } from "next/router"
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NewEventForm from "../components/NewEventForm";

const NewEventPage = () => {
    const handleAddNewEvent = async (eventData) => {

        await axios.post('/api/add-new-event', eventData)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
        });

        router.push("/");
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