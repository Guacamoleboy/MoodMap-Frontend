// Pathing
// _______
// src/components/login/Login.jsx

import styles from './Login.module.css'
import LoginForm from './LoginForm'
import LoginActions from './LoginActions'

const Login = ({ onSubmit, loading }) => (
    <section className={styles.wrapper}>
        
        {/* LEFT */}
        <div className={styles.left}>
            <h1>Hey - Hov!</h1>
            <p>Denne side kræver at du har adgang. Log venligst ind.</p>

            {/* Form */}
            <LoginForm onSubmit={onSubmit}>

                <LoginActions loading={loading} />

            </LoginForm>

        </div>

        {/* RIGHT */}
        <div className={styles.right}>
            <img src="/images/logo/logo-svg.svg" alt="Logo" />
        </div>

    </section>
);

export default Login;