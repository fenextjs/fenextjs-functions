export const sleep = async (time = 1000) => {
    await new Promise((r) => setTimeout(r, time));
};
