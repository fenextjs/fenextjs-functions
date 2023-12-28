/**
 * This function takes in a file and options and returns a promise that resolves with the file contents
 * @param {any} file - The file to be parsed
 * @param {Object} options - The options for parsing the file
 * @param {boolean} options.fileText - Whether or not to read the file as text (defaults to false)
 * @param {function} options.updateProgress - A callback function for updating the progress of reading the file
 * @returns {Promise} - A promise that resolves with the file contents
 */
export declare const parseFile: (file: any, { updateProgress, fileText, }: {
    fileText?: boolean | undefined;
    updateProgress: (progress: number) => void;
}) => Promise<unknown>;
