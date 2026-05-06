// Pathing
// _______
// src/routes/AppRoutes.jsx

import { Routes, Route } from 'react-router-dom'

import ProtectedRoutes from './ProtectedRoutes'

import AppLayout from '@layout/AppLayout'
import AuthLayout from '@layout/AuthLayout'
import DashboardLayout from '@layout/DashboardLayout'
import ErrorLayout from '@layout/ErrorLayout'

import AppPage from '@pages/AppPage'
import LoginPage from '@pages/LoginPage'
import ForgotPage from '@pages/ForgotPage'
import DashboardPage from '@pages/DashboardPage'
import NoMatchPage from '@pages/NoMatchPage'
import WontAddPage from '../pages/WontAddPage'

const AppRoutes = () => (
    <Routes>

        {/* APP */}
        <Route element={<AppLayout />}>
            <Route path="/" element={<AppPage />} />
        </Route>

        {/* PROTECTED */}
        <Route element={<ProtectedRoutes />}>
            <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot" element={<ForgotPage />} />
        </Route>

        {/* ERRORS */}
        <Route element={<ErrorLayout />}>
            <Route path="*" element={<NoMatchPage />} />
            <Route path="/wontadd" element={<WontAddPage />} />
        </Route>

    </Routes>
)

export default AppRoutes