// Pathing
// _______
// src/components/shared/hero/HeroRight.jsx

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const images = [
    '/images/components/hero/1.jpg',
    '/images/components/hero/2.jpg',
    '/images/components/hero/3.jpg',
]

function HeroRight() {

    // ------------ SETUP -------------------------------------------------------

    const [currentImage, setCurrentImage] = useState(0)

    // ------------ EVENTS ------------------------------------------------------

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    // ------------ RETURN ------------------------------------------------------

    return (
        <div className={styles.heroRight}>
            <div className={styles.heroRightBox}>
                <img src={images[currentImage]} alt="MoodMap preview" className={styles.heroRightImage} />
            </div>
        </div>
    )
}

export default HeroRight