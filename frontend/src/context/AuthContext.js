// Pathing
// _______
// src/context/AuthContext.js

// ------------------------------------------------------------------------------------------------

//  What's the purpose of this class?
//  _________________________________
//
//      -   It acts as a container for stateless Global Authentication instead of 
//          authentication pr component.
//

// ------------------------------------------------------------------------------------------------

import { createContext } from "react"

export const AuthContext = createContext(null)