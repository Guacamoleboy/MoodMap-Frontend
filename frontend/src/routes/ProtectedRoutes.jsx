// Pathing
// _______
// src/routes/ProtectedRoutes.jsx

import {Navigate, Outlet} from "react-router-dom"
import { useAuth } from "@hooks/useAuth"

const ProtectedRoutes = () => {

    const {user, authLoading} = useAuth()

    if (authLoading) {
        return null
    }

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
            />
        )
    }

    return <Outlet />

}

export default ProtectedRoutes