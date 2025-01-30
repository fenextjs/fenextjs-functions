import { TypeDate } from "fenextjs-interface/cjs/Day";

/**
 * Converts a Date object into a string in the "YYYY-MM-DD" format.
 *
 * @param {Date} date - The Date object to convert.
 * @returns {string} A string representation of the Date object in the "YYYY-MM-DD" format.
 */
export const parseDateYYYYMMDD = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

/**
 * The properties used to convert a text into a date.
 *
 * @interface
 * @property {string} text - The text to convert into a date.
 * @property {TypeDate} type - The type of date to create from the text.
 */
export interface parseTextToDateProps {
    text: string;
    type: TypeDate;
}

/**
 * Converts a text into a date according to the specified type.
 *
 * @param {parseTextToDateProps} props - The properties used to convert the text into date.
 * @returns {Date} A date created from the specified text.
 */
export const parseTextToDate = ({ text, type }: parseTextToDateProps) => {
    const date = new Date();

    if (type == "date") {
        const a = text.split("-");
        date.setFullYear(parseInt(a?.[0]));
        date.setMonth(parseInt(a?.[1]) - 1);
        date.setDate(parseInt(a?.[2]));
        return date;
    }
    if (type == "month") {
        const a = text.split("-");

        date.setFullYear(parseInt(a?.[0]));
        date.setMonth(parseInt(a?.[1]) - 1);
        date.setDate(1);
        return date;
    }
    if (type == "week") {
        const a = text.split("-W");
        date.setFullYear(parseInt(a?.[0]));
        date.setMonth(0);
        date.setDate(parseInt(a?.[1]) * 7);
        return date;
    }
    if (type == "time") {
        const a = text.split(":");
        date.setHours(parseInt(a?.[0]));
        date.setMinutes(parseInt(a?.[1]));
        return date;
    }
    return date;
};
/**
 * The properties used to convert a date into a string.
 *
 * @interface
 * @property {Date} [date] - The date to convert into a string. If not provided, the current date will be used.
 * @property {(TypeDate | "YYYY-MM-DD")} type - The type of string to create from the date.
 */
export interface parseDateToTextProps {
    date?: Date;
    type: TypeDate | "YYYY-MM-DD";
}

/**
 * Converts a date into a string based on the given type.
 *
 * @function
 * @param {parseDateToTextProps} - The properties used to convert a date into a string.
 * @returns {string} - The date converted into a string.
 */
export const parseDateToText = ({
    date = new Date(),
    type,
}: parseDateToTextProps) => {
    if (type == "YYYY-MM-DD") {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    if (type == "date") {
        return date.toDateString();
    }
    if (type == "month") {
        return getMonthValue(date);
    }
    if (type == "week") {
        const tf: any = new Date(date);
        const ti: any = new Date(tf.getFullYear(), 0, 0);
        const diff = tf - ti;
        const oneDay = 1000 * 60 * 60 * 24;
        const d = Math.floor(diff / oneDay);
        const w = d / 7;
        return `${date.getFullYear()}-W${w}`;
    }
    if (type == "time") {
        return getTimeValue(date);
    }
    return "";
};
/**
 * Gets the month value in "yyyy-mm" format from a given date.
 * @param {Date} date - The date from which to get the month value.
 * @returns {string} - The month value in "yyyy-mm" format.
 */
export const getMonthValue = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
};

/**
 * Gets the week value in "yyyy-Www" format from a given date.
 * @param {Date} date - The date from which to get the week value.
 * @returns {string} - The week value in "yyyy-Www" format.
 */
export const getWeekValue = (date: Date) => {
    const year = date.getFullYear();
    const week = getISOWeek(date);
    return `${year}-W${week}`;
};

/**
 * Gets the ISO week number for a given date.
 * @param {Date} date - The date for which to get the ISO week number.
 * @returns {number} - The ISO week number corresponding to the given date.
 */
export const getISOWeek = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear =
        (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

/**
 * Gets the time value in "hh:mm" format from a given date.
 * @param {Date} date - The date from which to get the time value.
 * @returns {string} - The time value in "hh:mm" format.
 */
export const getTimeValue = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
};

/**
 * Interface specifying optional properties for configuring the output of the getTimeToText function.
 */
export interface getTimeToTextProps {
    /**
     * Include the day component in the output. Defaults to true.
     */
    days?: boolean;

    /**
     * Include the hour component in the output. Defaults to true.
     */
    hours?: boolean;

    /**
     * Include the minute component in the output. Defaults to true.
     */
    minutes?: boolean;

    /**
     * Include the second component in the output. Defaults to true.
     */
    seconds?: boolean;
}
/**
 * Converts a given date into a string representation of time in "hh:mm:ss" format.
 * @param {Date} date - The date object to extract the time from.
 * @param {getTimeToTextProps} options - An optional object specifying which time components to include.
 * @returns {string} - The formatted time string in "hh:mm:ss" format.
 */
export const getTimeToText = (
    date: Date,
    options?: getTimeToTextProps,
): string => {
    /**
     * Helper function to pad a number with leading zeros if needed.
     * @param {number} n - The number to be padded.
     * @returns {string} - The padded number as a string.
     */
    const padNumber = (n: number): string => String(n).padStart(2, "0");

    // An array to store the individual components of the time string
    const timeComponents: string[] = [];

    // Include day component in the time string if 'days' option is not explicitly set to false
    if (options?.days !== false) {
        timeComponents.push(`${padNumber(date.getDate())}`);
    }

    // Include hour component in the time string if 'hours' option is not explicitly set to false
    if (options?.hours !== false) {
        timeComponents.push(`${padNumber(date.getHours())}`);
    }

    // Include minute component in the time string if 'minutes' option is not explicitly set to false
    if (options?.minutes !== false) {
        timeComponents.push(`${padNumber(date.getMinutes())}`);
    }

    // Include second component in the time string if 'seconds' option is not explicitly set to false
    if (options?.seconds !== false) {
        timeComponents.push(`${padNumber(date.getSeconds())}`);
    }

    // Join the time components using ":" as a separator and return the formatted time string
    return timeComponents.join(":");
};

export interface parseDateTimeFormatOptions {
    localeMatcher?: "best fit" | "lookup" | undefined;
    weekday?: "long" | "short" | "narrow" | undefined;
    era?: "long" | "short" | "narrow" | undefined;
    year?: "numeric" | "2-digit" | undefined;
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
    day?: "numeric" | "2-digit" | undefined;
    hour?: "numeric" | "2-digit" | undefined;
    minute?: "numeric" | "2-digit" | undefined;
    second?: "numeric" | "2-digit" | undefined;
    timeZoneName?:
        | "short"
        | "long"
        | "shortOffset"
        | "longOffset"
        | "shortGeneric"
        | "longGeneric"
        | undefined;
    formatMatcher?: "best fit" | "basic" | undefined;
    hour12?: boolean | undefined;
    timeZone?: string | undefined;

    locales?: string | string[] | undefined;
}

/**
 * Gets the time value in custom formated
 * @param {Date} date - The date from which to get the time value.
 * @param {parseDateTimeFormatOptions} options - The Options for formated
 * @returns {string} - The time value in "hh:mm" format.
 */
export const parseDateTimeFormat = (
    date: Date,
    options: parseDateTimeFormatOptions,
): string => {
    const formatter = new Intl.DateTimeFormat(options?.locales, options);
    return formatter.format(date);
};
