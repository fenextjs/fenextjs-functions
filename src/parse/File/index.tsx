import { env_log } from "../../env_log";

/**
 * This function takes in a file and options and returns a promise that resolves with the file contents
 * @param {any} file - The file to be parsed
 * @param {Object} options - The options for parsing the file
 * @param {boolean} options.fileText - Whether or not to read the file as text (defaults to false)
 * @param {function} options.updateProgress - A callback function for updating the progress of reading the file
 * @returns {Promise} - A promise that resolves with the file contents
 */
export const parseFile = (
    file: any,
    {
        updateProgress,
        fileText = false,
    }: {
        fileText?: boolean;
        updateProgress: (progress: number) => void;
    },
) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("progress", (e: ProgressEvent<FileReader>) => {
            updateProgress((100 * e.loaded) / e.total);
        });
        reader.addEventListener(
            "load",
            () => {
                env_log(reader.result, {
                    name: "reader.result",
                });
                resolve(reader.result);
            },
            false,
        );
        reader.onerror = (error) => {
            env_log(error, {
                name: "error upload file",
            });
            reject(error);
        };
        env_log(file, {
            name: "file",
        });
        if (fileText) {
            reader.readAsText(file);
        } else {
            reader.readAsDataURL(file);
        }
    });
