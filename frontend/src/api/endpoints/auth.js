// Pathing
// _______
// src/api/endpoints/auth.js

import { client } from "../client";

export function loginUser(credentials) {

    // ---- RETURN ----------------------------------------------------------------------------------------------------------

    return client("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials)
    });

}