// Pathing
// _______
// src/components/dashboard/shared/DashboardNavbar.jsx

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getUser, useAuth } from '@hooks/useAuth'
import DashboardAvatar from './DashboardAvatar'
import styles from './DashboardNavbar.module.css'

const NAV_ITEMS = {
    Admin: [
        { label: 'Oversigt', path: '/dashboard/admin' },
        { label: 'Data', path: '/dashboard/admin/data' },
        { label: 'Service & Tools', path: '/dashboard/admin/tools' },
        { label: 'Access', path: '/dashboard/admin/access' },
    ],
    Moderator: [
        { label: 'Oversigt', path: '/dashboard/moderator' },
        { label: 'Brugere', path: '/dashboard/moderator/users' },
        { label: 'Tickets', path: '/dashboard/moderator/tickets' },
        { label: 'Internt', path: '/dashboard/moderator/internal' },
    ],
    Support: [
        { label: 'Oversigt', path: '/dashboard/support' },
        { label: 'Brugere', path: '/dashboard/support/users' },
        { label: 'Tickets & Support', path: '/dashboard/support/tickets' },
        { label: 'Internt', path: '/dashboard/support/internal' },
    ],
    Clinician: [
        { label: 'Oversigt', path: '/dashboard/clinician' },
        { label: 'Patienter', path: '/dashboard/clinician/patients' },
        { label: 'Aftaler', path: '/dashboard/clinician/appointments' },
        { label: 'Medicin', path: '/dashboard/clinician/medicine' },
        { label: 'Beskeder', path: '/dashboard/clinician/messages' },
    ],
    Clinic: [
        { label: 'Oversigt', path: '/dashboard/clinic' },
        { label: 'Afdeling & Hold', path: '/dashboard/clinic/team' },
        { label: 'Redigér data', path: '/dashboard/clinic/data' },
        { label: 'Beskeder', path: '/dashboard/clinic/messages' },
    ],
    Client: [
        { label: 'Oversigt', path: '/dashboard/client' },
        { label: 'Aftaler', path: '/dashboard/client/appointments' },
        { label: 'Min Medicin', path: '/dashboard/client/medicine' },
        { label: 'Skemaer', path: '/dashboard/client/forms' },
    ],
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
                    <li key={item.path} className={styles.item}>

                        <NavLink
                            to={item.path}
                            end={item.label === 'Oversigt'}
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.link} ${styles.active}`
                                    : styles.link
                            }
                        >
                            {item.label}
                        </NavLink>

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