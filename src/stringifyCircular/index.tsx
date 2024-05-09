export const stringifyCircular = (obj: object) => {
    let cache: any = [];
    const str = JSON.stringify(obj, function (key, value) {
        key;
        if (typeof value === "object" && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return;
            }
            cache.push(value);
        }
        return value;
    });
    cache = null;
    return str;
};
