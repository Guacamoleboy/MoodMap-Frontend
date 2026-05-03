// Pathing
// _______
// src/components/no-match/NoMatch.jsx

import NoMatchActions from './NoMatchActions'
import styles from './NoMatch.module.css'

const NoMatch = () => (
    <div className={styles.wrapper}>
        <h1>Øv.. Der opstod desværre en fejl.</h1>
        <p>Siden findes ikke. Prøv venligst igen eller brug knappen herunder for at komme tilbage.</p>
        <NoMatchActions />
    </div>
)

export default NoMatch