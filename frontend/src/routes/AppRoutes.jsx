// Pathing
// _______
// src/routes/AppRoutes.jsx

import { Routes, Route } from 'react-router-dom'
import AppPage from '@pages/AppPage'
import LoginPage from '@pages/LoginPage'
import NoMatchPage from '@pages/NoMatchPage'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<AppPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NoMatchPage />} />
    </Routes>
)

export default AppRoutes