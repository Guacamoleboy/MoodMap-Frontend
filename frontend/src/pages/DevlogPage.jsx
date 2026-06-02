// Pathing
// _______
// src/pages/DevlogPage.jsx

import Devlog from '@components/devlog/Devlog'
import { Helmet } from 'react-helmet-async'

const DevlogPage = () => (
    <>
        {/* Title Tag Setup*/}
        <Helmet>
            <title>MoodMap - Devlog</title>
        </Helmet>

        <Devlog />
    </>
)

export default DevlogPage