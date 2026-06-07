// Pathing
// _______
// src/components/devlog/days/Day14.jsx

import styles from '../Devlog.module.css'
import DevlogImage from '../shared/DevlogImage'
import Highlight from '@components/shared/Highlight'

const Day14 = () => {

    return (
        <section className={styles.day}>

            {/* HEADER */}
            <div className={styles.header}>
                <span className={styles.headerDay}>
                    MoodMap / Devlog / Day 14
                </span>
                <h1 className={styles.headerTitle}>
                    Turen går til Spanien!
                </h1>
                <p className={styles.headerDescription}>
                    Jeg i denne uge planlagt at arbejde fra <Highlight size="m" value="Spanien" />, da vi alligevel ikke har mødepligt eller undervisning.
                </p>
            </div>

            {/* LOG */}
            <div className={styles.log}>

                <p className={styles.logHeader}>
                    Turen ud..
                </p>

                <p className={styles.logText}>
                    PC opladet, og klar til at arbejde på projektet i flyveren på vej til Spanien. Men..... Af en eller anden grund var den <Highlight size="m" value="afladet" />. Øv! Det blev til 3 lange timer og 0% arbejde på projektet udover at tænke over hvad der kunne laves.
                </p>

                <p className={styles.logText}>
                    Jeg tog derfor <Highlight size="m" value="3 brækposer" /> og tegnede hvordan jeg ville have min applikation skulle se ud. Tiden skulle gå med noget...
                </p>

                <DevlogImage
                    src="/images/devlog/14/1.jpg"
                    size="s"
                />

                <DevlogImage
                    src="/images/devlog/14/2.jpg"
                    size="s"
                />

                <DevlogImage
                    src="/images/devlog/14/3.jpg"
                    size="s"
                />

                <p className={styles.logHeader}>
                    I Spanien
                </p>

                <p className={styles.logText}>
                    Planen hjemmefra var at der skulle arbejdes effektivt i <Highlight size="m" value="specifikke tidsrum" />, men grundet udtrapning af noget medicin og personlige forhold blev det til minimalt arbejde desværre.
                </p>

                <DevlogImage
                    src="/images/devlog/14/4.png"
                    size="xl"
                />

                <p className={styles.logText}>
                    De dage hvor jeg havde mulighed for det blev der arbejdet intenst, og de øvrige dage blev der ikke. Sådan er livet <Highlight size="m" value="desværre" />.
                </p>

                <p className={styles.logText}>
                    At sige der ikke blev arbejdet er selvfølgelig en <Highlight size="m" value="talemåde" />. Jeg tænker konstant på projektet, og ser videoer omkring læring af specifikke emner. Men at kode blev der ikke gjort så meget af.
                </p>

                <p className={styles.logHeader}>
                    Turen hjem til Danmark
                </p>

                <p className={styles.logText}>
                    Turen går desværre mod <Highlight size="m" value="Danmark" /> igen.. Kunne godt bo i Spanien permanent. Hvilket også er målet - hvilket kan ses på diverse billeder da alle mine PCs er på Spansk.
                </p>

                <p className={styles.logText}>
                    Denne gang havde jeg dog styr på min Laptops batteri, og var klar til at arbejde på vej hjem!
                </p>

                <p className={styles.logText}>
                    Jeg siger altid... <Highlight size="m" value="1 x" /> er en fejl. <Highlight size="m" value="2 x" /> er et mønster. <Highlight size="m" value="3 x" /> er direkte dumhed.
                </p>

                <p className={styles.logText}>
                    Jeg har løbende skrevet noter og taget billeder af hvad jeg har lavet, så jeg brugte tiden på det jeg finder mindst interessant.. Devlogs og reflektioner.
                </p>

                <DevlogImage
                    src="/images/devlog/14/5.png"
                    size="s"
                />

                <p className={styles.logText}>
                    Jeg skrev <Highlight size="m" value="alle 13 devlogs" /> så hjemmesiden kan modtage dem. De er tidligere skrevet ind lokalt, og billederne som guide og reflektioner herunder samt Github overview.
                </p>

                <p className={styles.logHeader}>
                    Reflektion og afslutning
                </p>

                <p className={styles.logText}>
                    Jeg synes det har <Highlight size="m" value="fungeret fint" /> umiddelbart at være i Spanien og arbejde på projektet. Problemet var ikke lokationen, men omstændighederne og private forhold som gjorde det problematiskt. Men det var blevet det samme i Danmark, så ingen problemer i at jeg var i Spanien.
                </p>

                <p className={styles.logText}>
                    Jeg fik dog en besked <Highlight size="m" value="d 21" /> på Moodle hvor der stod af det var vigtigt vi mødte ind onsdag <Highlight size="m" value="d 27" />. Hvilket ikke var optimalt, da jeg var i Spanien. Derfor mødte jeg ikke op, da jeg ikke havde mulighed for det.
                </p>

                <p className={styles.logText}>
                    Jeg synes som udgangspunkt jeg fik lavet nogle vigtige overvejelser og implementioner som kommer til at danne grundlag for resten af projektet når jeg kommer hjem igen.
                </p>

            </div>

        </section>
    )

}

export default Day14