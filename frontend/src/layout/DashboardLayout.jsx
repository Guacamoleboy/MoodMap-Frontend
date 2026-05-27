// Pathing
// _______
// src/layout/DashboardLayout.jsx

import { Outlet } from 'react-router-dom'
import Preloader from "@components/shared/Preloader"
import Footer from "@components/shared/footer/Footer"

const DashboardLayout = () => (
    <div className="dashboard-wrapper">
        <Preloader />
        <Outlet />
        <Footer />
    </div>
)

export default DashboardLayout