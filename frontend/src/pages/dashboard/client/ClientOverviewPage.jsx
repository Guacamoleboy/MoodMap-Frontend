// Pathing
// _______
// src/pages/dashboard/client/ClientOverviewPage.jsx

import Activity from '@components/dashboard/shared/overblik/Activity';
import Appointments from '@components/dashboard/shared/overblik/Appointments';
import Calendar from '@components/dashboard/shared/overblik/Calender';
import Messages from '@components/dashboard/shared/overblik/Messages';
import Notifications from '@components/dashboard/shared/overblik/Notifications';

function ClientOverviewPage() {
    return (
        <div className="dashboard-wrapper quick-fix">

            {/* TOP */}
            <div className="dashboard-grid-2-equal">
                <Appointments />
                <Messages />
            </div>

            {/* BOTTOM */}
            <div className="dashboard-grid-3-equal">
                <Activity />
                <Calendar />
                <Notifications />
            </div>

        </div>
    );
}

export default ClientOverviewPage;