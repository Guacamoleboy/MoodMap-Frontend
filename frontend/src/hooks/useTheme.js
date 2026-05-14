// Pathing
// _______
// src/hooks/useTheme.js

// Pathing
// _______
// src/hooks/useTheme.js

import { useState } from 'react'

const STORAGE_KEY = 'theme'

export const useTheme = () => {

    // ------------ INITIAL THEME ----------------------------------------------

    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem(STORAGE_KEY)
        return savedTheme || 'dark'
    }

    // ------------ STATE ------------------------------------------------------

    const [theme, setThemeState] = useState(() => {

        const initialTheme = getInitialTheme()
        document.documentElement.dataset.theme = initialTheme
        return initialTheme

    })

    // ------------ SET THEME --------------------------------------------------

    const setTheme = (nextTheme) => {

        document.documentElement.dataset.theme = nextTheme
        localStorage.setItem(STORAGE_KEY, nextTheme)
        setThemeState(nextTheme)

    }

    // ------------ TOGGLE -----------------------------------------------------

    const toggleTheme = () => {

    setThemeState(prev => {
        const nextTheme = prev === 'dark' ? 'light' : 'dark'
        document.documentElement.dataset.theme = nextTheme
        localStorage.setItem(STORAGE_KEY, nextTheme)
        return nextTheme
    })

}

    // ------------ RETURN -----------------------------------------------------

    return {
        theme,
        darkmode: theme === 'dark',
        setTheme,
        toggleTheme,
    }

}