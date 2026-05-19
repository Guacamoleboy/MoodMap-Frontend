// Pathing
// _______
// src/components/devlog/days/Day2.jsx

// Pathing
// _______
// src/components/devlog/days/Day1.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'

const Day2 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 2
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
                    Random Log Title
                </p>

                <DevlogImage
                    src="/devlog/2/1.png"
                    size="s"
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

export default Day2