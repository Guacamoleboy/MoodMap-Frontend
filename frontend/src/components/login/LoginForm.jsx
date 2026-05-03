// Pathing
// _______
// src/components/login/LoginForm.jsx

import styles from './Login.module.css'

const LoginForm = ({ onSubmit, error }) => (
    <form className={styles.form} onSubmit={onSubmit}>

        <div className={styles.fields}>

            <div className={styles.field}>
                <input type="text" id="username" name="username" placeholder="Brugernavn" />
            </div>
            <div className={styles.field}>
                <input type="password" id="password" name="password" placeholder="Adgangskode" />
            </div>

        </div>

        {/* IMPLEMENT LATER! */}
        {error && <p className={styles.error}>{error}</p>}

    </form>
)

export default LoginForm