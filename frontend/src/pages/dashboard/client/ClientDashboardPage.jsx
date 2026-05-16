// Pathing
// _______
// src/pages/dashboard/client/ClientDashboardPage.jsx

import { Outlet } from 'react-router-dom'
import Dashboard from '@components/dashboard/Dashboard'

function ClientDashboardPage() {
    return (
        <Dashboard>
            <Outlet />
        </Dashboard>
    )
}

export default ClientDashboardPage