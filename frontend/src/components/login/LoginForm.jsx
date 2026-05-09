// Pathing
// _______
// src/components/login/LoginForm.jsx

import styles from './Login.module.css'

const LoginForm = ({ onSubmit, error, children }) => (

    <form className={styles.form} onSubmit={onSubmit}>

        <div className={styles.fields}>

            {/* Input */}
            <div className={styles.field}>
                <input
                    type="text"
                    name="username"
                    placeholder="Brugernavn"
                />
            </div>

            {/* Input */}
            <div className={styles.field}>
                <input
                    type="password"
                    name="password"
                    placeholder="Adgangskode"
                />
            </div>

        </div>

        {/* Error */}
        {error && <p className={styles.error}>{error}</p>}

        {/* Buttons */}
        {children}

    </form>
);

export default LoginForm;