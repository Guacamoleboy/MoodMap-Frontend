// Pathing
// _______
// src/components/shared/hero/Hero.jsx

import styles from './Hero.module.css'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

function Hero() {
    return (
        <section className={styles.heroWrapper}>
            <HeroLeft />
            <HeroRight />
        </section>
    )
}

export default Hero