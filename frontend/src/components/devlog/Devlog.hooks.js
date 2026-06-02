// Pathing
// _______
// src/components/devlog/Devlog.hooks.js

import { useEffect, useRef, useState } from 'react'
import { DEVLOGS } from './data/devlogs'

export const useDevlog = () => {

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
        })

        window.scrollTo({
            top: 0,
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

    return {
        wrapperRef,
        currentIndex,
        ActiveDevlog,
        totalLogs: DEVLOGS.length,
        nextLog,
        prevLog
    }
}