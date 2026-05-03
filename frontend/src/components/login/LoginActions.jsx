// Pathing
// _______
// src/components/login/LoginActions.jsx

import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

const LoginActions = ({ onSubmit, loading }) => {

    const navigate = useNavigate()

    return (
        <div className={styles.actions}>
            <button onClick={() => navigate('/forgot')} className="moodmap-button m secondary">
                QR
            </button>
            <button onClick={() => navigate('/forgot')} className="moodmap-button m secondary">
                Hjælp
            </button>
            <button onClick={onSubmit} disabled={loading} className="moodmap-button m primary">
                {loading ? 'Logger ind...' : 'Log ind'}
            </button>
        </div>
    )
}

export default LoginActions