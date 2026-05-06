// Pathing
// _______
// src/routes/ProtectedRoutes.jsx

import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoutes