const EventItem = ({eventName, eventDDT, eventVenue, eventDescription}) => {
    return (
        <div>
            <main className="govuk-main-wrapper " id="main-content" role="main">
                <div className="govuk-grid-row">
                    <div className="govuk-grid-column-two-thirds">                        
                        <h2> {eventName} </h2>
                        <p> {eventDDT} </p>
                        <p> {eventVenue} </p>
                        <p> {eventDescription} </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EventItem;
