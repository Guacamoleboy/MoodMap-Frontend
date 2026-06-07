// Pathing
// _______
// src/components/devlog/days/Day6.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day6 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 6
                </span>
                <h1 className={styles.headerTitle}>
                    KanBan, CORS og CI / CD Deployment.
                </h1>
                <p className={styles.headerDescription}>
                    Dagen i dag bruges fortsat på at tænke over hvordan jeg kan optimere mit flow ift manglende motivation samt opsætning af CORS trods det nok ikke er nødvendigt.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    KanBan fortsat
                </p>

                <p className={styles.logText}>
                    Jeg starter ud med at skrive lidt yderligere på mit KanBan board ift at få <Highlight size="m" value="overblik" /> over resultat i sidste ende her til <Highlight size="m" value="Juni" /> når projektet skal afleveres.
                </p>

                <DevlogImage
                    src="/images/devlog/6/1.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    CORS & Deployment Bugs ..
                </p>

                <p className={styles.logText}>
                    Jeg kiggede i dag også på <Highlight size="m" value="CORS" />. Jeg brugte som altid for lang tid på at forstå CORS, og konceptet bag samt hvordan jeg kunne optimere det mere end jeg burde.
                </p>

                <p className={styles.logText}>
                    Da jeg lagde mærke til det stoppede jeg og endte med en version som bare tilladte alle adgang - hvilket ikke er optimalt, men noget som vores <Highlight size="m" value="ToolBox" /> selv anbefaler ift projektet.
                </p>

                <DevlogImage
                    src="/images/devlog/6/2.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Jeg pusher til main og ser at <Highlight size="m" value="CI / CD Pipeline" /> fungerer som forventet og at min API lægger sig online som forventet via Watchtower.
                </p>

                <DevlogImage
                    src="/images/devlog/6/3.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Jeg opdager hurtigt noget <Highlight size="m" value="ikke stemmer overens" />, da mine ændringer aldrig fungerer. Derfor bruger jeg min versions mere effektivt for at sikre mig, at jeg kan se min API faktisk opdaterer korrekt. Jeg prøver og prøver og til sidst ved version 1.2.0 lykkedes det mig effektivt at få CORS og deployment sat op effektivt nok.
                </p>

                <DevlogImage
                    src="/images/devlog/6/4.png"
                    size="l"
                />

                <DevlogImage
                    src="/images/devlog/6/5.png"
                    size="l"
                />

                <DevlogImage
                    src="/images/devlog/6/6.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Jeg mangler så kun at teste at min fetch fungerer korrekt, og <Highlight size="m" value="JWT" /> lægger sig i <Highlight size="m" value="localStorage" /> selvom <Highlight size="m" value="Cookie" /> nok er mere effektivt og sikkert.. Gider ikke bruge for meget tid på det.
                </p>

                <DevlogImage
                    src="/images/devlog/6/7.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Hvorfor localStorage og ikke <Highlight size="m" value="sessionStorage" />?? Session som det lyder - er kun pr session og gemmes ikke efter lukning. Derfor sættes det som udgangspunkt i localStorage selvom Cookie er mere sikkert ift JWT injection via localStorage hvilket potentielt kan give Cyber Security Breach.
                </p>

                <p className={styles.logHeader}>
                    Afslutning
                </p>

                <p className={styles.logText}>
                    Dagen afsluttes. Har lavet nogle gode ting, og kommet fint i mål føler jeg.
                </p>

            </div>

        </section>
    )

}

export default Day6