// Pathing
// _______
// src/context/AuthProvider.jsx

// ------------------------------------------------------------------------------------------------

//  What's the purpose of this class?
//  _________________________________
//
//      -   The core authentication system for the entire MoodMap application.
//

// ------------------------------------------------------------------------------------------------

import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {AuthContext} from "./AuthContext"
import {loginUser, getMe} from "@api/endpoints/auth"
import { decodeToken } from "@utils/token"

// ---- PROVIDER --------------------------------------------------------------

export function AuthProvider({children}) {

    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)
    const [loginLoading, setLoginLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    // ---- INITIAL AUTH CHECK ------------------------------------------------

    useEffect(() => {

        const validateUser = async () => {

            const token = localStorage.getItem("access_token")

            // Validation
            if (!token) {
                setAuthLoading(false)
                return
            }

            // Try or fail
            try {
                await getMe()
                const decodedUser = decodeToken(token)
                setUser(decodedUser)
            } catch {
                localStorage.removeItem("access_token")
                localStorage.removeItem("refresh_token")
                setUser(null)
            } finally {
                setAuthLoading(false)
            }
        }

        validateUser()

    }, [])

    // ---- LOGIN -------------------------------------------------------------

    const login = async (credentials) => {

        setLoginLoading(true)
        setError(null)

        try {

            const response = await loginUser(credentials)
            const {access_token, refresh_token} = response.data
            localStorage.setItem("access_token", access_token)
            localStorage.setItem("refresh_token", refresh_token)

            const decodedUser = decodeToken(access_token)

            setUser(decodedUser)

            navigate("/dashboard")

        } catch (err) {
            setError(err.message)
            throw err
        } finally {

            setLoginLoading(false)

        }

    }

    // ---- LOGOUT ------------------------------------------------------------

    const logout = () => {

        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        setUser(null)

        navigate("/")

    }

    // ---- CONTEXT VALUE -----------------------------------------------------

    const value = {
        user,
        error,
        login,
        logout,
        authLoading,
        loginLoading,
        isAuthenticated: !!user
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}