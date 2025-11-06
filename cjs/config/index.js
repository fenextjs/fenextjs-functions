"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const process_env_1 = require("../process.env");
exports.CONFIG = {
    EMPY: (0, process_env_1.getProcessEnv)("NEXT_PUBLIC_EMPY") == "TRUE",
    MODATA: (0, process_env_1.getProcessEnv)("NEXT_PUBLIC_MODATA") == "TRUE",
    LOG: (0, process_env_1.getProcessEnv)("NEXT_PUBLIC_LOG") == "TRUE",
};
//# sourceMappingURL=index.js.map