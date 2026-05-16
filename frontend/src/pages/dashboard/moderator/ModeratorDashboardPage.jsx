// Pathing
// _______
// src/pages/dashboard/moderator/ModeratorDashboardPage.jsx

import { Outlet } from 'react-router-dom'
import Dashboard from '@components/dashboard/Dashboard'

function ModeratorDashboardPage() {
    return (
        <Dashboard>
            <Outlet />
        </Dashboard>
    )
}

export default ModeratorDashboardPage