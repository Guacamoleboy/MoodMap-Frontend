// Pathing
// _______
// src/routes/RoleRoutes.jsx

import { Navigate, Outlet } from 'react-router-dom'
import { getUser } from '@hooks/useAuth'

// ---- REDIRECT PATHING ----------------------------------------------------------------------------------------------------------

const ROLE_REDIRECT = {
    Admin:     '/dashboard/admin',
    Moderator: '/dashboard/admin',
    Support:   '/dashboard/admin',
    Clinician: '/dashboard/clinician',
    Clinic:    '/dashboard/clinic',
    Client:    '/dashboard/client',
}

// ---- ACCESS --------------------------------------------------------------------------------------------------------------------

const ROLE_ACCESS = {
    Admin:     ['Admin', 'Moderator', 'Support'],
    Clinician: ['Clinician'],
    Clinic:    ['Clinic'],
    Client:    ['Client'],
}

// ---- DASHBOARD SPECIFIC ----------------------------------------------------------------------------------------------------------

export const DashboardRedirect = () => {

    const user = getUser()
    const redirect = ROLE_REDIRECT[user?.role]

    if (!redirect) return <Navigate to="/login" replace />
    return <Navigate to={redirect} replace />

}

// ---- ROLE CHECK & REDIRECT -------------------------------------------------------------------------------------------------------

const RoleRoutes = ({ role }) => {

    const user = getUser()
    const allowed = ROLE_ACCESS[role] ?? []

    if (allowed.includes(user?.role)) return <Outlet />
    return <Navigate to="/dashboard" replace />

}

export default RoleRoutes