// Pathing
// _______
// src/components/shared/notification/Notification.jsx

import { useNotification } from './Notification.hooks'

const Notification = ({ message, type = 'info', onClose }) => {

    // ---- STATE -----------------------------------------------------------------------------------------------------------

    const { closing, handleClose } = useNotification(onClose)

    // ---- COLOR SETUP -----------------------------------------------------------------------------------------------------

    const colorMap = {
        success: 'var(--moodmap-green)',
        warning: 'var(--moodmap-orange)',
        error:   'var(--moodmap-red)',
        info:    'var(--moodmap-color)',
    }

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