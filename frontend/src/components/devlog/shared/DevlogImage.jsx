// Pathing
// _______
// src/components/devlog/shared/DevlogImage.jsx

import styles from '../Devlog.module.css'

const DevlogImage = ({ src, alt, size = 'xl' }) => (
    <div className={styles.imageWrapper}>

        <img
            src={src}
            alt={alt}
            className={`
                ${styles.logImage}
                ${styles[size]}
            `}
        />

    </div>
)

export default DevlogImage