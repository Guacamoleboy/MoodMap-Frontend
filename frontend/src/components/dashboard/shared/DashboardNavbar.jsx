// Pathing
// _______
// src/components/dashboard/shared/DashboardNavbar.jsx

import { useState } from 'react'
import { getUser, useAuth } from '@hooks/useAuth'
import DashboardAvatar from './DashboardAvatar'
import styles from './DashboardNavbar.module.css'

const NAV_ITEMS = {
    Admin:     ['Oversigt', 'Data', 'Service & Tools', 'Access'],
    Moderator: ['Oversigt', 'Brugere', 'Tickets', 'Internt'],
    Support:   ['Oversigt', 'Brugere', 'Tickets & Support', 'Internt'],
    Clinician: ['Oversigt', 'Patienter', 'Aftaler', 'Medicin', 'Beskeder'],
    Clinic:    ['Oversigt', 'Afdeling & Hold', 'Redigér data', 'Beskeder'],
    Client:    ['Oversigt', 'Aftaler', 'Min Medicin', 'Skemaer'],
}

const DashboardNavbar = () => {

    // ---- SETUP ----------------------------------------------------------------------------------------------------------

    const user = getUser()
    const { logout } = useAuth()
    const [avatarOpen, setAvatarOpen] = useState(false)
    const items = NAV_ITEMS[user?.role] ?? []

    // ---- RETURN ---------------------------------------------------------------------------------------------------------

    return (
        <nav className={styles.navbar}>

            {/* LEFT */}
            <div className={styles.left} />

            {/* CENTER */}
            <ul className={styles.center}>
                {items.map((item) => (
                    <li key={item} className={styles.item}>
                        <button className={styles.link}>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>

            {/* RIGHT */}
            <div className={styles.right}>
                <DashboardAvatar
                    user={user}
                    open={avatarOpen}
                    onToggle={() => setAvatarOpen(prev => !prev)}
                    onLogout={logout}
                />
            </div>

        </nav>
    )
}

export default DashboardNavbar