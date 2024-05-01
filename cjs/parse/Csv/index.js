"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCsvToJson = void 0;
const env_log_1 = require("../../env_log");
const splitLineCsv = (line) => {
    line = line.split("\r").join("").split("\n").join("");
    // eslint-disable-next-line no-useless-escape
    const lineSepareString = line.match(/(\")+[\w\W][^\"]+(\")/g);
    const lineSplitString = line
        // eslint-disable-next-line no-useless-escape
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
const parseCsvToJson = (csv) => {
    try {
        const array = csv.toString().split("\n");
        const headers = splitLineCsv(array[0]);
        const csvToJsonResult = [];
        for (let i = 1; i < array.length; i++) {
            const elementArray = splitLineCsv(array[i]);
            const item = {};
            for (let j = 0; j < headers.length; j++) {
                if (elementArray[j]?.indexOf("|") > -1) {
                    item[headers[j]] = elementArray[j].split("|");
                }
                else {
                    item[headers[j]] = elementArray[j];
                }
            }
            csvToJsonResult.push(item);
        }
        (0, env_log_1.env_log)(csvToJsonResult, {
            name: "csvToJsonResult",
        });
        return {
            headers,
            data: csvToJsonResult,
        };
    }
    catch (error) {
        (0, env_log_1.env_log)(error, {
            name: "error csvToJson",
        });
        return {};
    }
};
exports.parseCsvToJson = parseCsvToJson;
//# sourceMappingURL=index.js.map