export const cleanTextForTranslate = (text: string) => {
    return text
        .replaceAll("\\n", "")
        .replaceAll("\n", "")
        .replace(/ {2,}/g, " ")
        .trim();
};
