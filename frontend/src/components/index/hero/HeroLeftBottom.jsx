// Pathing
// _______
// src/components/shared/hero/HeroLeftBottom.jsx

import styles from './Hero.module.css'

function HeroLeftBottom() {
    return (
        <div className={styles.heroLeftBottom}>
            <p>Samarbejder med Lægemiddelstyrelsen</p>
            <img src="/images/components/hero/laegemiddelstyrelsen-icon.png" alt="Lægemiddelstyrelsen" />
        </div>
    )
}

export default HeroLeftBottom