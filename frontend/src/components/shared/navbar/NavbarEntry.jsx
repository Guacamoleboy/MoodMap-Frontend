// Pathing
// _______
// src/components/shared/navbar/NavbarEntry.jsx

import { NavLink } from 'react-router-dom'

function NavbarEntry({ label, href = "/", children }) {

    // ------------ SETUP -------------------------------------------------------

    // Note for myself: 
    //      - children = Nested without checks
    //      - !children = true if empty or null
    //      - !!children Boolean -> True / False

    const hasDropdown = !!children

    // ------------ RETURN ------------------------------------------------------

    return (
        <li className={`nav-entry ${hasDropdown ? "has-dropdown" : ""}`}>

            {/* Link + Active Status */}
            <NavLink to={href} className={({ isActive }) => isActive ? "active" : ""}>
                {label}
                {hasDropdown && <i className="fa fa-chevron-down" />}
            </NavLink>

            {/* Dropdown (if) */}
            {hasDropdown && children}

        </li>
    )
    
}

export default NavbarEntry