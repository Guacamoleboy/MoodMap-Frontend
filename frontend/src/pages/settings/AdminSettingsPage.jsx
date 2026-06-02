// Pathing
// _______
// src/pages/settings/AdminSettingsPage.jsx

import Settings from '@components/settings/Settings'
import Appearance from '@components/settings/shared/Appearance'
import { Helmet } from 'react-helmet-async'

function AdminSettingsPage() {
    return (
        <>

            <Helmet>
                <title>MoodMap - Admin Settings</title>
            </Helmet>

            <Settings>
                <Appearance />
            </Settings>
        </>
    )
}

export default AdminSettingsPage