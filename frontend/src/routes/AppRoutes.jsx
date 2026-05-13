// Pathing
// _______
// src/routes/AppRoutes.jsx

import { Routes, Route } from 'react-router-dom'

import ProtectedRoutes from './ProtectedRoutes'
import RoleRoutes, { DashboardRedirect } from './RoleRoutes'

import AppLayout from '@layout/AppLayout'
import AuthLayout from '@layout/AuthLayout'
import DashboardLayout from '@layout/DashboardLayout'
import ErrorLayout from '@layout/ErrorLayout'

import SharedSettingsPage from '@pages/settings/SharedSettingsPage'
import AdminSettingsPage from '@pages/settings/AdminSettingsPage'

import AppPage from '@pages/AppPage'
import LoginPage from '@pages/LoginPage'
import ForgotPage from '@pages/ForgotPage'
import AdminDashboardPage from '@pages/dashboard/AdminDashboardPage'
import ClientDashboardPage from '@pages/dashboard/ClientDashboardPage'
import ClinicianDashboardPage from '@pages/dashboard/ClinicianDashboardPage'
import ClinicDashboardPage from '@pages/dashboard/ClinicDashboardPage'
import NoMatchPage from '@pages/NoMatchPage'
import WontAddPage from '@pages/WontAddPage'

const AppRoutes = () => (
    <Routes>

        {/* APP */}
        <Route element={<AppLayout />}>
            <Route path="/" element={<AppPage />} />
        </Route>

        {/* PROTECTED */}
        <Route element={<ProtectedRoutes />}>
            <Route element={<DashboardLayout />}>

                {/* DASHBOARD SPECIFIC */}
                <Route path="/dashboard" element={<DashboardRedirect />} />

                <Route element={<RoleRoutes role="Admin" />}>
                    <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
                </Route>

                <Route element={<RoleRoutes role="Clinician" />}>
                    <Route path="/dashboard/clinician" element={<ClinicianDashboardPage />} />
                </Route>

                <Route element={<RoleRoutes role="Clinic" />}>
                    <Route path="/dashboard/clinic" element={<ClinicDashboardPage />} />
                </Route>

                <Route element={<RoleRoutes role="Client" />}>
                    <Route path="/dashboard/client" element={<ClientDashboardPage />} />
                </Route>

                {/* SETTINGS*/}
                <Route path="/settings" element={<SharedSettingsPage />} />

                <Route element={<RoleRoutes role="Admin" />}>
                    <Route path="/settings/admin" element={<AdminSettingsPage />} />
                </Route>

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