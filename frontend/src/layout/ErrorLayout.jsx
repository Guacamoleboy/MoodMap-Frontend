// Pathing
// _______
// src/layout/ErrorLayout.jsx

import { Outlet } from 'react-router-dom'

const ErrorLayout = () => (
    <div className="error-wrapper">
        <Outlet />
    </div>
)

export default ErrorLayout