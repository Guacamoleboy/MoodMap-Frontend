// Pathing
// _______
// src/components/settings/shared/Profile.jsx

import { useState } from 'react'
import SettingsEntry from '../SettingsEntry'
import styles from '../SettingsEntry.module.css'

const Profile = () => {

    // ---- UI STATE ONLY -----------------------------------------------------

    const [enabled, setEnabled] = useState(true)

    // ---- DESCRIPTION -------------------------------------------------------

    const description = enabled
        ? 'Din profil er synlig og opdateret med alle dine oplysninger.'
        : 'Din profil er begrænset og viser minimal information.'

    // ---- ACTION ------------------------------------------------------------

    const action = (
        <button
            className={`${styles.toggle} ${enabled ? styles.active : ''}`}
            onClick={() => setEnabled(prev => !prev)}
        >
            <span />
        </button>
    )

    // ---- RENDER ------------------------------------------------------------

    return (
        <SettingsEntry
            title="Profil"
            description={description}
            action={action}
        />
    )
}

export default Profile