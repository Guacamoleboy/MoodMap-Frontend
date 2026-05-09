// Pathing
// _______
// src/components/login/LoginActions.jsx

import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

const LoginActions = ({ loading }) => {

    // ---- SETUP -----------------------------------------------------------------------------------------------------------------

    const navigate = useNavigate()

    // ---- RETURN -----------------------------------------------------------------------------------------------------------------

    return (
        <div className={styles.actions}>

            {/* ENTRY */}
            <button type="button" onClick={() => navigate('/wontadd')}className="moodmap-button m secondary">
                QR
            </button>

            {/* ENTRY */}
            <button type="button" onClick={() => navigate('/wontadd')} className="moodmap-button m secondary">
                Hjælp
            </button>
            
            {/* ENTRY */}
            <button type="submit" disabled={loading} className="moodmap-button m primary">
                {loading ? 'Logger ind...' : 'Log ind'}
            </button>

        </div>
    );
};

export default LoginActions;