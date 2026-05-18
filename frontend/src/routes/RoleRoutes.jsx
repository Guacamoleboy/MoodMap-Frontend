// Pathing
// _______
// src/routes/RoleRoutes.jsx

import {Navigate, Outlet} from "react-router-dom"
import { useAuth } from "@hooks/useAuth"

// ---- REDIRECT PATHING ------------------------------------------------------

const ROLE_REDIRECT = {
    Admin: "/dashboard/admin",
    Moderator: "/dashboard/moderator",
    Support: "/dashboard/support",
    Clinician: "/dashboard/clinician",
    Clinic: "/dashboard/clinic",
    Client: "/dashboard/client"
}

// ---- ACCESS ----------------------------------------------------------------

const ROLE_ACCESS = {
    Admin: [
        "Admin",
        "Moderator",
        "Support"
    ],
    Moderator: [
        "Moderator"
    ],
    Support: [
        "Support"
    ],
    Clinician: [
        "Clinician"
    ],
    Clinic: [
        "Clinic"
    ],
    Client: [
        "Client"
    ]
}

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