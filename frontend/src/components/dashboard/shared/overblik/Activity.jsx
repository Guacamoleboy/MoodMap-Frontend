// Pathing
// _______
// src/components/dashboard/shared/overblik/Activity.jsx

function Activity() {
    return (
        <section className="dashboard-card">

            <div className="dashboard-card-header">
                <div className="dashboard-card-title">
                    <i className="fa fa-line-chart" />
                    <h2>Aktivitet</h2>
                </div>
                <p>
                    Seneste registrerede aktiviteter på din konto.
                </p>
            </div>

            <div className="dashboard-overview-entries">

                <div className="dashboard-overview-entry">
                    <span className="dashboard-overview-entry-title">
                        Humør registreret
                    </span>

                    <span className="dashboard-overview-entry-meta">
                        I dag · 08:43
                    </span>
                </div>

                <div className="dashboard-overview-entry">
                    <span className="dashboard-overview-entry-title">
                        Medicin markeret som taget
                    </span>

                    <span className="dashboard-overview-entry-meta">
                        I dag · 08:15
                    </span>
                </div>

                <div className="dashboard-overview-entry">
                    <span className="dashboard-overview-entry-title">
                        Ny besked modtaget
                    </span>

                    <span className="dashboard-overview-entry-meta">
                        I går · 16:22
                    </span>
                </div>

            </div>

        </section>
    );
}

export default Activity;