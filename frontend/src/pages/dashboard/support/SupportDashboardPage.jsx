// Pathing
// _______
// src/pages/dashboard/support/SupportDashboardPage.jsx

import { Outlet } from 'react-router-dom'
import Dashboard from '@components/dashboard/Dashboard'

function SupportDashboardPage() {
    return (
        <Dashboard>
            <Outlet />
        </Dashboard>
    )
}

export default SupportDashboardPage