// Pathing
// _______
// src/layout/AppLayout.jsx

import { Outlet } from 'react-router-dom'

const AuthLayout = () => (
    <div className="auth-wrapper">
        <Outlet />
    </div>
)

export default AuthLayout