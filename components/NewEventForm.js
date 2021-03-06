import { useRef } from "react";

const NewEventForm = (props) => {
    const eventNameRef = useRef();
    const eventVenueRef = useRef();
    const eventDayRef = useRef();
    const eventMonthRef = useRef();
    const eventYearRef = useRef();
    const eventTimeRef = useRef();
    const eventDescriptionRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const eventName = eventNameRef.current.value;
        const eventVenue = eventVenueRef.current.value;
        const eventDay = eventDayRef.current.value;
        const eventMonth = eventMonthRef.current.value;
        const eventYear = eventYearRef.current.value;
        const eventTime = eventTimeRef.current.value;
        const eventDescription = eventDescriptionRef.current.value;

        // Create Event date and time
        const date = new Date(eventYear, (parseInt(eventMonth)-1), eventDay);
        const month = date.toLocaleString('en-GB', { month: 'long' });
        const day = date.toLocaleString('en-GB', { weekday: 'long' });
        const eventDDT = `${day} ${month} ${eventDay}, ${eventTime}`

        const eventData = {
            eventName, 
            eventVenue,
            eventDDT,
            eventDescription
        }

        props.onAddEvent(eventData);
    }

    return (
        <div className="govuk-width-container" >

            <form onSubmit={submitHandler}>
                <main className="govuk-main-wrapper">
                    <h1 className="govuk-heading-xl heading"> Enter event details </h1>
                </main>

                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="address-line-1">
                        What is the name of the event?
                    </label>
                    <input className="govuk-input" type="text" ref={eventNameRef} />
                </div>

                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="address-line-1">
                        Where is it happening?
                    </label>
                    <input className="govuk-input" type="text" ref={eventVenueRef}/>
                </div>

                <div className="govuk-form-group">
                    <div className="govuk-date-input" id="passport-issued">
                        <div className="govuk-date-input__item">
                            <div className="govuk-form-group">
                            <label className="govuk-label govuk-date-input__label" htmlFor="passport-issued-day">
                                Day
                            </label>
                            <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" pattern="[0-9]*" inputMode="numeric" ref={eventDayRef} /></div>
                        </div>
                        <div className="govuk-date-input__item">
                            <div className="govuk-form-group">
                            <label className="govuk-label govuk-date-input__label" htmlFor="passport-issued-month">
                                Month
                            </label>
                            <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" pattern="[0-9]*" inputMode="numeric" ref={eventMonthRef}/></div>
                        </div>
                        <div className="govuk-date-input__item">
                            <div className="govuk-form-group">
                            <label className="govuk-label govuk-date-input__label" htmlFor="passport-issued-year">
                                Year
                            </label>
                            <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="passport-issued-year" name="passport-issued-year" type="text" pattern="[0-9]*" inputMode="numeric" ref={eventYearRef}/></div>
                        </div>   
                    </div>
                </div>

                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="address-line-1">
                        What time is the Event?
                    </label>
                    <div className="govuk-hint">
                        24 hours format (18:00)
                    </div>
                    <input className="govuk-input govuk-input--width-5" type="text" pattern="[0-9,:]*" inputMode="numeric" ref={eventTimeRef} placeholder="18:00" />
                </div>
                
                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="address-line-1">
                        Description
                    </label>
                    <textarea className="govuk-textarea" name="more-detail" rows="5" aria-describedby="more-detail-hint" ref={eventDescriptionRef} ></textarea>
                </div>

                <button className="govuk-button" data-module="govuk-button">
                    Submit
                </button>

            </form>
        </div>
    )
}

export default NewEventForm;
