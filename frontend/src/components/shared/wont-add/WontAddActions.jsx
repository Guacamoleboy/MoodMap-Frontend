// Pathing
// _______
// src/components/shared/wont-add/WontAddActions.jsx

import BackOrLogin from '@components/shared/BackOrLogin'
import styles from './WontAdd.module.css'

const WontAddActions = () => (
    <div className={styles.wrapper}>
        <BackOrLogin size="l" />
        <button className="moodmap-button l secondary">
            Gå til Devlog
        </button>
    </div>
)

export default WontAddActions