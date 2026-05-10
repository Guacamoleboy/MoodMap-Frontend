// Pathing
// _______
// src/components/dashboard/shared/DashboardAvatar.jsx

import { useAvatarMenu } from './DashboardAvatar.hooks'
import styles from './DashboardAvatar.module.css'

const DashboardAvatar = ({ user, open, onToggle, onLogout }) => {

    // ---- SETUP ----------------------------------------------------------------------------------------------------------

    const { ref } = useAvatarMenu(open, onToggle)

    // ---- RETURN ---------------------------------------------------------------------------------------------------------

    return (
        <div className={styles.avatar} ref={ref}>

            {/* BUTTON + AVATAR DISPLAY */}
            <button className={styles.trigger} onClick={onToggle}>
                
                <div className={styles.circle}>
                    {user?.username?.[0]?.toUpperCase()}
                </div>
                
            </button>

            {/* SUB MENU */}
            {open && (
                <div className={styles.menu}>

                    {/* SUB MENU ENTRY */}
                    <p className={styles.username}>
                        {user?.username}
                    </p>
                    
                    {/* SUB MENU ENTRY */}
                    <p className={styles.role}>
                        {user?.role}
                    </p>
                    
                    {/* SUB MENU DIVIDER */}
                    <hr className={styles.divider} />

                    {/* SUB MENU ENTRY */}
                    <button className={styles.menuItem}>
                        Min profil
                    </button>

                    {/* SUB MENU ENTRY */}
                    <button className={styles.menuItem}>
                        Indstillinger
                    </button>

                    {/* SUB MENU DIVIDER */}
                    <hr className={styles.divider} />

                    {/* SUB MENU ENTRY */}
                    <button className={`${styles.menuItem} ${styles.logout}`} onClick={onLogout}>
                        Log ud
                    </button>
                    
                </div>
            )}

        </div>
    )
}

export default DashboardAvatar