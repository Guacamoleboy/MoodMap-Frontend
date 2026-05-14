// Pathing
// _______
// src/pages/settings/SharedSettingsPage.jsx

import Settings from '@components/settings/Settings'
import Appearance from '@components/settings/shared/Appearance'
import Tracking from '@components/settings/shared/Tracking'
import Cookies from '@components/settings/shared/Cookies'
import GDPR from '@components/settings/shared/GDPR'
import Privacy from '@components/settings/shared/Privacy'
import Preferences from '@components/settings/shared/Preferences'
import Sessions from '@components/settings/shared/Sessions'
import Profile from '@components/settings/shared/Profile'
import Reminders from '@components/settings/shared/Reminders'

function SharedSettingsPage() {
    return (
        <Settings>
            <Appearance />
            <Tracking />
            <Cookies />
            <GDPR />
            <Privacy />
            <Preferences />
            <Reminders />
            <Profile />
            <Sessions />
        </Settings>
    )
}

export default SharedSettingsPage