// Pathing
// _______
// src/components/dashboard/shared/overblik/Messages.jsx

import Tooltip from '@components/shared/tooltip/Tooltip';

function Messages() {
    return (
        <section className="dashboard-card">

            <div className="dashboard-card-header">
                <div className="dashboard-card-title">
                    <i className="fa fa-comments-o" />
                    <h2>Beskeder</h2>
                </div>
                <p>
                    Her finder du dine nyeste beskeder..
                </p>
            </div>

            <div className="dashboard-overview-entries">

                <Tooltip text="Tryk for at svare">
                    <div className="dashboard-overview-entry">

                        <div className="dashboard-overview-entry-column">
                            <span className="dashboard-overview-entry-title">
                                Ny recept lagt ud
                            </span>

                            <span className="dashboard-overview-entry-author">
                                Læge - Centrumlægerne
                            </span>

                            <span className="dashboard-overview-entry-message">
                                Hvordan går det med behandlingen?
                            </span>
                        </div>

                    </div>
                </Tooltip>

                <Tooltip text="Tryk for at svare">
                    <div className="dashboard-overview-entry">

                        <div className="dashboard-overview-entry-column">
                            <span className="dashboard-overview-entry-title">
                                MR Scanning
                            </span>

                            <span className="dashboard-overview-entry-author">
                                Speciallæge - Reumatologerne i Hellerup
                            </span>

                            <span className="dashboard-overview-entry-message">
                                Du har fået tid til MR Scanning.
                            </span>
                        </div>

                    </div>
                </Tooltip>

            </div>

        </section>
    );
}

export default Messages;