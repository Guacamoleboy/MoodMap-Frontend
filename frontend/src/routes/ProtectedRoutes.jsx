// Pathing
// _______
// src/routes/ProtectedRoutes.jsx

import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    // ---- SETUP -----------------------------------------------------------------------------------------------------------------

    const token = localStorage.getItem("access_token")

    // ---- RETURN / REDIRECT -----------------------------------------------------------------------------------------------------------------

    return token ? <Outlet /> : <Navigate to="/login" replace />

}

export default ProtectedRoutes