// Pathing
// _______
// src/components/devlog/Devlog.jsx

import Return from './pagination/Return'
import Pagination from './pagination/Pagination'
import { useDevlog } from './Devlog.hooks'
import styles from './Devlog.module.css'

const Devlog = () => {

    const {
        wrapperRef,
        currentIndex,
        ActiveDevlog,
        totalLogs,
        nextLog,
        prevLog
    } = useDevlog()

    return (
        <div className="moodmap-devlog-wrapper">

            {/* OVERLAY */}
            <div
                ref={wrapperRef}
                className={styles.devlogBlurOverlay}
            />

            {/* RETURN */}
            <Return />

            {/* DEVLOG */}
            <ActiveDevlog />

            {/* PAGINATION */}
            <Pagination
                current={currentIndex}
                total={totalLogs}
                onNext={nextLog}
                onPrev={prevLog}
            />

        </div>
    )
}

export default Devlog