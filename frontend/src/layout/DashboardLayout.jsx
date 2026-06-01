// Pathing
// _______
// src/layout/DashboardLayout.jsx

import { Outlet } from 'react-router-dom'
import Preloader from "@components/shared/preloader/Preloader"
import Footer from "@components/shared/footer/Footer"

const DashboardLayout = () => (
    <div className="dashboard-wrapper">
        <Preloader />

        <main className="dashboard-main">
            <Outlet />
        </main>

        <Footer />
    </div>
)

export default DashboardLayout