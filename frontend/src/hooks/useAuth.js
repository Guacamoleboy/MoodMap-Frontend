// Pathing
// _______
// src/hooks/useAuth.js

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../api/endpoints/auth"

// ------ JWT DECODE -------------------------------------------------------------------

const decodeToken = (token) => {
    try {
        const payload = token.split(".")[1]
        return JSON.parse(atob(payload))
    } catch {
        return null
    }
}

// ------ GET USER -------------------------------------------------------------------

export const getUser = () => {
    const token = localStorage.getItem("access_token")
    return token ? decodeToken(token) : null
}

// ------ USE AUTH -------------------------------------------------------------------

export function useAuth() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    // LOG IN
    // ____________

    const login = async (credentials) => {
        setLoading(true)
        setError(null)
        try {
            const response = await loginUser(credentials)
            const { access_token, refresh_token } = response.data
            localStorage.setItem("access_token", access_token)
            localStorage.setItem("refresh_token", refresh_token)
            navigate("/dashboard")
        } catch (err) {
            setError(err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    // LOG OUT
    // ____________

    const logout = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        navigate("/")
    }

    return { login, logout, loading, error }

}