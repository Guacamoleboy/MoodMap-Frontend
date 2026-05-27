// Pathing
// _______
// src/components/shared/footer/Footer.jsx

import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <p className={styles.footerText}>
                    MoodMap — Keeping track of YOUR mood.
                </p>

                <div className={styles.footerLinks}>
                    <NavLink
                        to='/wontadd'
                        className={styles.footerLink}
                    >
                        Privatliv
                    </NavLink>

                    <NavLink
                        to='/wontadd'
                        className={styles.footerLink}
                    >
                        Cookies
                    </NavLink>

                    <NavLink
                        to='/wontadd'
                        className={styles.footerLink}
                    >
                        Terms of Use
                    </NavLink>

                    <NavLink
                        to='/wontadd'
                        className={styles.footerLink}
                    >
                        Lovgivning
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer