// Pathing
// _______
// src/components/dashboard/Dashboard.jsx

import DashboardNavbar from './shared/DashboardNavbar'

const Dashboard = ({ children }) => (
    <div className="dashboard">

        <DashboardNavbar />
        
        <main className="dashboard-content">
            {children}
        </main>

    </div>
)

export default Dashboard