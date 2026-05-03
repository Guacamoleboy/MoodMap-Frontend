// Pathing
// _______
// src/components/shared/navbar/NavbarEntryDropdown.jsx

function NavbarEntryDropdown({ children }) {

    // ------------ SETUP -------------------------------------------------------

    // N/A

    // ------------ RETURN ------------------------------------------------------

    return (
        <ul className="dropdown">
            {children}
        </ul>
    )
    
}

export default NavbarEntryDropdown