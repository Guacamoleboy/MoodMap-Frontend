// Pathing
// _______
// src/components/devlog/days/Day16.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day16 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 16
                </span>
                <h1 className={styles.headerTitle}>
                    UI & Components
                </h1>
                <p className={styles.headerDescription}>
                    Eftersom jeg har fokuseret på opsætning og arkitektur samt generic components kan jeg nu komme i gang med dét.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Inden vi starter..
                </p>

                <p className={styles.logText}>
                    Min <Highlight size="m" value="Footer.jsx" /> har irriteret mig lige siden jeg lavede den. Den hopper for langt op på siden når den mangler components i layout. Dét skal fixes som det første for at få ro i sjælen!!
                </p>

                <DevlogImage
                    src="/devlog/16/2.png"
                    size="l"
                />

                <DevlogImage
                    src="/devlog/16/1.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Components
                </p>

                <p className={styles.logText}>
                    Hvis du kan <Highlight size="m" value="huske min tur til Spanien" /> tegnede jeg nogle skitser i flyet.. Disse bliver nu til virklighed.
                </p>

                <DevlogImage
                    src="/devlog/16/7.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Undervejs finder jeg dog ud af, at jeg gentager mig selv hist og her. Derfor skal jeg have oprettet diverse components for at undgå dette og følge mit princip om <Highlight size="m" value="DRY" /> og <Highlight size="m" value="SoC" />.
                </p>

                <DevlogImage
                    src="/devlog/16/5.png"
                    size="s"
                />

                <p className={styles.logText}>
                    Dette gør, at jeg i alle components hvor jeg har behov for en <Highlight size="m" value="CheckBox.jsx" /> blot kan import og bruge den hertil. Så får alle components samme udseende, og koden bliver ikke gentaget. Smart.
                </p>

                <DevlogImage
                    src="/devlog/16/4.png"
                    size="l"
                />

                <p className={styles.logHeader}>
                    Tooltips & Hover
                </p>

                <p className={styles.logText}>
                    En ting jeg næsten altid laver og opretter er <Highlight size="m" value="Tooltip.jsx" />, da jeg synes det er en væsentlig ting at informere brugere via UI / UX hvad der sker og hvad der er muligt. Derfor oprettes en <Highlight size="m" value="global Tooltip" /> som kan bruges generiskt på alle components som hover.
                </p>

                <DevlogImage
                    src="/devlog/16/3.png"
                    size="s"
                />

                <p className={styles.logText}>
                    Jeg kan ikke tage billede af hvordan det ser ud, da jeg ikke kan hover + screenshot umiddelbart. Men når du hover det objekt som den <Highlight size="m" value="wrapper" />, så viser den en tekst som du vælger den skal vise. Det kunne fx være data eller blot tekst. Super smart.
                </p>

                <p className={styles.logHeader}>
                    Forbedringer til UI & Afslutning på dagen
                </p>

                <p className={styles.logText}>
                    Generelt er der nogle ting som irriterer mig når jeg kigger på appen. Dette skal fixes, og så kan dagen afsluttes herefter.
                </p>

                <p className={styles.logText}>
                    Til at starte med blevet <Highlight size="m" value="Font-Awesome 4.7" /> icons tilføjet til headers for at undgå det blender sammen, og så blev der tilføjet diverse UI elementer hist og her.
                </p>

                <DevlogImage
                    src="/devlog/16/6.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Jeg pusher hermed til main branchen, og ser min <Highlight size="m" value="CI / CD Pipeline" /> auto deploy den nye version til min URL uden jeg skal gøre noget selv. Super lækkert.
                </p>

                <p className={styles.logText}>
                    Dagen afsluttes her.
                </p>

            </div>

        </section>
    )

}

export default Day16