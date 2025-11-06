import { getProcessEnv } from "../process.env"

export const CONFIG = {
    EMPY: getProcessEnv("NEXT_PUBLIC_EMPY") == "TRUE",
    MODATA:  getProcessEnv("NEXT_PUBLIC_MODATA") == "TRUE",
    LOG:  getProcessEnv("NEXT_PUBLIC_LOG") == "TRUE",
};
