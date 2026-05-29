// Pathing
// _______
// src/components/devlog/days/Day5.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'

const Day5 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 5
                </span>
                <h1 className={styles.headerTitle}>
                    Review med Thomas giver nye resultater
                </h1>
                <p className={styles.headerDescription}>
                    Denne dag havde jeg verbalt snakket med min lærer - <Highlight size="m" value="Thomas" /> - vedr min bekymring om at nå i mål kontra blot at opfylde læringsmål.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Forventninger og realitet
                </p>

                <p className={styles.logText}>
                    Jeg har på baggrund af Mandags Review og markant demotivation sat mit <Highlight size="m" value="KanBan" /> op komplet. Brugt et par timer på det. Netop for at skabe overblik over hvad min applikation SKAL kunne og hvad det måske kunne være fedt den kunne. Dette gør, at jeg forhåbentlig får noget motivation tilbage, og kan se jeg kan nå i mål.
                </p>

                <DevlogImage
                    src="/devlog/5/1.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    User Stories hertil
                </p>

                <p className={styles.logText}>
                    Ifm denne bekymring bruger jeg det meste af dagen på af <Highlight size="m" value="gennemtænke" /> netop dette, og dermed oprettes <Highlight size="m" value="User Stories" /> også, for at kunne få funktionaliteten ned på skrift ift et slut produkt.
                </p>

                <DevlogImage
                    src="/devlog/5/2.png"
                    size="m"
                />

                <p className={styles.logHeader}>
                    Afslutning
                </p>

                <p className={styles.logText}>
                    Det kan virke af lidt, men jeg har brugt en del timer på at tænke over hvordan jeg skal nå i mål og opsætning heraf ifm review i morges med min lærer. Forhåbentlig får jeg noget <Highlight size="m" value="motivation" /> snart.
                </p>

                <p className={styles.logText}>
                    Dagen afsluttes.
                </p>

            </div>

        </section>
    )

}

export default Day5