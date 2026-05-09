// Pathing
// _______
// src/routes/ProtectedRoutes.jsx

import { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getMe } from '@api/endpoints/auth'

const ProtectedRoutes = () => {

    // ---- SETUP -----------------------------------------------------------------------------------------------------------------

    const [auth, setAuth] = useState(null)

    // ---- VALIDATE TOKEN -------------------------------------------------------------------------------------------------------

    useEffect(() => {
        getMe()
            .then(() => {
                console.log("Token valid - access granted - DEBUG")
                setAuth(true)
            })
            .catch(() => {
                console.log("Token invalid - access denied - DEBUG")
                localStorage.removeItem("access_token")
                localStorage.removeItem("refresh_token")
                setAuth(false)
            })
    }, [])

    // ---- RETURN / REDIRECT / VALIDATE ----------------------------------------------------------------------------------------

    if (auth === null) return null
    if (auth) return <Outlet />
    return <Navigate to="/login" replace />

}

export default ProtectedRoutes