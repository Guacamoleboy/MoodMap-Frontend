// Pathing
// _______
// src/components/devlog/days/Day13.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day13 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 13
                </span>
                <h1 className={styles.headerTitle}>
                    Devlog endpoint bliver til virkelighed
                </h1>
                <p className={styles.headerDescription}>
                    Jeg har tidligere lavet en fin nok Devlog, men ifm refactor og total omskrivning af projektet fra <Highlight size="m" value="Next.js" /> til <Highlight size="m" value="ReactJS" /> skal jeg lave Devlog setup igen.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Devlog bliver til.
                </p>

                <p className={styles.logText}>
                    Jeg prøver at tænke over hvordan jeg effektiverer Devlog og hvordan folder pathing bør være ift <Highlight size="m" value="SoC" />. Jeg bruger som altid MEGET tid på det, og mindre tid på at komme i gang med <Highlight size="m" value="UI / UX" /> heraf.
                </p>

                <p className={styles.logText}>
                    Da det er på plads, kan jeg komme i gang med en masse components, og opsætning af dem samt deres funktion og relation til hinanden. Dette gør det nemt at tilføje mine Devlogs en efter en fremfor at skulle lave en million kode hver gang. Fx opdeles <Highlight size="m" value="Highlight.jsx" /> i sin egen component, så det kan bruges effektivt i mine Devlogs uden at skulle skrive 900 linjer kode for én highlight.
                </p>

                <DevlogImage
                    src="/images/devlog/13/1.png"
                    size="s"
                />

                <DevlogImage
                    src="/images/devlog/13/4.png"
                    size="l"
                />

                <DevlogImage
                    src="/images/devlog/13/5.png"
                    size="l"
                />

                <DevlogImage
                    src="/images/devlog/13/6.png"
                    size="s"
                />

                <p className={styles.logHeader}>
                    Next.js vs ReactJS devlog
                </p>

                <p className={styles.logText}>
                    Eftersom devlogen skal omskrives totalt, kan jeg lege lidt mere med UI / UX følelsen heraf. Derfor <Highlight size="m" value="prøver jeg noget nyt" /> som kan ses herunder.
                </p>

                <DevlogImage
                    src="/images/devlog/13/2.png"
                    size="l"
                />

                <DevlogImage
                    src="/images/devlog/13/3.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Routing mangler dog..
                </p>

                <p className={styles.logText}>
                    Som <Highlight size="m" value="titlen hentyder til" /> mangler jeg nu kun at tilføje min devlog som endpoint i routing. Den er <Highlight size="m" value="ikke protected" /> og kan rammes af alle som vil se den - hvilket er meningen.
                </p>

                <DevlogImage
                    src="/images/devlog/13/8.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Afslutning
                </p>

                <p className={styles.logText}>
                    Som altid afsluttes projektet i god ro og orden, og der tænkes videre når projektet er <Highlight size="m" value="pushed til main branchen" />.
                </p>

            </div>

        </section>
    )

}

export default Day13