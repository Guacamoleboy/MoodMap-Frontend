// Pathing
// _______
// src/components/settings/SettingsEntry.jsx

import styles from './SettingsEntry.module.css'

const SettingsEntry = ({
    title,
    description,
    action
}) => (
    <section className={styles.entry}>

        {/* LEFT */}
        <div className={styles.info}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

        {/* RIGHT */}
        <div className={styles.action}>
            {action}
        </div>

    </section>
)

export default SettingsEntry