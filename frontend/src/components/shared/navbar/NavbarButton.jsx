// Pathing
// _______
// src/components/shared/navbar/NavbarButton.jsx

import { Link } from 'react-router-dom'

function NavbarButton({ label, to = "/", size = "l", visuals = "primary" }) {

    // ------------ SETUP -------------------------------------------------------

    // N/A

    // ------------ RETURN ------------------------------------------------------

    return (
        <Link to={to} className={`moodmap-button ${size} ${visuals}`}>
            {label}
        </Link>
    )
    
}

export default NavbarButton