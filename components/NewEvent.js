import router from "next/router";

const NewEvent = () => {

    const handleAddNewEvent = () => {
        router.push("/new-event");
    }

    return (
        <div className="govuk-width-container">
            <button className="govuk-button" onClick={handleAddNewEvent} >
                Add new event 
            </button>
        </div>
    )
}

export default NewEvent;

