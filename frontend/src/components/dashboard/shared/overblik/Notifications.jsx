// Pathing
// _______
// src/components/dashboard/shared/overblik/Notifications.jsx

import CheckBox from '@components/dashboard/shared/checkbox/CheckBox';

function Notifications() {
    return (
        <section className="dashboard-card">

            {/* META DATA */}
            <div className="dashboard-card-header">
                <div className="dashboard-card-title">
                    <i className="fa fa-bell-o" />
                    <h2>Notifikationer</h2>
                </div>
                <p>
                    Seneste påmindelser og opdateringer.
                </p>
            </div>  
            
            <div className="dashboard-overview-entries">

                {/* ENTRY */}
                <div className="dashboard-overview-entry">
                    <span className="dashboard-overview-entry-title">
                        Påmindelse om medicin
                    </span>
                    <CheckBox />
                </div>

                {/* ENTRY */}
                <div className="dashboard-overview-entry">
                    <span className="dashboard-overview-entry-title">
                        Ny besked fra kliniker
                    </span>
                    <CheckBox />
                </div>

                {/* ENTRY */}
                <div className="dashboard-overview-entry">
                    <span className="dashboard-overview-entry-title">
                        Humørregistrering mangler
                    </span>
                    <CheckBox />
                </div>

            </div>

        </section>
    );
}

export default Notifications;