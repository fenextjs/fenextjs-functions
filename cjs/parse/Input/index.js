"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInputToQuery = void 0;
const parseInputToQuery = ({ input }) => {
    const objInput = {};
    Object.keys(input ?? {}).forEach((key) => {
        const v = input?.[key];
        if (v != undefined && v != null) {
            if (key == "date") {
                const dateValue = v;
                if (dateValue?.type == "normal" && dateValue?.date) {
                    objInput["date"] = dateValue?.date?.toISOString();
                }
                if (dateValue?.type == "range" &&
                    dateValue?.dateRange &&
                    dateValue?.dateRange?.[0] &&
                    dateValue?.dateRange?.[1]) {
                    objInput["date_start"] =
                        dateValue?.dateRange?.[0]?.toISOString();
                    objInput["date_end"] =
                        dateValue?.dateRange?.[1]?.toISOString();
                }
            }
            else if (key == "search" && v == "") {
                return;
            }
            else {
                objInput[key] = v;
            }
        }
    });
    const query = new URLSearchParams(objInput).toString();
    return query;
};
exports.parseInputToQuery = parseInputToQuery;
//# sourceMappingURL=index.js.map