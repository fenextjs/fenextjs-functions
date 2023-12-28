import {
    Unit_Distance,
    Unit_Volumen,
    Unit_Weight,
} from "fenextjs-interface/cjs/Unit";

export type Unit_All = Unit_Distance | Unit_Volumen | Unit_Weight;

export const parseUnitToText = (unit: Unit_All): string => {
    const sw: {
        [id in Unit_All]: string;
    } = {
        CC: "cc",
        CM: "cm",
        CM3: "cm³",
        FT: "pie",
        FT3: "pie³",
        G: "g",
        GAL: "galon",
        IN: "pul",
        IN3: "pul³",
        KG: "kg",
        L: "l",
        LB: "lib",
        M: "m",
        M3: "m³",
        ML: "ml",
        MM: "mm",
        OZ: "onz",
    };
    return sw[unit];
};
