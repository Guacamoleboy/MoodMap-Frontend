// Pathing
// _______
// src/components/devlog/Devlog.jsx

import Return from './pagination/Return'
import { useEffect, useRef, useState } from 'react'
import Pagination from './pagination/Pagination'
import { DEVLOGS } from './data/devlogs'
import styles from './Devlog.module.css'

const Devlog = () => {

    // ---- STATE -------------------------------------------------------------

    const [currentIndex, setCurrentIndex] = useState(0)

    // ---- REF ---------------------------------------------------------------

    const wrapperRef = useRef(null)

    // ---- ACTIVE DEVLOG -----------------------------------------------------

    const ActiveDevlog = DEVLOGS[currentIndex].component

    // ---- SCROLL ------------------------------------------------------------

    useEffect(() => {

        wrapperRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }, [currentIndex])

    // ---- EVENTS ------------------------------------------------------------

    const nextLog = () => {
        setCurrentIndex(prev =>
            Math.min(prev + 1, DEVLOGS.length - 1)
        )
    }

    const prevLog = () => {
        setCurrentIndex(prev =>
            Math.max(prev - 1, 0)
        )
    }

    // ---- RETURN ------------------------------------------------------------

    return (
        <div className="moodmap-devlog-wrapper">
            
            {/* OVERLAY */}
            <div ref={wrapperRef} className={styles.devlogBlurOverlay} />

            {/* RETURN */}
            <Return />

            {/* DEVLOG */}
            <ActiveDevlog />

            {/* PAGINATION */}
            <Pagination
                current={currentIndex}
                total={DEVLOGS.length}
                onNext={nextLog}
                onPrev={prevLog}
            />

        </div>
    )
}

export default Devlog