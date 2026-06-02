// Pathing
// _______
// src/components/devlog/days/Day17.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day17 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 17
                </span>
                <h1 className={styles.headerTitle}>
                    Assignment handover forberedelse
                </h1>
                <p className={styles.headerDescription}>
                    Ifm at projektet skal afleveres ligesom Backend REST API skulle - arbejdede jeg hermed på dét i dag.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Hvor skal projektet sendes??
                </p>

                <p className={styles.logText}>
                    Jeg har ikke modtaget noget link eller information vedr hvor projektet skal afleveres, så jeg går i gang og antager det bliver <Highlight size="m" value="1:1 af sidste gang" />. Derfor laves følgende.
                </p>

                <DevlogImage
                    src="/devlog/17/1.png"
                    size="l"
                />

                <DevlogImage
                    src="/devlog/17/3.png"
                    size="l"
                />

                <p className={styles.logText}>
                    <Highlight size="m" value="README.md" /> er opdateret til hvad min lærer forventer, og jeg har oprettet en afleverings <Highlight size="m" value="frontend.md" /> fil herudover.
                </p>

                <p className={styles.logHeader}>
                    KanBan afslutning og reflektioner
                </p>

                <p className={styles.logText}>
                    <Highlight size="m" value="KanBan" /> afsluttes hermed, da jeg kun mangler at lave en YouTube overblik video. Men hvordan gik det med den nye approach til KanBan denne gang?
                </p>

                <p className={styles.logText}>
                    Jeg synes ikke min <Highlight size="m" value="column - page layout" /> har været super effektiv. Den har næsten kun skabt forvirring. Det er dog prøvet af nu, og så bliver den normale KanBan løsning brugt fremover.
                </p>

                <DevlogImage
                    src="/devlog/17/2.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    De sidste Devlogs
                </p>

                <p className={styles.logText}>
                    Jeg mangler nu kun at få lavet de sidste <Highlight size="m" value="devlogs" /> til min url, og så er jeg +- i mål med <Highlight size="m" value="læringsmålene" />. Der er mange ting som kunne laves bedre, men jeg har ikke tid eller motivation til det. Desværre.
                </p>

                <DevlogImage
                    src="/devlog/17/5.png"
                    size="s"
                />

                <DevlogImage
                    src="/devlog/17/4.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Afslutning på dagen
                </p>

                <p className={styles.logText}>
                    Dagen afsluttes med at jeg kigger mine filer igennem og sikrer mig de alle er ens og følger mit princip om <Highlight size="m" value="SoC" /> samt comments til diverse. Dette vises ikke i denne devlog, men kan findes på <Highlight size="m" value="Github Commits" />.
                </p>

            </div>

        </section>
    )

}

export default Day17