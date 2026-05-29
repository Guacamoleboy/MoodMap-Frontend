// Pathing
// _______
// src/components/devlog/days/Day7.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'

const Day7 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 7
                </span>
                <h1 className={styles.headerTitle}>
                    Lottie Animations, Protected Routes og misc optimeringer.
                </h1>
                <p className={styles.headerDescription}>
                    Dagen bruges effektivt på optimering af bl.a <Highlight size="m" value="Lottie Player" />, custom animations og optimering af diverse shared components.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    API Endpoints
                </p>

                <p className={styles.logText}>
                    Dagen startes ud med at lave <Highlight size="m" value="API endpoints" /> som jeg forventer projektet skal have og gøre brug af.
                </p>

                <DevlogImage
                    src="/devlog/7/1.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Shared eller lokal component?
                </p>

                <p className={styles.logText}>
                    Jeg opdager hurtigt ifm flere routes og endpoints, at jeg gentager nogen navigation knapper og funktionaliteter. Derfor rykkes disse ud i shared components som er <Highlight size="m" value="generiske" /> fremfor at skulle skrive samme kode og om igen. DRY.
                </p>

                <DevlogImage
                    src="/devlog/7/2.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Outlet fra React.
                </p>

                <p className={styles.logText}>
                    Jeg lærer om <Highlight size="m" value="Outlet" /> fra React kontra <Highlight size="m" value="Children" />. Jeg føler det er mere korrekt, og mere effektivt. Projektet omskrives så projektet følger samme arkitektur i fremtiden.
                </p>

                <DevlogImage
                    src="/devlog/7/3.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Lottie Deprecated ?
                </p>

                <p className={styles.logText}>
                    Da jeg lavede min Lottie Animation i Next.js frontend applikationen var Lottie <Highlight size="m" value="deprecated" />. Derfor fandt jeg en som ikke var, og som var bygget til React specfikt. Det gør broiler code mindre, og mere effektivt.
                </p>

                <DevlogImage
                    src="/devlog/7/5.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Protected routes
                </p>

                <DevlogImage
                    src="/devlog/7/4.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Til at slutte af med sætter jeg protected routes op i min router, da jeg nu har fået CORS på min backend og <Highlight size="m" value="FETCH" /> bliver brugt. Dette inkluderer <Highlight size="m" value="JWT Payload" />, og role access heraf.
                </p>

                <p className={styles.logText}>
                    Dagen afsluttes.
                </p>

            </div>

        </section>
    )

}

export default Day7