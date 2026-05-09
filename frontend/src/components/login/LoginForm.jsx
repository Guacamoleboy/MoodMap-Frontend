// Pathing
// _______
// src/components/login/LoginForm.jsx

import styles from './Login.module.css'

const LoginForm = ({ onSubmit, children }) => (
    <form className={styles.form} onSubmit={onSubmit}>

        <div className={styles.fields}>

            {/* ENTRY */}
            <div className={styles.field}>
                <input type="text" name="username" placeholder="Brugernavn" />
            </div>

            {/* ENTRY */}
            <div className={styles.field}>
                <input type="password" name="password" placeholder="Adgangskode" />
            </div>

        </div>
        
        {/* CHILD */}
        {children}

    </form>
)

export default LoginForm