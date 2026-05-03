// Pathing
// _______
// src/components/shared/navbar/NavbarEntryDropdownItem.jsx

import { Link } from 'react-router-dom'

function NavbarEntryDropdownItem({ label, icon, href = "/" }) {

    // ------------ SETUP -------------------------------------------------------

    // N/A

    // ------------ RETURN ------------------------------------------------------

    return (
        <li>
            <Link to={href}>
                <span className="dropdown-icon">
                    <i className={`fa ${icon}`} />
                </span>
                {label}
            </Link>
        </li>
    )
    
}

export default NavbarEntryDropdownItem