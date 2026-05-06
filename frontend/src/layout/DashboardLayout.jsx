// Pathing
// _______
// src/layout/DashboardLayout.jsx

import { Outlet } from 'react-router-dom'
import Preloader from "@components/shared/Preloader"

const DashboardLayout = () => (
    <div className="dashboard-wrapper">
        <Preloader />
        <Outlet />
    </div>
)

export default DashboardLayout