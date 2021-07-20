const EventItem = ({eventName, eventDDT, eventVenue, eventDescription}) => {
    return (
        <div>
            <main className="govuk-main-wrapper " id="main-content" role="main">
                <h2> {eventName} </h2>
                <p> {eventDDT} </p>
                <p> {eventVenue} </p>
                <p> {eventDescription} </p>
            </main>
        </div>
    )
}

export default EventItem;
