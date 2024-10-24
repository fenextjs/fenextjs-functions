import { CountryProps } from "fenextjs-interface";
import { getRuteCountryImg } from "country-state-city-nextjs";

export const parseCountry_to_String = (
    data: CountryProps | undefined | null,
): string | undefined => {
    if (data == undefined || data == null) {
        return undefined;
    }
    try {
        return JSON.stringify(data);
    } catch {
        return `${data}`;
    }
};

export const parseString_to_Country = (
    data: string | undefined | null,
): CountryProps | undefined => {
    if (data == undefined || data == null) {
        return undefined;
    }
    try {
        const country =  JSON.parse(`${data ?? ""}`) as CountryProps;

        if(country && country?.id && country?.text && !country?.img){
            country.img = getRuteCountryImg(country)
        }

        return country
    } catch {
        return {
            id: -1,
            code: "",
            text: `${data ?? ""}`,
        };
    }
};
