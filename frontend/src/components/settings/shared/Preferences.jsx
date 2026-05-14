// Pathing
// _______
// src/components/settings/shared/Preferences.jsx

import { useState } from 'react'
import SettingsEntry from '../SettingsEntry'
import styles from '../SettingsEntry.module.css'

const Preferences = () => {

    const [enabled, setEnabled] = useState(true)

    const description = enabled
        ? 'Personlige præferencer er aktiveret for bedre oplevelse.'
        : 'Personlige præferencer er begrænset eller deaktiveret.'

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
            title="Præferencer"
            description={description}
            action={action}
        />
    )
}

export default Preferences