// Pathing
// _______
// src/components/settings/shared/Return.jsx

import { useNavigate } from 'react-router-dom'
import styles from './Return.module.css'

const Return = () => {

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
        <button onClick={handleBack} className={styles.return}>
            <i className="fa fa-arrow-left" />
        </button>
    )

}

export default Return