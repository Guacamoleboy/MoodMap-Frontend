// Pathing
// _______
// src/pages/dashboard/clinic/ClinicDashboardPage.jsx

import { Outlet } from 'react-router-dom'
import Dashboard from '@components/dashboard/Dashboard'

function ClinicDashboardPage() {
    return (
        <Dashboard>
            <Outlet />
        </Dashboard>
    )
}

export default ClinicDashboardPage