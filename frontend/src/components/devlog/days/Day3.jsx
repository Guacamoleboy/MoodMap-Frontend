// Pathing
// _______
// src/components/devlog/days/Day3.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day3 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 3
                </span>
                <h1 className={styles.headerTitle}>
                    Opsætning, artiketur fortsat, og reflektioner om projektets fremtid.
                </h1>
                <p className={styles.headerDescription}>
                    Denne dag bliver brugt på opsætning af projektet, da jeg mener at opsætning i starten sikrer, at projektet kan udvikles hurtigere i sidste ende fremfor at skulle omskrives for meget. Visual Studio Code er ikke helt så effektiv til <Highlight size="m" value="Refactor" /> som fx IntelliJ var.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Shared, feature, folder structure mm.
                </p>

                <p className={styles.logText}>
                    Jeg har set en masse <Highlight size="m" value="YouTube" /> videoer vedr ReactJS samt Next.js for at forstå hvordan man tænker i ReactJS. Jeg har tidligere arbejdet med det, men jeg har ikke specifikt kigget på hvordan man effektiverer og gør ting KORREKT.
                </p>

                <p className={styles.logText}>
                    Derfor kigger jeg på hvordan <Highlight size="m" value="Senior React Developers" /> laver Folder Structure, og hvad de forventer af <Highlight size="m" value="Juniors" />. Dette inkluderer ting som module.css og hooks.js filer som jeg kan se vi skal lære senere om et par uger. Dog ikke hooks.js, men det er noget jeg kan se idéen i - specielt ift SoC og DRY.
                </p>

                <DevlogImage
                    src="/images/devlog/3/1.png"
                    size="s"
                />

                <p className={styles.logText}>
                    Her kan se hvordan ting typisk er delt op. Man kan enten lave en <Highlight size="m" value="shared / feature" /> folder structure, men jeg har valgt at lave en opdeling via <Highlight size="m" value="src / app" /> og <Highlight size="m" value="components/" /> folder hvor hver component enten er delt ind som shared eller pr page. Denne folder holder så alt med relation til componenten.
                </p>

                <p className={styles.logHeader}>
                    Java vs JavaScript vs ReactJS
                </p>
                
                <DevlogImage
                    src="/images/devlog/3/3.png"
                    size="m"
                />

                <p className={styles.logText}>
                    Jeg har tidligere været <Highlight size="m" value="MEGET glad for Java" /> og måden at kode Java på. Generelt kommer jeg fra PHP og ren JavaScript / HTML samt Java, så idéen om at skulle skrive params osv anderledes skal tænkes gennem og forståes.
                </p>

                <p className={styles.logText}>
                    Jeg sætter mig i dybden med hvordan det forventes at forståes, og så går jeg i gang med at lave <Highlight size="m" value="javascriptreact" /> snippes ift opsætning at projektet og ren forståelse for ReactJS så godt jeg nu kan.    
                </p>

                <DevlogImage
                    src="/images/devlog/3/2.png"
                    size="m"
                />

                <DevlogImage
                    src="/images/devlog/3/4.png"
                    size="m"
                />

                <DevlogImage
                    src="/images/devlog/3/5.png"
                    size="m"
                />

                <p className={styles.logHeader}>
                    Afslutning og reflektioner
                </p>

                <p className={styles.logText}>
                    Eftersom projektet nu er sat effektivt op, kan der fokuseres på kodning og components samt UI herefter. Der skal også laves noget <Highlight size="m" value="CORS" /> selvom domænerne kører på samme server. Dette er primært ift development. Normalt ville det ikke være nødvendigt, da de som sagt kører på samme server. Så Backend kald går til sig selv. Derfor er CORS ikke nødvendigt da vi kører SOP.
                </p>

                <p className={styles.logText}>
                    Dagen afsluttes i god ro og orden.
                </p>

            </div>

        </section>
    )

}

export default Day3