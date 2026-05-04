// Pathing
// _______
// src/components/shared/navbar/Navbar.jsx

import NavbarLogo from "./NavbarLogo"
import NavbarButton from "./NavbarButton"
import NavbarEntry from "./NavbarEntry"
import NavbarEntryDropdown from "./NavbarEntryDropdown"
import NavbarEntryDropdownItem from "./NavbarEntryDropdownItem"

function Navbar() {

    // ------------ SETUP -------------------------------------------------------

    // N/A

    // ------------ RETURN ------------------------------------------------------

    return (
        <nav className="navbar-wrapper">

            {/* Left */}
            <div className="navbar-left">
                <NavbarLogo src="/images/logo/logo-svg.svg" />
            </div>

            {/* ------------------------------------------------------------------------------------------------------------- */}

            {/* Middle */}
            <ul className="navbar-middle">
                
                {/* Entry */}
                <NavbarEntry label="Vores mission" href="/" />

                {/* Entry */}
                <NavbarEntry label="Til virksomheder">
                    <NavbarEntryDropdown>
                        <NavbarEntryDropdownItem icon="fa-bar-chart" label="Overblik" />
                        <NavbarEntryDropdownItem icon="fa-credit-card" label="Priser" />
                        <NavbarEntryDropdownItem icon="fa-folder-open" label="Cases" />
                    </NavbarEntryDropdown>
                </NavbarEntry>

                {/* Entry */}
                <NavbarEntry label="API">
                    <NavbarEntryDropdown>
                        <NavbarEntryDropdownItem icon="fa-book" label="Docs" />
                        <NavbarEntryDropdownItem icon="fa-lock" label="Auth" />
                        <NavbarEntryDropdownItem icon="fa-key" label="Access" />
                        <NavbarEntryDropdownItem icon="fa-question-circle" label="F&Q" />
                    </NavbarEntryDropdown>
                </NavbarEntry>

                {/* Entry */}
                <NavbarEntry label="Devlog" href="/devlog" />

            </ul>

            {/* ------------------------------------------------------------------------------------------------------------- */}

            {/* Right */}
            <div className="navbar-right">
                <NavbarButton
                    label="Dashboard"
                    to="/login"
                    size="l"
                    variant="primary"
                />
            </div>

        </nav>
    )

}

export default Navbar