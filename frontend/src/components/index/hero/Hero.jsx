// Pathing
// _______
// src/components/index/hero/Hero.jsx

import styles from './Hero.module.css'

import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.heroContainer}>
                <HeroLeft />
                <HeroRight />
            </div>
        </section>
    )
}

export default Hero