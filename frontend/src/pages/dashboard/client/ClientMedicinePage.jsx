// Pathing
// _______
// src/pages/dashboard/client/ClientMedicinePage.jsx

import CurrentMedication from '@components/dashboard/client/medication/CurrentMedication'
import Reminders from '@components/dashboard/client/medication/Reminders'
import SideEffects from '@components/dashboard/client/medication/sideeffects/SideEffects'
import { Helmet } from 'react-helmet-async'

function ClientMedicinePage() {
    return (
        <>

            <Helmet>
                <title>MoodMap - Medicin</title>
            </Helmet>

            <section className="dashboard-wrapper">
                
                {/* 1 ROW - 1 COLUMN | TOP */}
                <div className="dashboard-grid-1">
                    <SideEffects />
                </div>

                {/* 1 ROW - 2 COLUMNS | MID */}
                <div className="dashboard-grid-2">
                    <CurrentMedication />
                    <Reminders />
                </div>

            </section>
            
        </>
    )
}

export default ClientMedicinePage