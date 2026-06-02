// Pathing
// _______
// src/components/devlog/days/Day15.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day15 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 15
                </span>
                <h1 className={styles.headerTitle}>
                    CI / CD tid.
                </h1>
                <p className={styles.headerDescription}>
                    Som altid starter jeg først på <Highlight size="m" value="CI / CD" /> mod projektets afslutning. Grundlag? Ingen. Føler bare det er bedre når fetch osv er implementeret korrekt.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Gammel Frontend vs Ny Frontend.
                </p>

                <p className={styles.logText}>
                    Eftersom den tidligere devlog lå via <Highlight size="m" value="pm2" /> og <Highlight size="m" value="Node.js" /> på serveren skulle jeg fjerne den for at kunne komme videre.
                </p>

                <DevlogImage
                    src="/devlog/15/1.png"
                    size="m"
                />

                <p className={styles.logText}>
                    Herefter oprettede jeg i <Highlight size="m" value="Docker Hub" /> et nyt repository til Frontend ReactJS deployment.
                </p>

                <DevlogImage
                    src="/devlog/15/3.png"
                    size="l"
                />

                <p className={styles.logText}>
                    Herefter gik jeg i gang med at implement <Highlight size="m" value="Dockerfile" />, <Highlight size="m" value="Nginx" /> opsætning, <Highlight size="m" value="docker-compose.yml" /> og <Highlight size="m" value="pipeline.yml" /> opsætning. Der var nogle udfordringer undervejs, men jeg fik løst det.
                </p>

                <DevlogImage
                    src="/devlog/15/2.png"
                    size="l"
                />

                <DevlogImage
                    src="/devlog/15/4.png"
                    size="m"
                />

                <DevlogImage
                    src="/devlog/15/6.png"
                    size="m"
                />

                <DevlogImage
                    src="/devlog/15/8.png"
                    size="m"
                />

                <p className={styles.logText}>
                    Da alt var sat op korrekt fik jeg nogle fejlkoder via Nginx fx <Highlight size="m" value="403" /> og <Highlight size="m" value="500" /> som hentyder til forbidden samt missing. Jeg fandt root cause efter noget tid og løste problemerne.
                </p>

                <DevlogImage
                    src="/devlog/15/5.png"
                    size="m"
                />

                <DevlogImage
                    src="/devlog/15/7.png"
                    size="m"
                />

                <p className={styles.logText}>
                    Som det fremgår af billedet herover lykkedes det efter nogle timer at få det hele op at køre, og siden er nu fuld funnktionel og kører på <Highlight size="m" value="main branch" /> fra Github.
                </p>

                <p className={styles.logHeader}>
                    Automatic deployment? Muligt?
                </p>

                <p className={styles.logText}>
                    Jeg fandt dog ud af, at jeg havde sat det op uden automatic deployment. Det betyder, at jeg som udgangspunkt skal <Highlight size="m" value="SCP" /> hver gang jeg laver ændringer fra dist/ folderen via npm run build. Dét er ikke optimalt.
                </p>

                <p className={styles.logText}>
                    Jeg undersøgte derfor mulighederne og kom frem til, at der var mulighed for auto ssh deployment som jeg så implementerede.
                </p>

                <p className={styles.logHeader}>
                    Afslutning
                </p>

                <p className={styles.logText}>
                    Dagen blev afsluttet i god ro og orden, og siden er nu fuld funktionel online og <Highlight size="m" value="fungerer efter målet" />.
                </p>

            </div>

        </section>
    )

}

export default Day15