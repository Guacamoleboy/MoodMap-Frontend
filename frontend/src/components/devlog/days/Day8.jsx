// Pathing
// _______
// src/components/devlog/days/Day8.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day8 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 8
                </span>
                <h1 className={styles.headerTitle}>
                    Notifikation ift Error Handle og UI Feedback
                </h1>
                <p className={styles.headerDescription}>
                    Som i alle mine tidligere projekter laver jeg en notifikation som primært bliver brugt til <Highlight size="m" value="Error Feedback" /> som ikke er 404 specifik eller tilsvarende http response specifik. Dette sikrer solid UI, og bruger feedback, som alle kan forholde sig til.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Notification
                </p>

                <DevlogImage
                    src="/devlog/8/1.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Notifikation opsættes jf tidligere opsat arkitektur og sikres at den fungerer samt bruger <Highlight size="m" value="global :root" /> colors som forventet.
                </p>

                <DevlogImage
                    src="/devlog/8/2.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    API Routes setup + Project Setup
                </p>

                <p className={styles.logText}>
                    For at holde arkitekturen ens opdateres dokumenter løbende. Her opdateres vite.config.js som tillader at jeg bruger <Highlight size="m" value="@" /> foran import fremfor <Highlight size="m" value="../../" /> osv. Det er mere effektivt, og skaber bedre overblik og fælles arkitektur føler jeg.
                </p>

                <DevlogImage
                    src="/devlog/8/3.png"
                    size="s"
                />

                <DevlogImage
                    src="/devlog/8/4.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Herefter opsættes de sidste api endpoints og routes hertil, og så er dagen sådan set gået. Dagen afsluttes.
                </p>

            </div>

        </section>
    )

}

export default Day8