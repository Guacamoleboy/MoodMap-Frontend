// Pathing
// _______
// src/components/index/hero/HeroLeft.jsx

import styles from './Hero.module.css'

const HeroLeft = () => {
    return (
        <div className={styles.heroLeft}>
            <h1>MoodMap.</h1>

            <h2>Keeping track of YOUR mood.</h2>

            <p>
                MoodMap hjælper dig med at forstå dine følelser,
                opdage mønstre i din hverdag og skabe bedre mentale vaner
                gennem simpel og overskuelig tracking.
            </p>

        </div>
    )
}

export default HeroLeft