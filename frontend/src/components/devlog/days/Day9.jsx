// Pathing
// _______
// src/components/devlog/days/Day9.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day9 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 9
                </span>
                <h1 className={styles.headerTitle}>
                    Dashboard opsættes + JWT Drop
                </h1>
                <p className={styles.headerDescription}>
                    Dagen er sat af til at få <Highlight size="m" value="dashboard" /> op og køre. Altså det lag man når til når man er logget ind. Der hvor hele applikationen primærert er.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Dashboard opsætning
                </p>

                <p className={styles.logText}>
                    Jeg gør mig som altid en del overvejelser angående opsætning og arkitektur af folders og hvad jeg tidligere lærte fra en <Highlight size="m" value="Senior React Developer" /> anhående SoC og <Highlight size="m" value=".hooks.js" /> filer.
                </p>

                <DevlogImage
                    src="/images/devlog/9/3.png"
                    size="l"
                />

                <DevlogImage
                    src="/images/devlog/9/2.png"
                    size="s"
                />

                <p className={styles.logText}>
                    Dette bruges dermed, og folderen sættes op som forventet.
                </p>

                <p className={styles.logText}>
                    Dashboard sættes op med global css <Highlight size="m" value="className" /> toggle, og children heri bruger <Highlight size="m" value=".module.css" /> som forventet jf undervisningsmaterialet.
                </p>

                <DevlogImage
                    src="/images/devlog/9/1.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Sub Menu i Navbar
                </p>

                <p className={styles.logText}>
                    Eftersom jeg har en navbar som er generisk men alligevel pr role har jeg behov for en sub menu som toggles i højre side. Denne tillader log out, settings og diverse information fra endpoint <Highlight size="m" value="api.guacamoleboy.dk/v1/auth/me" />.
                </p>

                <DevlogImage
                    src="/images/devlog/9/6.png"
                    size="l"
                />

                <DevlogImage
                    src="/images/devlog/9/4.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Afslutning
                </p>

                <p className={styles.logText}>
                    Dagen afsluttes, og <Highlight size="m" value="vite.config.js" /> opdateres med den nye folder pathing for at følge arkitekturen.
                </p>

                <DevlogImage
                    src="/images/devlog/9/7.png"
                    size="l"
                />

            </div>

        </section>
    )

}

export default Day9