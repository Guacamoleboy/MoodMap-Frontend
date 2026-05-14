// Pathing
// _______
// src/components/settings/shared/Cookies.jsx

import { useState } from 'react'
import SettingsEntry from '../SettingsEntry'
import styles from '../SettingsEntry.module.css'

const Cookies = () => {

    const [enabled, setEnabled] = useState(false)

    const description = enabled
        ? 'Cookies er aktiveret for forbedret funktionalitet og analyse.'
        : 'Kun nødvendige cookies er aktive.'

    const action = (
        <button
            className={`${styles.toggle} ${enabled ? styles.active : ''}`}
            onClick={() => setEnabled(prev => !prev)}
        >
            <span />
        </button>
    )

    return (
        <SettingsEntry
            title="Cookies"
            description={description}
            action={action}
        />
    )
}

export default Cookies