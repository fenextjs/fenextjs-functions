import { env_log } from "../../env_log";

const splitLineCsv = (line: string) => {
    line = line.split("\r").join("").split("\n").join("");

    const lineSepareString = line.match(/(\")+[\w\W][^\"]+(\")/g);
    const lineSplitString = line
        .split(/(\")+[\w\W][^\"]+(\")/g)
        .join("")
        .split(",")
        .map((e) => {
            if (e == '""') {
                let s = lineSepareString?.shift() ?? "";
                if (s[0] == '"') {
                    s = s.substring(1);
                }
                if (s[s.length - 1] == '"') {
                    s = s.slice(0, -1);
                }
                return s;
            }
            return e;
        });

    return lineSplitString;
};

export const parseCsvToJson = (csv: string) => {
    try {
        const array = csv.toString().split("\n");
        const headers = splitLineCsv(array[0]);
        const csvToJsonResult: any[] = [];

        for (let i = 1; i < array.length; i++) {
            const elementArray = splitLineCsv(array[i]);

            const item: any = {};
            for (let j = 0; j < headers.length; j++) {
                if (elementArray[j]?.indexOf("|") > -1) {
                    item[headers[j]] = elementArray[j].split("|");
                } else {
                    item[headers[j]] = elementArray[j];
                }
            }
            csvToJsonResult.push(item);
        }

        env_log(csvToJsonResult, {
            name: "csvToJsonResult",
        });
        return {
            headers,
            data: csvToJsonResult,
        };
    } catch (error) {
        env_log(error, {
            name: "error csvToJson",
        });
        return {};
    }
};
