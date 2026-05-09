// Pathing
// _______
// src/api/endpoints/auth.js

import { client } from "../client"

// ------ LOGIN ---------------------------------------------------------------

export function loginUser(credentials) {
    return client("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials)
    })
}

// ------ ME ------------------------------------------------------------------

export function getMe() {
    return client("/auth/me")
}