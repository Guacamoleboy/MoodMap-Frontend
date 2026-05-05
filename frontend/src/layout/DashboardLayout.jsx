// Pathing
// _______
// src/layout/DashboardLayout.jsx

import Preloader from "@components/shared/Preloader";

const DashboardLayout = ({ children }) => (
    <div className="dashboard-wrapper">
        <Preloader />
        {children}
    </div>
)

export default DashboardLayout