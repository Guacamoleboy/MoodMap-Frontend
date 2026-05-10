// Pathing
// _______
// src/components/shared/notification/Notification.hooks.js

import { useEffect, useState } from 'react'

export const useNotification = (onClose) => {

    // ---- STATE ----------------------------------------------------------------------------------------------------------

    const [closing, setClosing] = useState(false)

    // ---- CLOSE ----------------------------------------------------------------------------------------------------------

    const handleClose = () => {
        setClosing(true)
        setTimeout(onClose, 300)
    }

    // ---- TIMEOUT ---------------------------------------------------------------------------------------------------------

    useEffect(() => {
        const timer = setTimeout(handleClose, 5000)
        return () => clearTimeout(timer)
    })

    // ---- RETURN ----------------------------------------------------------------------------------------------------------

    return { closing, handleClose }
}