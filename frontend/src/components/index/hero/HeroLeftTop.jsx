// Pathing
// _______
// src/components/shared/hero/HeroLeftTop.jsx

import styles from './Hero.module.css'

function HeroLeftTop() {
    return (
        <div className={styles.heroLeftTop}>
            <h1>Keeping track of</h1>
            <h1><span className={styles.moodmapOrange}>YOUR</span> mood.</h1>
            <p className={styles.heroSubtext}>
                Forbinder data direkte mellem klienter og læger for bedre vurdering af forløb, medicin og velvære.
            </p>
        </div>
    )
}

export default HeroLeftTop