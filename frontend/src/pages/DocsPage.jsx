// Pathing
// _______
// src/pages/DocsPage.jsx

import Docs from "@components/docs/Docs"
import { Helmet } from 'react-helmet-async'

const DocsPage = () => (
    <>

        {/* Title Tag Setup*/}
        <Helmet>
            <title>MoodMap - Docs</title>
        </Helmet>

       <Docs />
    </>
)

export default DocsPage