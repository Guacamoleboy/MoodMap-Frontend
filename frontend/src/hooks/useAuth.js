// Pathing
// _______
// src/hooks/useAuth.js

// ------------------------------------------------------------------------------------------------

//  What's the purpose of this class?
//  _________________________________
//
//      -   Provides easy access to the AuthContext without ESLint issues.
//      -   SoC. 
//      -   Uses useAuth() instead of useContext(AuthContext). Which is longer and more boilerplate.
//

// ------------------------------------------------------------------------------------------------

import { useContext }from "react"
import { AuthContext }from "@context/AuthContext"

export function useAuth() {
    return useContext(AuthContext)
}