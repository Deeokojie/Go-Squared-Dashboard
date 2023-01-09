import {tokens } from "../theme";

export const dummydata = [
    {
        id: 1,
        name: "billy joe",
        visits_online: 1,
        drinkstaken: 2,
        entrytemp: "22°C",
        wateredplants: 2,
        entrytime: "09:00",
        access: "admin",
    },
    {
        id: 2,
        name: "mason felix",
        visits_online: 4,
        drinkstaken: 4,
        entrytemp: "19°C",
        wateredplants: 1,
        entrytime: "09:30", 
        acess: "user",
    },
    {
        id: 3,
        name: "Donna ray",
        visits_online: 6,
        drinkstaken: 4,
        entrytemp: "24°C",
        wateredplants: 3,
        entrytime: "10:00",
        acess: "user",
    },
    {
        id: 4,
        name: "lionel messi",
        visits_online: 6,
        drinkstaken: 5,
        entrytemp: "26°C",
        wateredplants: 3,
        entrytime: "011:00",
        acess: "manager",
    },
    {
        id: 5,
        name: "christiano ronaldo",
        visits_online: 4,
        drinkstaken: 3,
        entrytemp: "20°C",
        wateredplants: 4,
        entrytime: "12:00",
        acess: "user",
    }
];

export const dummybarData = [
    {
    county: "AD",
    "hot dog": 137,
    "hot dogcolor": "hsl(296, 70%, 50%)",
    burger: 96,
    burgercolor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabcolor: "hsl(97, 70%, 50%",
    donut: 140,
    donutcolor: "hsl(340, 70%, 50%",
},
{
    county: "AF",
    "hot dog": 109,
    "hot dogcolor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgercolor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabcolor: "hsl(106, 70%, 50%",
    donut: 152,
    donutcolor: "hsl(256, 70%, 50%",
},
{
    county: "AE",
    "hot dog": 55,
    "hot dogcolor": "hsl(307, 70%, 50%)",
    burger: 96,
    burgercolor: "hsl(111, 70%, 50%)",
    kebab: 72,
    kebabcolor: "hsl(273, 70%, 50%",
    donut: 140,
    donutcolor: "hsl(275, 70%, 50%",
},
{
    county: "AR",
    "hot dog": 133,
    "hot dogcolor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgercolor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabcolor: "hsl(110, 70%, 50%",
    donut: 83,
    donutcolor: "hsl(9, 70%, 50%",
},
{
    county: "AI",
    "hot dog": 81,
    "hot dogcolor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgercolor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabcolor: "hsl(54, 70%, 50%",
    donut: 35,
    donutcolor: "hsl(285, 70%, 50%",
},    
];

export const dummypiedata = [
    {
        id: "coffee",
        label: "coffee",
        value: 170,
        color: "hsl(104, 70%, 50%)",
    },
    {
        id: "tea",
        label: "tea",
        value: 170,
        color: "hsl(104, 70%, 50%)",
    },
    {
        id: "water",
        label: "water",
        value: 170,
        color: "hsl(104, 70%, 50%)",
    },
    {
        id: "apple juice",
        label: "apple juice",
        value: 170,
        color: "hsl(104, 70%, 50%)",
    },
    {
        id: "milk",
        label: "milk",
        value: 170,
        color: "hsl(104, 70%, 50%)",
    },
];

export const dummyLinedata = [
    {
        id: "france",
        color: tokens("dark").blueAccent[300],
        data: [
            {
                x: "billy",
                y: "190",
            },
            {
                x: "mason",
                y: "45",
            },
            {
                x: "Donna",
                y: "211",
            },
            {
                x: "lionel",
                y: "34",
            },
            {
                x: "christiano",
                y: "67",
            },
        ],
    },
    {
        id: "argentina",
        color: tokens("dark").greenAccent[500],
        data: [
            {
                x: "billy",
                y: "20",
            },
            {
                x: "mason",
                y: "50",
            },
            {
                x: "Donna",
                y: "312",
            },
            {
                x: "lionel",
                y: "73",
            },
            {
                x: "christiano",
                y: "90",
            },
        ],
    },
    {
        id: "portual",
        color: tokens("dark").redAccent[200],
        data: [
            {
                x: "billy",
                y: "30",
            },
            {
                x: "mason",
                y: "29",
            },
            {
                x: "Donna",
                y: "174",
            },
            {
                x: "lionel",
                y: "82",
            },
            {
                x: "christiano",
                y: "72",
            },
        ],
    },
    {
        id: "mexico",
        color: tokens("dark").redAccent[280],
        data: [
            {
                x: "billy",
                y: "10",
            },
            {
                x: "mason",
                y: "20",
            },
            {
                x: "Donna",
                y: "112",
            },
            {
                x: "lionel",
                y: "53",
            },
            {
                x: "christiano",
                y: "80",
            },
        ],
    },
    {
    id: "portugal",
        color: tokens("dark").blueAccent[350],
        data: [
            {
                x: "billy",
                y: "17",
            },
            {
                x: "mason",
                y: "45",
            },
            {
                x: "Donna",
                y: "342",
            },
            {
                x: "lionel",
                y: "313",
            },
            {
                x: "christiano",
                y: "400",
            },
        ],
    },
];

export const dummyGeographydata = [
    {
        id: "ARG",
        value: 520600,
    },
    {
        id: "Por",
        value: 340600,
    },
    {
        id: "ENG",
        value: 520600,
    },
    {
        id: "SPA",
        value: 520600,
    },
    {
        id: "WAL",
        value: 520600,
    },
];
