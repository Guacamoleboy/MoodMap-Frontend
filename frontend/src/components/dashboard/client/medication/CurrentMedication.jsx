// Pathing
// _______
// src/components/dashboard/client/medication/CurrentMedication.jsx

import { useState } from 'react'
import styles from './CurrentMedication.module.css'

// ------ ENTRY (Move to it's own Component at some point) ---------------------------

const MedicationEntry = ({ label, defaultActive = false }) => {

    // ------ STATE ------------------------------------------------------------------

    const [active, setActive] = useState(defaultActive)

    // ------ RETURN ------------------------------------------------------------------

    return (
        <div className={styles.entry}>

            <span>{label}</span>

            <button
                type="button"
                onClick={() => setActive(prev => !prev)}
                className={`
                    ${styles.checkbox}
                    ${active ? styles.active : ''}
                `}
            >
                <i className="fa fa-check" />
            </button>

        </div>
    )
}

// ------ CURRENT MEDICATION ----------------------------------------------------------

const CurrentMedication = () => {

    return (
        <section className="dashboard-card">

            <div className="dashboard-card-header">
                <div className="dashboard-card-title">
                    <i className="fa fa-medkit" />
                    <h2>Nuværende medicin</h2>
                </div>
                <p>
                    Her kan du se din nuværende aktive medicin samt dosering og status.
                </p>
            </div>

            {/* MORNING */}
            <div className={styles.currentMedicationMorning}>
                <div className={styles.label}>
                    <i className="fa fa-sun-o" />
                    <span>Morgen</span>
                </div>
                <div className={styles.entries}>
                    <MedicationEntry label="1 x Noget 75mg" defaultActive />
                    <MedicationEntry label="3 x Noget 150mg" />
                </div>
            </div>

            {/* NOON */}
            <div className={styles.currentMedicationNoon}>
                <div className={styles.label}>
                    <i className="fa fa-smile-o" />
                    <span>Middag</span>
                </div>   
                <div className={styles.entries}>
                    <MedicationEntry label="2 x Fiskeolie" />
                </div>
            </div>

            {/* NIGHT */}
            <div className={styles.currentMedicationNight}>
                <div className={styles.label}>
                    <i className="fa fa-moon-o" />
                    <span>Aften</span>
                </div>
                <div className={styles.entries}>
                    <MedicationEntry label="Ingen medicin planlagt" />
                </div>
            </div>

        </section>
    )

}

export default CurrentMedication