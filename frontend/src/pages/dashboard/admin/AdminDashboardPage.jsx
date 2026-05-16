// Pathing
// _______
// src/pages/dashboard/admin/AdminDashboardPage.jsx

import { Outlet } from 'react-router-dom'
import Dashboard from '@components/dashboard/Dashboard'

function AdminDashboardPage() {
    return (
        <Dashboard>
            <Outlet />
        </Dashboard>
    )
}

export default AdminDashboardPage