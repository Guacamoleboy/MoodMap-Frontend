// Pathing
// _______
// src/components/no-match/NoMatchActions.jsx

import { useNavigate } from 'react-router-dom'

const NoMatchActions = () => {

    // ------------ SETUP ------------------------------------------------------
    
    const navigate = useNavigate()

    // ------------ EVENTS ------------------------------------------------------

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate('/login')
        }
    }

    // ------------ RETURN ------------------------------------------------------

    return (
        <button onClick={handleBack} className="moodmap-button m primary">
            Gå tilbage
        </button>
    )
}

export default NoMatchActions