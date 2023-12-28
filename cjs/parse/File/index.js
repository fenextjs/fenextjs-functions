"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFile = void 0;
const env_log_1 = require("../../env_log");
/**
 * This function takes in a file and options and returns a promise that resolves with the file contents
 * @param {any} file - The file to be parsed
 * @param {Object} options - The options for parsing the file
 * @param {boolean} options.fileText - Whether or not to read the file as text (defaults to false)
 * @param {function} options.updateProgress - A callback function for updating the progress of reading the file
 * @returns {Promise} - A promise that resolves with the file contents
 */
const parseFile = (file, { updateProgress, fileText = false, }) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("progress", (e) => {
        updateProgress((100 * e.loaded) / e.total);
    });
    reader.addEventListener("load", () => {
        (0, env_log_1.env_log)(reader.result, {
            name: "reader.result",
        });
        resolve(reader.result);
    }, false);
    reader.onerror = (error) => {
        (0, env_log_1.env_log)(error, {
            name: "error upload file",
        });
        reject(error);
    };
    (0, env_log_1.env_log)(file, {
        name: "file",
    });
    if (fileText) {
        reader.readAsText(file);
    }
    else {
        reader.readAsDataURL(file);
    }
});
exports.parseFile = parseFile;
//# sourceMappingURL=index.js.map