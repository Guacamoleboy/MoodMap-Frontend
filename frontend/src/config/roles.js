// Pathing
// _______
// src/config/roles.js

// ------------------------------------------------------------------------------------------------

//  Why not src/data or another pathing ?
//  _________________________________
//
//      -   It's a rule set for the entire application along with pathing rules and settings from those.
//          For that reason this is not data as data/ folder usually represents but a rule set that the entire
//          application should follow or WILL follow.
//

// ------------------------------------------------------------------------------------------------

export const ROLE_REDIRECT = {
    Admin: "/dashboard/admin",
    Moderator: "/dashboard/moderator",
    Support: "/dashboard/support",
    Clinician: "/dashboard/clinician",
    Clinic: "/dashboard/clinic",
    Client: "/dashboard/client"
}

export const ROLE_ACCESS = {
    Admin: [
        "Admin",
        "Moderator",
        "Support"
    ],
    Moderator: [
        "Moderator"
    ],
    Support: [
        "Support"
    ],
    Clinician: [
        "Clinician"
    ],
    Clinic: [
        "Clinic"
    ],
    Client: [
        "Client"
    ]
}