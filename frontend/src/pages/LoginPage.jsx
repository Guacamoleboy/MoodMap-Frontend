// Pathing
// _______
// src/pages/LoginPage.jsx

import { Navigate } from 'react-router-dom'
import Login from '@components/login/Login'
import { useAuth } from '../hooks/useAuth'

const LoginPage = () => {

    // ---- SETUP -----------------------------------------------------------------------------------------------------------------

    const { login, loading, error } = useAuth()
    const token = localStorage.getItem("access_token")

    // ---- TOKEN CHECK -> REDIRECT  ----------------------------------------------------------------------------------------------

    if (token) return <Navigate to="/dashboard" replace />

    // ---- EVENT HANDLE ----------------------------------------------------------------------------------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const credentials = {
            username: formData.get("username"),
            password: formData.get("password")
        }
        await login(credentials)
    }

    // ---- RETURN ----------------------------------------------------------------------------------------------------------------

    return (
        <Login
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
        />
    )
}

export default LoginPage