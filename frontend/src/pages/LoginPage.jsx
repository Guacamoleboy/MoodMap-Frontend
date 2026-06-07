// Pathing
// _______
// src/pages/LoginPage.jsx

import {useEffect,useState} from "react"
import {Navigate} from "react-router-dom"
import Login from "@components/login/Login"
import Notification from "@components/shared/notification/Notification"
import { useAuth } from "@hooks/useAuth"
import { Helmet } from 'react-helmet-async'

const LoginPage = () => {

    // ---- SETUP -------------------------------------------------------------

    const {login, loginLoading, isAuthenticated} = useAuth()
    const [error, setError] = useState(() => sessionStorage.getItem("login_error"))

    // ---- CLEAR ERROR -------------------------------------------------------

    useEffect(() => {
        sessionStorage.removeItem("login_error")
    }, [])

    // ---- REDIRECT ----------------------------------------------------------

    if (isAuthenticated) {

        return (
            <Navigate
                to="/dashboard"
                replace
            />
        )

    }

    // ---- SUBMIT ------------------------------------------------------------

    const handleSubmit = async (e) => {
        
        // State control + browser re-load safety
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
            setError(err.message)
        }

    }

    // ---- RETURN ------------------------------------------------------------

    return (
        <>

            {/* Title Tag Setup*/}
            <Helmet>
                <title>MoodMap - Log Ind</title>
            </Helmet>

            <Login
                onSubmit={handleSubmit}
                loading={loginLoading}
            />

            {error && (

                <Notification
                    message={error}
                    type="error"
                    onClose={() =>
                        setError(null)
                    }
                />

            )}

        </>
    )

}

export default LoginPage