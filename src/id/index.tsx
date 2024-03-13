export const generateRandomID = () => {
    return new Date().getTime() + "" + Math.random();
};
