// Pathing
// _______
// src/components/dashboard/shared/DashboardAvatar.hooks.js

import { useEffect, useRef } from 'react'

export const useAvatarMenu = (open, onToggle) => {

    // ---- SETUP ----------------------------------------------------------------------------------------------------------

    const ref = useRef(null)

    // ---- EVENTS ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
        if (!open) return

        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onToggle()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [open, onToggle])

    return { ref }
    
}