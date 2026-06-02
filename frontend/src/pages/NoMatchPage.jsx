// Pathing
// _______
// src/pages/NoMatchPage.jsx

import NoMatch from '@components/no-match/NoMatch'
import { Helmet } from 'react-helmet-async'

const NoMatchPage = () => (
        <>
        
            {/* Title Tag Setup*/}
            <Helmet>
                <title>MoodMap - Prøv igen</title>
            </Helmet>

            <NoMatch />
        </>
)

export default NoMatchPage