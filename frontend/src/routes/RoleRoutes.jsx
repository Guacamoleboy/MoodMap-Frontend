// Pathing
// _______
// src/routes/RoleRoutes.jsx

import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@hooks/useAuth"
import { ROLE_REDIRECT, ROLE_ACCESS } from "@config/roles"

// ---- DASHBOARD REDIRECT ----------------------------------------------------

export const DashboardRedirect = () => {

    const { user } = useAuth()

    const redirect = ROLE_REDIRECT[user?.role]

    if (!redirect) {
        return (
            <Navigate
                to="/login"
                replace
            />
        )
    }

    return (
        <Navigate
            to={redirect}
            replace
        />
    )

}

// ---- ROLE ROUTES -----------------------------------------------------------

const RoleRoutes = ({ role }) => {

    const { user } = useAuth()

    const allowed = ROLE_ACCESS[role] ?? []

    if (allowed.includes(user?.role)) {
        return <Outlet />
    }

    return (
        <Navigate
            to="/dashboard"
            replace
        />
    )

}

export default RoleRoutes