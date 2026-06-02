// Pathing
// _______
// src/routes/ProtectedRoutes.jsx

import {Navigate, Outlet} from "react-router-dom"
import { useAuth } from "@hooks/useAuth"

const ProtectedRoutes = () => {

    // ---- SETUP ----------------------------------------------------------------------------------------------------------

    const {user, authLoading} = useAuth()
    
    // ---- MOUNT ----------------------------------------------------------------------------------------------------------

    if (authLoading) {
        return null
    }

    // ---- VALIDATION -----------------------------------------------------------------------------------------------------

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