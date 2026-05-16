// Pathing
// _______
// src/pages/dashboard/clinician/ClinicianDashboardPage.jsx

import { Outlet } from 'react-router-dom'
import Dashboard from '@components/dashboard/Dashboard'

function ClinicianDashboardPage() {
    return (
        <Dashboard>
            <Outlet />
        </Dashboard>
    )
}

export default ClinicianDashboardPage