import EventItem from "./EventItem";

const EventsList = (props) => {
    return (
        <div className="govuk-width-container">
            {props.events.map(event => (
                <EventItem 
                    eventName = {event.eventName}
                    eventDDT = {event.eventDDT}
                    eventVenue = {event.eventVenue}
                    eventDescription = {event.eventDescription}
                />
            ))}
        </div>
    )
}

export default EventsList;
