// Pathing
// _______
// src/components/settings/shared/Appearance.jsx

import { useTheme } from '@hooks/useTheme'
import SettingsEntry from '../SettingsEntry'
import styles from '../SettingsEntry.module.css'

const Appearance = () => {

    // ------------ STATE -----------------------------------------------------------------

    const { darkmode, toggleTheme } = useTheme()

    // ------------ DESCRIPTION -----------------------------------------------------------

    const description = darkmode ? (
        <>
            Du bruger i øjeblikket{' '}
            <span className="moodmap-highlight m">mørkt tema</span>{' '}
            for en mere behagelig oplevelse.
        </>
    ) : (
        <>
            Du bruger i øjeblikket{' '}
            <span className="moodmap-highlight m">lyst tema</span>{' '}
            for et mere neutralt udseende.
        </>
    )

    // ------------ ACTION ----------------------------------------------------------------

    const actionHandle = (
        
        <button
            className={`${styles.toggle} ${darkmode ? styles.active : ''}`}
            onClick={toggleTheme}
        >

            {/* CIRCLE BUTTON */}
            <span />

        </button>
        
    )

    // ------------ RENDER ----------------------------------------------------------------

    return (
        <SettingsEntry
            title="Skift udseende"
            description={description}
            action={actionHandle}
        />
    )
}

export default Appearance