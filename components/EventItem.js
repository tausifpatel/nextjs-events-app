const EventItem = ({eventName, eventDay, eventDate, eventTime, eventVenue, eventDescription}) => {
    return (
        <div>
            <main className="govuk-main-wrapper " id="main-content" role="main">
                <h2> {eventName} </h2>
                <p> {eventDay}, {eventDate}, {eventTime} </p>
                <p> {eventVenue} </p>
                <p> {eventDescription} </p>
            </main>
        </div>
    )
}

export default EventItem;
