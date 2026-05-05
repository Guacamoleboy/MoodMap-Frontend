// Pathing
// _______
// src/components/shared/wont-add/WontAdd.jsx

import styles from './WontAdd.module.css'

const WontAdd = () => (
    <div className={styles.wrapper}>
        <h1>Denne side bliver ikke implementeret - desværre!</h1>
        <p>Jeg har valgt at fokusere på at komme i mål med gode løsninger fremfor bare at spytte en masse sider ud som ikke har nogen reel værdi for eksamensprojektet.</p>
        <p>Derfor vil denne side ikke blive arbejdet på, og vil ikke blive implementeret ift, at det er et eksamensprojekt - og ikke et reelt projekt som skal ud til offentligheden.</p>
        <p>Tanker og processer ifm denne beslutning kan findes på min devlog.</p>
        <button>
            Gå til Devlog
        </button>
        <button>
            Gå tilbage            
        </button>
    </div>
)

export default WontAdd