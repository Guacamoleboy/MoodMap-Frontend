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
import Day3 from '../days/Day3'
import Day4 from '../days/Day4'
import Day5 from '../days/Day5'
import Day6 from '../days/Day6'
import Day7 from '../days/Day7'
import Day8 from '../days/Day8'
import Day9 from '../days/Day9'
import Day10 from '../days/Day10'
import Day11 from '../days/Day11'
import Day12 from '../days/Day12'
import Day13 from '../days/Day13'
import Day14 from '../days/Day14'
import Day15 from '../days/Day15'
import Day16 from '../days/Day16'
import Day17 from '../days/Day17'

export const DEVLOGS = [
    {
        id: 1,
        component: Day1,
    },
    {
        id: 2,
        component: Day2,
    },
    {
        id: 3,
        component: Day3,
    },
    {
        id: 4,
        component: Day4,
    },
    {
        id: 5,
        component: Day5,
    },
    {
        id: 6,
        component: Day6,
    },
    {
        id: 7,
        component: Day7,
    },
    {
        id: 8,
        component: Day8,
    },
    {
        id: 9,
        component: Day9,
    },
    {
        id: 10,
        component: Day10,
    },
    {
        id: 11,
        component: Day11,
    },
    {
        id: 12,
        component: Day12,
    },
    {
        id: 13,
        component: Day13,
    },
    {
        id: 14,
        component: Day14,
    },
    {
        id: 15,
        component: Day15,
    },
    {
        id: 16,
        component: Day16,
    },
    {
        id: 17,
        component: Day17,
    }
]