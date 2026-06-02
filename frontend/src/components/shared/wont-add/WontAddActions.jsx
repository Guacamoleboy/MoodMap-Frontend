// Pathing
// _______
// src/components/shared/wont-add/WontAddActions.jsx

import { Link } from 'react-router-dom'
import BackOrLogin from '@components/shared/BackOrLogin'
import styles from './WontAdd.module.css'

const WontAddActions = () => (
    <div className={styles.wrapper}>
        <BackOrLogin size="l" />
        <Link to="/devlog">
            <button className="moodmap-button l secondary">
                Gå til Devlog
            </button>
        </Link>
    </div>
)

export default WontAddActions