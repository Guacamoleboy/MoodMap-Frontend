// Pathing
// _______
// src/pages/LoginPage.jsx

import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Login from '@components/login/Login'
import Notification from '@components/shared/notification/Notification'
import { useAuth } from '../hooks/useAuth'

const LoginPage = () => {

    // ---- SETUP -----------------------------------------------------------------------------------------------------------------

    const { login, loading } = useAuth()
    const [error, setError] = useState(() => sessionStorage.getItem("login_error"))
    const token = localStorage.getItem("access_token")

    // ---- CLEAR ERROR --------------------------------------------------------------------------------------------------

    useEffect(() => {
        sessionStorage.removeItem("login_error")
    }, [])

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
        try {
            await login(credentials)
        } catch (err) {
            sessionStorage.setItem("login_error", err.message)
        }
    }

    // ---- RETURN ----------------------------------------------------------------------------------------------------------------

    return (
        <>
            <Login onSubmit={handleSubmit} loading={loading} />

            {error && (
                <Notification
                    message={error}
                    type="error"
                    onClose={() => setError(null)}
                />
            )}
        </>
    )
}

export default LoginPage