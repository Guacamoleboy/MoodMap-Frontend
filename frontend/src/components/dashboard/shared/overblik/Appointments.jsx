// Pathing
// _______
// src/components/dashboard/shared/overblik/Appointments.jsx

import CheckBox from '@components/dashboard/shared/checkbox/CheckBox';

function Appointments() {
    return (
        <section className="dashboard-card">
            
            {/* META DATA */}
            <div className="dashboard-card-header">
                <div className="dashboard-card-title">
                    <i className="fa fa-calendar-check-o" />
                    <h2>Kommende aftaler</h2>
                </div>
                <p>
                    Dine næste planlagte konsultationer.
                </p>
            </div>

            <div className="dashboard-overview-entries">

                {/* ENTRY */}
                <div className="dashboard-overview-entry">
                    <div className="dashboard-overview-entry-column">
                        <span className="dashboard-overview-entry-title">
                            Centrumlægerne
                        </span>
                        <span className="dashboard-overview-entry-meta">
                            12. juni · 09:30
                        </span>
                    </div>
                    <CheckBox />
                </div>

                {/* ENTRY */}
                <div className="dashboard-overview-entry">
                    <div className="dashboard-overview-entry-column">
                        <span className="dashboard-overview-entry-title">
                            Reumatolog
                        </span>
                        <span className="dashboard-overview-entry-meta">
                            18. juni · 13:00
                        </span>
                    </div>
                    <CheckBox />
                </div>

                {/* ENTRY */}
                <div className="dashboard-overview-entry">
                    <div className="dashboard-overview-entry-column">
                        <span className="dashboard-overview-entry-title">
                            Neurologisk
                        </span>
                        <span className="dashboard-overview-entry-meta">
                            21. juni · 14:00
                        </span>
                    </div>
                    <CheckBox />
                </div>

            </div>

        </section>
    );
}

export default Appointments;