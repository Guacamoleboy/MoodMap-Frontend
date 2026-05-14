// Pathing
// _______
// src/components/settings/Settings.jsx

import Return from './shared/Return'

const Settings = ({ children }) => (
    <div className="settings-wrapper">

        <Return />

        <section className="settings-content">

            {/* INTRO META */}
            <div className="settings-intro">
                <h1>Din indstillinger for MoodMap.</h1>
                <p>Her på siden har du mulighed for at se, redigere og tilpasse appen som du ønsker den skal tilpasses.</p>
            </div>

            {/* CHILDREN ENTRIES */}
            <div className="settings-body">
                {children}
            </div>

        </section>

    </div>
)

export default Settings