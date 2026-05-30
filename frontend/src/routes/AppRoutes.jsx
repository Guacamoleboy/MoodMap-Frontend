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
import DevlogLayout from '@layout/DevlogLayout'

import SharedSettingsPage from '@pages/settings/SharedSettingsPage'
import AdminSettingsPage from '@pages/settings/AdminSettingsPage'

import AppPage from '@pages/AppPage'
import LoginPage from '@pages/LoginPage'
import ForgotPage from '@pages/ForgotPage'
import DevlogPage from '@pages/DevlogPage'

import AdminDashboardPage from '@pages/dashboard/admin/AdminDashboardPage'
import AdminOverviewPage from '@pages/dashboard/admin/AdminOverviewPage'
import AdminDataPage from '@pages/dashboard/admin/AdminDataPage'
import AdminToolsPage from '@pages/dashboard/admin/AdminToolsPage'
import AdminAccessPage from '@pages/dashboard/admin/AdminAccessPage'

import ModeratorDashboardPage from '@pages/dashboard/moderator/ModeratorDashboardPage'
import ModeratorOverviewPage from '@pages/dashboard/moderator/ModeratorOverviewPage'
import ModeratorUsersPage from '@pages/dashboard/moderator/ModeratorUsersPage'
import ModeratorTicketsPage from '@pages/dashboard/moderator/ModeratorTicketsPage'
import ModeratorInternalPage from '@pages/dashboard/moderator/ModeratorInternalPage'

import SupportDashboardPage from '@pages/dashboard/support/SupportDashboardPage'
import SupportOverviewPage from '@pages/dashboard/support/SupportOverviewPage'
import SupportUsersPage from '@pages/dashboard/support/SupportUsersPage'
import SupportTicketsPage from '@pages/dashboard/support/SupportTicketsPage'
import SupportInternalPage from '@pages/dashboard/support/SupportInternalPage'

import ClinicianDashboardPage from '@pages/dashboard/clinician/ClinicianDashboardPage'
import ClinicianOverviewPage from '@pages/dashboard/clinician/ClinicianOverviewPage'
import ClinicianPatientsPage from '@pages/dashboard/clinician/ClinicianPatientsPage'
import ClinicianAppointmentsPage from '@pages/dashboard/clinician/ClinicianAppointmentsPage'
import ClinicianMedicinePage from '@pages/dashboard/clinician/ClinicianMedicinePage'
import ClinicianMessagesPage from '@pages/dashboard/clinician/ClinicianMessagesPage'

import ClinicDashboardPage from '@pages/dashboard/clinic/ClinicDashboardPage'
import ClinicOverviewPage from '@pages/dashboard/clinic/ClinicOverviewPage'
import ClinicTeamPage from '@pages/dashboard/clinic/ClinicTeamPage'
import ClinicDataPage from '@pages/dashboard/clinic/ClinicDataPage'
import ClinicMessagesPage from '@pages/dashboard/clinic/ClinicMessagesPage'

import ClientDashboardPage from '@pages/dashboard/client/ClientDashboardPage'
import ClientOverviewPage from '@pages/dashboard/client/ClientOverviewPage'
import ClientAppointmentsPage from '@pages/dashboard/client/ClientAppointmentsPage'
import ClientMedicinePage from '@pages/dashboard/client/ClientMedicinePage'
import ClientFormsPage from '@pages/dashboard/client/ClientFormsPage'

import NoMatchPage from '@pages/NoMatchPage'
import WontAddPage from '@pages/WontAddPage'

import DocsPage from '@pages/DocsPage'

const AppRoutes = () => (
    <Routes>

        {/* APP */}
        <Route element={<AppLayout />}>
            <Route path="/" element={<AppPage />} />
            <Route path="/docs" element={<DocsPage />} />
        </Route>

        {/* PROTECTED */}
        <Route element={<ProtectedRoutes />}>
            <Route element={<DashboardLayout />}>

                {/* DASHBOARD SPECIFIC */}
                <Route path="/dashboard" element={<DashboardRedirect />} />

                    {/* ADMIN */}
                    <Route element={<RoleRoutes role="Admin" />}>
                        <Route path="/dashboard/admin" element={<AdminDashboardPage />}>
                            <Route index element={<AdminOverviewPage />} />
                            <Route path="data" element={<AdminDataPage />} />
                            <Route path="tools" element={<AdminToolsPage />} />
                            <Route path="access" element={<AdminAccessPage />} />
                        </Route>
                    </Route>
                    
                    {/* MODERATOR */}
                    <Route element={<RoleRoutes role="Moderator" />}>
                        <Route path="/dashboard/moderator" element={<ModeratorDashboardPage />}>
                            <Route index element={<ModeratorOverviewPage />} />
                            <Route path="users" element={<ModeratorUsersPage />} />
                            <Route path="tickets" element={<ModeratorTicketsPage />} />
                            <Route path="internal" element={<ModeratorInternalPage />} />
                        </Route>
                    </Route>

                    {/* SUPPORT */}
                    <Route element={<RoleRoutes role="Support" />}>
                        <Route path="/dashboard/support" element={<SupportDashboardPage />}>
                            <Route index element={<SupportOverviewPage />} />
                            <Route path="users" element={<SupportUsersPage />} />
                            <Route path="tickets" element={<SupportTicketsPage />} />
                            <Route path="internal" element={<SupportInternalPage />} />
                        </Route>
                    </Route>

                    {/* CLINICIAN */}
                    <Route element={<RoleRoutes role="Clinician" />}>
                        <Route path="/dashboard/clinician" element={<ClinicianDashboardPage />}>
                            <Route index element={<ClinicianOverviewPage />} />
                            <Route path="patients" element={<ClinicianPatientsPage />} />
                            <Route path="appointments" element={<ClinicianAppointmentsPage />} />
                            <Route path="medicine" element={<ClinicianMedicinePage />} />
                            <Route path="messages" element={<ClinicianMessagesPage />} />
                        </Route>
                    </Route>

                    {/* CLINIC */}
                    <Route element={<RoleRoutes role="Clinic" />}>
                        <Route path="/dashboard/clinic" element={<ClinicDashboardPage />}>
                            <Route index element={<ClinicOverviewPage />} />
                            <Route path="team" element={<ClinicTeamPage />} />
                            <Route path="data" element={<ClinicDataPage />} />
                            <Route path="messages" element={<ClinicMessagesPage />} />
                        </Route>
                    </Route>

                    {/* CLIENT */}
                    <Route element={<RoleRoutes role="Client" />}>
                        <Route path="/dashboard/client" element={<ClientDashboardPage />}>
                            <Route index element={<ClientOverviewPage />} />
                            <Route path="appointments" element={<ClientAppointmentsPage />} />
                            <Route path="medicine" element={<ClientMedicinePage />} />
                            <Route path="forms" element={<ClientFormsPage />} />
                        </Route>
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

        {/* DEVLOG */}
        <Route element={<DevlogLayout />}>
            <Route path="/devlog" element={<DevlogPage />} />
        </Route>

        {/* ERRORS */}
        <Route element={<ErrorLayout />}>
            <Route path="*" element={<NoMatchPage />} />
            <Route path="/wontadd" element={<WontAddPage />} />
        </Route>

    </Routes>
)

export default AppRoutes