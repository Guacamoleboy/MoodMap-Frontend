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
                    Frontend Project Start!
                </h1>
                <p className={styles.headerDescription}>
                    Projektet starter ud, og ideer formes til en reel platform med reele idéer og komplet UI.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Første review, brainstorm og MoodMap FigJam over idé, platform, UI, koncept og framework.
                </p>

                <p className={styles.logText}>
                    Ifm, at jeg tidligere havde startet projektet ud med at lave det som <Highlight size="m" value=".tsx" /> og <Highlight size="m" value="Next.js" />, skulle jeg omskrive og tænke projektet om.
                </p>

                <p className={styles.logTetxt}>
                    Jeg startede ud med at lave et <Highlight size="m" value="FigJam" /> over farver, framework og UI Componenents som kan ses herunder, eller via FigJam link under min <Highlight size="m" value="README.md" /> fil.
                </p>

                <DevlogImage
                    src="/devlog/1/1.png"
                    size="l"
                />

                <DevlogImage
                    src="/devlog/1/2.png"
                    size="m"
                />

                <DevlogImage
                    src="/devlog/1/3.png"
                    size="m"
                />

                <DevlogImage
                    src="/devlog/1/4.png"
                    size="m"
                />

                <p className={styles.logText}>
                    Dette gjorde det nemt for mig at starte, da jeg havde tænkt hele framework og processen igennem <Highlight size="m" value="inden" /> jeg skulle kode. Jeg kendte farver, farvekoder og diverse layout settings. Derfor kunne <Highlight size="m" value=":root" /> sættes nemt op, og projektet omskrives.
                </p>

                <p className={styles.logText}>
                    UI / UX Mockup Figma Template Setup
                </p>

                <p className={styles.logText}>
                    Herefter satte jeg en reel UI / UX Mockup som skal mimic en reel side som den ville skulle kodes. Denne er hermed klar til næste gang jeg laver på projektet.
                </p>

                <DevlogImage
                    src="/devlog/1/5.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Afslutning på dagen...
                </p>

                <p className={styles.logText}>
                    Dagen sluttes af med at projektet lægges lidt væk mens jeg selvfølgelig fortsat tænker over diverse ifm projektet.
                </p>

                <p className={styles.logText}>
                    Dagen forløb stille og roligt, og jeg er fin tilfreds med forløbet indtil videre.
                </p>

            </div>




        </section>
    )

}

export default Day1