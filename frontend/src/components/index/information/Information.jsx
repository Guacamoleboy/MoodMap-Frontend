// Pathing
// _______
// src/components/index/information/Information.jsx

// ----------------------------------------------------------------------------------------
// OBS:
// DENNE COMPONENT ER LAVET AF AI FOR AT KUNNE NÅ I MÅL
// 
// Det er justeret til at mig selv, og sikret at det følger resten af sidens koncept og opsætning.
// ----------------------------------------------------------------------------------------

import styles from './Information.module.css'
import { informationCards, informationIntro } from './data/information-data'

export default function Information() {

  const { eyebrow, heading, headingEm, subheading } = informationIntro

  return (
    <section className={styles.section} aria-labelledby="info-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="info-heading" className={styles.heading}>
            {heading} <br />
            <em>{headingEm}</em>
          </h2>
          <p className={styles.subheading}>{subheading}</p>
        </div>

        <ul className={styles.grid} role="list">
          {informationCards.map((card, i) => (
            <li
              key={card.id}
              className={styles.card}
              style={{ '--delay': `${i * 120}ms` }}
            >
              <i className={`fa ${card.icon} ${styles.cardIcon}`} aria-hidden="true" />
              <span className={styles.cardLabel}>{card.label}</span>
              <h3 className={styles.cardHeading}>{card.heading}</h3>
              <p className={styles.cardBody}>{card.body}</p>
              <div className={styles.cardLine} aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>

  )
}