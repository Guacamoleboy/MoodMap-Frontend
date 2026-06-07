// Pathing
// _______
// src/components/devlog/days/Day10.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day10 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 10
                </span>
                <h1 className={styles.headerTitle}>
                    Dashboard additional + Settings setup
                </h1>
                <p className={styles.headerDescription}>
                    Dagens fokus er en <Highlight size="m" value="settings menu" /> hvor useTheme bliver implementeres samt yderligere på Dashboard som ikke blev færdigt sidst.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Sidste tilføjelser til Dashboard tilføjes.
                </p>

                <p className={styles.logText}>
                    Jeg starter dagen ud med at kigge på hvad jeg mangler ift Dashboard, og for at komme i mål med denne. Dette inkluderer nogle component folder structures, filer og routes.
                </p>

                <DevlogImage
                    src="/images/devlog/10/1.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Settings menu .. Shared? Private? Admin?
                </p>

                <DevlogImage
                    src="/images/devlog/10/2.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Jeg skal til at lave en settings menu, men skal gøre mig nogle overvejelser over <Highlight size="m" value="roles" /> og hvilke settings de forskellige bør have adgang til. Derfor laves en shared settings layout structure, og så loades children i den korrekte layout / page herefter.
                </p>

                <DevlogImage
                    src="/images/devlog/10/3.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Til sidst blev de som det kan ses herover tilføjet til min routing, og min protected routing via roles. Dette sikrer at det loader som det skal, og role baseret.
                </p>

                <p className={styles.logText}>
                    Der blev oprettet en <Highlight size="m" value="useTheme.js" /> udover dette, som skal toggle fra Settings menuen. Dette implementeres nemt, da body har tag som enten <Highlight size="m" value="dark / light" />. Så en useState og en global state bliver blot brugt.
                </p>

                <DevlogImage
                    src="/images/devlog/10/6.png"
                    size="l"
                />

                <DevlogImage
                    src="/images/devlog/10/5.png"
                    size="l"
                />

                <DevlogImage
                    src="/images/devlog/10/4.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Settings component tænkes gennem
                </p>

                <p className={styles.logText}>
                    Jeg gør mig overvejelser over hvad jeg kunne forestille mig en settings menu kunne <Highlight size="m" value="indeholde" />, og så laver jeg components hertil hurtigt. Sikrer mig selvfølgelig også at alt fungerer som det skal.
                </p>

                <p className={styles.logText}>
                    Dagen afsluttes. Ikke super meget lavet, men der er lavet nok til at jeg har et godt udgangspunkt at arbejde videre med.
                </p>

            </div>

        </section>
    )

}

export default Day10