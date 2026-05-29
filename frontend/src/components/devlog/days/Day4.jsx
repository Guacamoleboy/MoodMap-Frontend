// Pathing
// _______
// src/components/devlog/days/Day4.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day4 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 4
                </span>
                <h1 className={styles.headerTitle}>
                    React Router og Layout tid!
                </h1>
                <p className={styles.headerDescription}>
                    Det er blevet tid til at kigge på shared layout samt <Highlight size="m" value="protected routing" />. 
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Need vs Nice..
                </p>

                <p className={styles.logText}>
                    Der reflekteres  over, om ting er nødvendige og fokuseres derfor på at lave ting som har reel indflydelse så jeg kan komme igang med CORS opsætning og Backend kald og læring heraf.
                </p>

                <p className={styles.logText}>
                    Derfor <Highlight size="m" value="slettes Hero.jsx" /> som udgangspunkt, da den ikke har nogen reel værdi for projektet, da det ikke skal afleveres, men blot opfylde læringsmål.
                </p>

                <DevlogImage
                    src="/devlog/4/1.png"
                    size="s"
                />

                <p className={styles.logHeader}>
                    Routing opsætning
                </p>

                <DevlogImage
                    src="/devlog/4/2.png"
                    size="s"
                />

                <p className={styles.logText}>
                    De første routes sættes op, og jeg lærer kort om protected routes i React via <Highlight size="m" value="Router" />.
                </p>

                <DevlogImage
                    src="/devlog/4/2.png"
                    size="m"
                />

                <p className={styles.logText}>
                    Disse routes gør brug af Pages og Layouts, som components som udgangspunkt bruger. Derfor linker de til hinanden, og <Highlight size="m" value="<Outlet />" /> sikrer at child heri loader som component fremfor Page.
                </p>

                <DevlogImage
                    src="/devlog/4/3.png"
                    size="s"
                />

                <DevlogImage
                    src="/devlog/4/4.png"
                    size="s"
                />

                <p className={styles.logHeader}>
                    Global vs Local - .module.css
                </p>

                <DevlogImage
                    src="/devlog/4/5.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Jeg lærer kort om <Highlight size="m" value=".module.css" /> samt hvorfor det er effektivt ift React components, samt hvordan det skal bruges i components. Dette implementeres, og projektet er sat fint op hermed.
                </p>

                <p className={styles.logHeader}>
                    Dagen afsluttes hermed. Som altid tænker jeg videre i løbet af dagen, men som udgangspunkt sluttes dagen her.
                </p>

            </div>

        </section>
    )

}

export default Day4