// Pathing
// _______
// src/components/shared/hero/HeroLeft.jsx

import styles from './Hero.module.css'
import HeroLeftTop from './HeroLeftTop'
import HeroLeftMiddle from './HeroLeftMiddle'
import HeroLeftBottom from './HeroLeftBottom'

function HeroLeft() {
    return (
        <div className={styles.heroLeft}>
            <HeroLeftTop />
            <HeroLeftMiddle />
            <HeroLeftBottom />
        </div>
    )
}

export default HeroLeft