// Pathing
// _______
// src/components/shared/notification/Notification.jsx

import { useEffect, useState } from 'react'

const Notification = ({ message, type = 'info', onClose }) => {

    // ---- SETUP ----------------------------------------------------------------------------------------------------------

    const [closing, setClosing] = useState(false)

    const colorMap = {
        success: 'var(--moodmap-green)',
        warning: 'var(--moodmap-orange)',
        error:   'var(--moodmap-red)',
        info:    'var(--moodmap-color)',
    }

    // ---- EVENTS ---------------------------------------------------------------------------------------------------------

    const handleClose = () => {
        setClosing(true)
        setTimeout(onClose, 300)
    }

    useEffect(() => {
        const timer = setTimeout(handleClose, 5000)
        return () => clearTimeout(timer)
    })

    // ---- RETURN ---------------------------------------------------------------------------------------------------------

    return (
        <div className={`moodmap-notification${closing ? ' closing' : ''}`} style={{ backgroundColor: colorMap[type] }}>
            <p className="moodmap-notification-message">{message}</p>
            <button className="moodmap-notification-close" onClick={handleClose}>
                <i className="fa fa-times" />
            </button>
        </div>
    )
}

export default Notification