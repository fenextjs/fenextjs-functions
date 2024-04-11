import { CSCProps, CSCStringProps } from "fenextjs-interface";
import { parseString_to_Country, parseCountry_to_String } from "../Country";
import { parseString_to_State, parseState_to_String } from "../State";
import { parseString_to_City, parseCity_to_String } from "../City";

export const parseCSC_to_CSCString = (
    data: CSCProps | undefined | null,
): CSCStringProps | undefined => {
    if (data == undefined || data == null) {
        return undefined;
    }
    try {
        return {
            country: parseCountry_to_String(data?.country),
            state: parseState_to_String(data?.state),
            city: parseCity_to_String(data?.city),
        };
    } catch {
        return {};
    }
};

export const parseCSCString_to_CSC = (
    data: CSCStringProps | undefined | null,
): CSCProps | undefined => {
    if (data == undefined || data == null) {
        return undefined;
    }
    try {
        return {
            country: parseString_to_Country(data?.country),
            state: parseString_to_State(data?.state),
            city: parseString_to_City(data?.city),
        };
    } catch {
        return {};
    }
};
