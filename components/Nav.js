import Link from "next/link";

const Nav = () => {
    return (
        <div className="govuk-width-container">
            <nav className="app-navigation govuk-clearfix govuk-!-margin-bottom-7">
                    <li className="app-navigation__list-item">
                        <Link className="govuk-link govuk-link--no-visited-state govuk-link--no-underline" href='/new-event'>Add New Event</Link>
                    </li>
            </nav>
        </div>
    )
}

export default Nav;

