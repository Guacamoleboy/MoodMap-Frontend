// Pathing
// _______
// src/components/shared/navbar/Navbar.jsx

import NavbarLogo from "./NavbarLogo"
import NavbarButton from "./NavbarButton"
import NavbarEntry from "./NavbarEntry"
import NavbarEntryDropdown from "./NavbarEntryDropdown"
import NavbarEntryDropdownItem from "./NavbarEntryDropdownItem"
import { useAuth } from "@hooks/useAuth"

function Navbar() {

    // ------------ SETUP -------------------------------------------------------

    const { isAuthenticated } = useAuth()

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
                <NavbarEntry label="Vores mission" href="/wontadd" />

                {/* Entry */}
                <NavbarEntry label="Til virksomheder">
                    <NavbarEntryDropdown>
                        <NavbarEntryDropdownItem icon="fa-bar-chart" label="Overblik" href="/wontadd" />
                        <NavbarEntryDropdownItem icon="fa-credit-card" label="Priser" href="/wontadd" />
                        <NavbarEntryDropdownItem icon="fa-folder-open" label="Cases" href="/wontadd" />
                    </NavbarEntryDropdown>
                </NavbarEntry>

                {/* Entry */}
                <NavbarEntry label="API">
                    <NavbarEntryDropdown>
                        <NavbarEntryDropdownItem icon="fa-book" label="Docs" href="/docs" />
                        <NavbarEntryDropdownItem icon="fa-lock" label="Auth" href="/wontadd" />
                        <NavbarEntryDropdownItem icon="fa-key" label="Access" href="/wontadd" />
                        <NavbarEntryDropdownItem icon="fa-question-circle" label="F&Q" href="/wontadd" />
                    </NavbarEntryDropdown>
                </NavbarEntry>

                {/* Entry */}
                <NavbarEntry label="Devlog" href="/devlog" />

            </ul>

            {/* ------------------------------------------------------------------------------------------------------------- */}

            {/* Right */}
            <div className="navbar-right">
                <NavbarButton
                    label={isAuthenticated ? "Dashboard" : "Log Ind"}
                    to={isAuthenticated ? "/dashboard" : "/login"}
                    size="l"
                    variant="primary"
                />
            </div>

        </nav>
    )

}

export default Navbar