// Pathing
// _______
// src/components/dashboard/client/medication/Reminders.jsx

import styles from './Reminders.module.css'
import { Link } from 'react-router'

const Reminders = () => {

    // ------------ DATA ------------------------------------------------------

    const reminders = 1

    // ------------ RETURN ----------------------------------------------------

    return (
        <section className="dashboard-card">

            {/* HEADER */}
            <div className="dashboard-card-header">
                <h2>Påmindelser</h2>
                <p>
                    Oversigt over kommende medicinpåmindelser og planlagte tider.
                </p>
            </div>

            {/* CENTER */}
            <div className={styles.reminderEntry}>
                Du har <span className={styles.reminderValue}>{reminders}</span> nye påmindelser!
            </div>

            {/* BUTTON */}
            <div className={styles.reminderBottom}>

                {/* PREVIOUS */}
                <Link
                    to="/wontadd"
                    className="moodmap-button secondary s"
                >
                    LÆS TIDLIGERE
                </Link>

                {/* READ */}
                {reminders > 0 && (
                    <Link
                        to="/wontadd"
                        className="moodmap-button primary s"
                    >
                        LÆS
                    </Link>
                )}

            </div>

        </section>
    )

}

export default Reminders