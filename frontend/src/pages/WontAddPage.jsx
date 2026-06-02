// Pathing
// _______
// src/pages/WontAddPage.jsx

import WontAdd from "@components/shared/wont-add/WontAdd"
import { Helmet } from 'react-helmet-async'

const WontAddPage = () => (
    <>

        {/* Title Tag Setup*/}
        <Helmet>
            <title>MoodMap - Wont Add</title>
        </Helmet>

        <WontAdd />
    </>
)

export default WontAddPage