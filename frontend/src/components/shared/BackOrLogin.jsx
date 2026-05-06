// Pathing
// _______
// src/components/shared/BackOrLogin.jsx

import { useNavigate } from 'react-router-dom'

const BackOrLogin = ({ size = 'm' }) => {

    // ------------ SETUP ------------------------------------------------------

    const navigate = useNavigate()

    // ------------ EVENTS -----------------------------------------------------

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate('/login')
        }
    }

    // ------------ RETURN -----------------------------------------------------

    return (
        <button onClick={handleBack} className={`moodmap-button ${size} primary`}>
            Gå tilbage
        </button>
    )
    
}

export default BackOrLogin