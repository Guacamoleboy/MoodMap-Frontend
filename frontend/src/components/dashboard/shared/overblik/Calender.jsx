// Pathing
// _______
// src/components/dashboard/shared/overblik/Calendar.jsx

function Calendar() {
    return (
        <section className="dashboard-card">
            
            {/* META DATA */}
            <div className="dashboard-card-header">
                <div className="dashboard-card-title">
                    <i className="fa fa-calendar" />
                    <h2>Denne uge</h2>
                </div>
                <p>
                    Kommende aktiviteter og opfølgninger.
                </p>
            </div>

            <div className="dashboard-overview-entries">
                
                {/* ENTRY */}
                <div className="dashboard-overview-entry">
                    <span className="dashboard-overview-entry-title">
                        Mandag
                    </span>
                    <span className="dashboard-overview-entry-meta">
                        Medicin
                    </span>
                </div>

                {/* ENTRY */}
                <div className="dashboard-overview-entry">
                    <span className="dashboard-overview-entry-title">
                        Tirsdag
                    </span>
                    <span className="dashboard-overview-entry-meta">
                        Humørregistrering
                    </span>
                </div>

                {/* ENTRY */}
                <div className="dashboard-overview-entry">
                    <span className="dashboard-overview-entry-title">
                        Onsdag
                    </span>
                    <span className="dashboard-overview-entry-meta">
                        Aftale
                    </span>
                </div>

            </div>

        </section>
    );
}

export default Calendar;