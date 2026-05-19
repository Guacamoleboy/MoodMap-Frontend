// Pathing
// _______
// src/components/devlog/data/devlogs.js

// ------------------------------------------------------------------------------------------------

//  Why not src/config ?
//  _________________________________
//
//      -   This class is only for the devlog component where the src/config is for the app. So keeping it as a data/ entry
//          under the component makes sense.
//      -   Since it's data and not config (rule set) it should be in data/ instead of config/ too.
//

// ------------------------------------------------------------------------------------------------

import Day1 from '../days/Day1'
import Day2 from '../days/Day2'

export const DEVLOGS = [
    {
        id: 1,
        component: Day1,
    },
    {
        id: 2,
        component: Day2,
    },
]