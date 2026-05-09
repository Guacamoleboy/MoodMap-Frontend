// Pathing
// _______
// src/api/client.js

const BASE_URL = "https://api.guacamoleboy.dk/v1"

export async function client(endpoint, options = {}) {

    // ---- SETUP ----------------------------------------------------------------------------------------------------------

    const url = `${BASE_URL}${endpoint}`
    const token = localStorage.getItem("access_token")

    console.log("[API REQUEST]")
    console.log("URL:", url)
    console.log("METHOD:", options.method || "GET")
    console.log("BODY:", options.body || null)

    // ---- CONFIG SETUP ---------------------------------------------------------------------------------------------------

    const config = {
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(options.headers || {})
        },
        ...options
    }

    // ---- RESPONSE & DATA  ----------------------------------------------------------------------------------------------

    const response = await fetch(url, config)
    const data = await response.json().catch(() => null)

    // ---- ERROR HANDLE --------------------------------------------------------------------------------------------------

    if (!response.ok) {
        
        if (response.status === 401) {
            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")
            window.location.href = "/login"
        }

        const error = new Error(data?.message || "API request failed")
        error.status = response.status
        error.data = data

        console.log(error) // DEBUG
        throw error

    }

    return data

}