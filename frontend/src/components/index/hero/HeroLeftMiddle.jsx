// Pathing
// _______
// src/components/shared/hero/HeroLeftMiddle.jsx

import styles from './Hero.module.css'

function HeroLeftMiddle() {
    return (
        <div className={styles.heroLeftMiddle}>

            {/* Left */}
            <div className={styles.heroLeftMiddleCol}>
                <div className={styles.heroLeftMiddleColItem}>
                    <p>"Det her er annes besked lol.. Forstår I det?"</p>
                </div>
                <div className={styles.heroLeftMiddleColItem}>
                    <img src="/images/components/hero/anne-laegehus.png" alt="Anne Lægehus" />
                </div>
            </div>

            {/* Right */}
            <div className={styles.heroLeftMiddleCol}>
                <div className={styles.heroLeftMiddleColItemSmall}>
                    <i className="fa fa-random" />
                    <p>Anne Mikkelsen</p>
                    <p>Læge</p>
                    <p>Frederiksberg Lægehus</p>
                </div>
                <div className={styles.heroLeftMiddleColItemLarge}>
                    <img src="/images/components/hero/anne.png" alt="Anne Mikkelsen" />
                </div>
            </div>

        </div>
    )
}

export default HeroLeftMiddle