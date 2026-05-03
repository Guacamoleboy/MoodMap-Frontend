// Pathing
// _______
// src/components/shared/announcementbar/AnnouncementBar.jsx

import styles from './AnnouncementBar.module.css'

function AnnouncementBar({ message }) {

    // ------------ SETUP -------------------------------------------------------

    // N/A

    // ------------ RETURN ------------------------------------------------------

    return (
        <div className={styles.announcementBar}>
            <div className={styles.announcementTrack}>
                <img src="/images/icons/danish-flag.png" alt="Danish Flag" />
                <p>{message}</p>
                <img src="/images/icons/danish-flag.png" alt="Danish Flag" />
            </div>
        </div>
)

}

export default AnnouncementBar