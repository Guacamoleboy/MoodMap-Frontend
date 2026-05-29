// Pathing
// _______
// src/components/devlog/days/Day2.jsx

// Pathing
// _______
// src/components/devlog/days/Day1.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'

const Day2 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 2
                </span>
                <h1 className={styles.headerTitle}>
                    Omskrivning påbegyndes.. Arkitektur eller UI først .. ?
                </h1>
                <p className={styles.headerDescription}>
                    Der tages stilling til hvad og hvordan projektet skal forløbe, samt hvad jeg bør fokusere på ift, at jeg som altid har fokus på for meget kontra hvad der faktisk blot forventes. Derfor tager jeg mig nogle <Highlight size="m" value="overvejelser" />, og disse danner grundlag for resten af projektet.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Arkitektur
                </p>

                <p className={styles.logText}>
                    <Highlight size="m" value="Arkitekturen" /> sættes op ud fra hvad jeg forventer jeg får brug for, og hvad jeg på nuværende stadie har af idéer samt ting jeg tog med fra sidste frontend UI.
                </p>

                <p className={styles.logText}>
                    Eftersom <Highlight size="m" value="jeg som udvikler" /> lægger vægt på arkitektur over UI har jeg stor fokus på hvordan jeg laver folder struktur. Specielt da det i mine projekter ofte ikke omskrives, men gennemtænkes godt gennem én gang i starten. Dette danner grundlag for resten af projektet og code-base. Derfor er det vigtigt mener jeg.
                </p>

                <DevlogImage
                    src="/devlog/2/1.png"
                    size="s"
                />

                <p className={styles.logHeader}>
                    CSS Styling med :root
                </p>

                <p className={styles.logText}>
                    Jeg har tidligere arbejdet meget med UI / UX både som Frontend men også som Backend via <Highlight size="m" value="PHP / MySQL" />. Derfor bruger jeg :root variables, da de er global og kan bruges af resten applikationen. Det gør det også utrolig nemt at ændre og holde visuals ens over UI Components. Ændres root variable, så ændres visuals for components. Hvilket er super effektivt.
                </p>

                <DevlogImage
                    src="/devlog/2/2.png"
                    size="m"
                />

                <p className={styles.logText}>
                    Dette danner grundlag for <Highlight size="m" value="styles.css" /> som i mit tilfælde hedder det <Highlight size="m" value="fremfor globals.css" />, da det er mere native for mig og min rejse som udvikler. Jeg bruger className som udgangspunkt uden module.css til at starte med, da jeg blot skal have UI på plads. Det rykkes hurtigt til module.css, da det er mere optimalt, og sikrer at components visuals er unique ift global names.
                </p>

                <DevlogImage
                    src="/devlog/2/3.png"
                    size="m"
                />

                <p className={styles.logHeader}>
                    Første reele dag med coding + KanBan
                </p>

                <p className={styles.logText}>
                    Efter alt det her er på plads kigger jeg min folder struktur igennem hurtigt, og sikrer mig at jeg som udgangspunkt er tilfreds.
                </p>

                <DevlogImage
                    src="/devlog/2/4.png"
                    size="s"
                />

                <p className={styles.logText}>
                    Dette konkluderer så <Highlight size="m" value="NavBar" /> som udgangspunkt, og denne tages til eftertragtning og reflektioner laves over om jeg mener en <Highlight size="m" value="Index" /> har nogen reel betydning for projektet og om den bør springes over for at fokusere på det som udviklingen faktisk forventer af mig.
                </p>

                <DevlogImage
                    src="/devlog/2/5.png"
                    size="m"
                />

                <p className={styles.logText}>
                    Jeg slutter af med at lave et <Highlight size="m" value="KanBan" /> over projektet, for at holde overblik, og i samarbejde med min lærer - Thomas - ifm, at jeg føler jeg ikke kan nå i mål - hvilket irriterer mig meget. Derfor tænker jeg over hvad jeg SKAL have med, og prøver at lave KanBan anderledes end jeg normalt ville gøre.
                </p>

                <p className={styles.logText}>
                    Fremfor at lave Kanban som <Highlight size="m" value="To Be Done" />, <Highlight size="m" value="Done" />, <Highlight size="m" value="In Progress" /> osv prøver jeg at nytænke hvordan KanBan kunne sættes op. Derfor prøver jeg at lave det som Pages - hver column. Dette gøres i håb om, at jeg har en idé over hvad jeg SKAL i mål med, samt hvad jeg mener jeg ikke bør komme i mål med.
                </p>

                <DevlogImage
                    src="/devlog/2/6.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Dagens afslutning
                </p>

                <p className={styles.logText}>
                    Der afsluttes for i dag, og der tænktes yderligere over hvordan projektet skal forløbe, og hvad jeg selv forventer at levere som slutprodukt i <Highlight size="m" value="Juni" />.
                </p>

            </div>




        </section>
    )

}

export default Day2