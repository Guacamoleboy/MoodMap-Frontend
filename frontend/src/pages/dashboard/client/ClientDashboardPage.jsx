// Pathing
// _______
// src/pages/dashboard/client/ClientDashboardPage.jsx

import { Outlet } from 'react-router-dom'
import Dashboard from '@components/dashboard/Dashboard'
import { Helmet } from 'react-helmet-async'

function ClientDashboardPage() {
    return (
        <>
            <Helmet>
                <title>MoodMap - Dashboard</title>
            </Helmet>

            <Dashboard>
                <Outlet />
            </Dashboard>
        </>
    )
}

export default ClientDashboardPage