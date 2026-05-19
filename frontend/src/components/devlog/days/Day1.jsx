// Pathing
// _______
// src/components/devlog/days/Day1.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day1 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 1
                </span>
                <h1 className={styles.headerTitle}>
                    Title test
                </h1>
                <p className={styles.headerDescription}>
                    Description test
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Random Log Title
                </p>

                <p className={styles.logText}>
                    Random Log <Highlight size="m" value="Text" />
                </p>

                <DevlogImage
                    src="/devlog/1/1.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Random Log Title
                </p>

                <p className={styles.logText}>
                    Random Log Title
                </p>

                <p className={styles.logText}>
                    Random Log Title
                </p>

            </div>




        </section>
    )

}

export default Day1