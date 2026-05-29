// Pathing
// _______
// src/components/devlog/days/Day11.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day11 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 11
                </span>
                <h1 className={styles.headerTitle}>
                    Components, components og ... components?
                </h1>
                <p className={styles.headerDescription}>
                    Tiden bruges på components og selvfølgelig tilføjeslen af endpoints hertil.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Første components dannes.
                </p>

                <p className={styles.logText}>
                    Alt er nu på plads.. CORS, <Highlight size="m" value="CI / CD" />, Fetch, Arkitektur mm. Dermed kan components starte, og jeg kan forhåbentlig få lidt mere.. visuelt at kigge på. Selvfølgelig er der lavet meget, men det ses ikke endnu, da det meste er opsætning og lærning fremfor reele UI / UX oplevelser.
                </p>

                <DevlogImage
                    src="/devlog/11/1.png"
                    size="s"
                />

                <DevlogImage
                    src="/devlog/11/2.png"
                    size="l"
                />

                <DevlogImage
                    src="/devlog/11/3.png"
                    size="l"
                />

                <DevlogImage
                    src="/devlog/11/4.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Darkmode og Lightmode implementeres
                </p>

                <p className={styles.logText}>
                    Da knapperne og funktionaliteten er på plads kan jeg nu lave lidt CSS ift darkmode og lightmode. Dermed gøres dette. Noget pr component i <Highlight size="m" value=".module.css" /> og andet globalt.
                </p>

                <DevlogImage
                    src="/devlog/11/5.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Disse tilføjelser skal så have et sted at .. bo? Hvorfor routes til diverse oprettes yderligere til sidst.
                </p>

                <DevlogImage
                    src="/devlog/11/5.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Afslutning på dagen
                </p>

                <p className={styles.logText}>
                    Dagen afsluttes <Highlight size="m" value="effektivt som altid" />.
                </p>

            </div>

        </section>
    )

}

export default Day11