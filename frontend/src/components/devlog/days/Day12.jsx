// Pathing
// _______
// src/components/devlog/days/Day12.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day12 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 12
                </span>
                <h1 className={styles.headerTitle}>
                    Omtænkning af Auth ift sikkerhed
                </h1>
                <p className={styles.headerDescription}>
                    Jeg lå forleden lat og tænkte over <Highlight size="m" value="security" />, og injections. Derfor bruges tiden i dag på af effektivere access level i applikationen.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Global Auth Level
                </p>

                <p className={styles.logText}>
                    Fremfor at have <Highlight size="m" value="Auth level" /> pr component eller pr Page oprettes en global Auth state useAuth som holder auth status. Dette sikrer, at der ikke kommer <Highlight size="m" value="DRY" />, og sikkerhed er pr app, og ikke pr page. Hvad hvis jeg glemte at tilføje auth? Så ville der ikke være auth. Dette sikrer Auth Provider netop mod.
                </p>

                <DevlogImage
                    src="/devlog/12/1.png"
                    size="l"
                />

                <DevlogImage
                    src="/devlog/12/2.png"
                    size="s"
                />

                <p className={styles.logHeader}>
                    Mindre boiler plate og DRY koncept fastholdes.
                </p>

                <p className={styles.logText}>
                    Jeg går meget op i, at man kan se i koden at jeg fastholder samme arkitektur og holder det stramt. Derfor <Highlight size="m" value="omskrives" /> nogle components - hvilket giver markant bedre overblik og mere sikkerhed.
                </p>

                <DevlogImage
                    src="/devlog/12/3.png"
                    size="l"
                />

                <DevlogImage
                    src="/devlog/12/4.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Dagen afsluttes herefter. Det kan virke som lidt, men der skal tænkes og undersøges ved hver beslutning. Specielt ved så stor en besluning som refactor og en extra <Highlight size="m" value="custom provider" />. Det kræver læring og forståelse som tager tid - desværre.
                </p>

            </div>

        </section>
    )

}

export default Day12