const NewEventForm = () => {
    return (
        <div className="govuk-width-container" >

            <main className="govuk-main-wrapper " role="main">
                <h1 className="govuk-heading-xl heading"> Enter event details </h1>
            </main>

            <div class="govuk-form-group">
                <label class="govuk-label" for="address-line-1">
                    What is the name of the event?
                </label>
                <input class="govuk-input" name="address-line-1" type="text" autocomplete="address-line1"/>
            </div>

            <div class="govuk-form-group">
                <label class="govuk-label" for="address-line-1">
                    Where is it happening?
                </label>
                <input class="govuk-input" name="address-line-1" type="text" autocomplete="address-line1"/>
            </div>

            <div class="govuk-form-group">
                <div class="govuk-date-input" id="passport-issued">
                    <div class="govuk-date-input__item">
                        <div class="govuk-form-group">
                        <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
                            Day
                        </label>
                        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" pattern="[0-9]*" inputmode="numeric" /></div>
                    </div>
                    <div class="govuk-date-input__item">
                        <div class="govuk-form-group">
                        <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
                            Month
                        </label>
                        <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" pattern="[0-9]*" inputmode="numeric" /></div>
                    </div>
                    <div class="govuk-date-input__item">
                        <div class="govuk-form-group">
                        <label class="govuk-label govuk-date-input__label" for="passport-issued-year">
                            Year
                        </label>
                        <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="passport-issued-year" name="passport-issued-year" type="text" pattern="[0-9]*" inputmode="numeric" /></div>
                    </div>   
                </div>
            </div>
            
            <div class="govuk-form-group">
                <label class="govuk-label" for="address-line-1">
                    Description
                </label>
                <textarea class="govuk-textarea" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
            </div>

        </div>
    )
}

export default NewEventForm;
