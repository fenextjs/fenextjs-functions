"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env_log = void 0;
const config_1 = require("../config");
/**
 * Prints a log message to the console if the environment variable
 * `NEXT_PUBLIC_LOG` is equal to "TRUE".
 *
 * @param {any} data - The log message to print.
 * @param {Object} options - The logging options.
 * @param {string} [options.name] - The name of the log message.
 * @param {string} [options.color="white"] - The color of the log message.
 */
const env_log = (data, options) => {
    if (config_1.CONFIG.LOG) {
        console.log(`%c [${options?.name?.toLocaleUpperCase()}]`, `color:${options?.color ?? "white"};`, data);
    }
};
exports.env_log = env_log;
//# sourceMappingURL=index.js.map