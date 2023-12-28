import { Unit_Distance, Unit_Volumen, Unit_Weight } from "fenextjs-interface/cjs/Unit";
export type Unit_All = Unit_Distance | Unit_Volumen | Unit_Weight;
export declare const parseUnitToText: (unit: Unit_All) => string;
