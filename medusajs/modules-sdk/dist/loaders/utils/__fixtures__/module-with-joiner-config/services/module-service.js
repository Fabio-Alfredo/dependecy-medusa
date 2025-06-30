"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleService = void 0;
const utils_1 = require("@medusajs/utils");
class ModuleService {
    __joinerConfig() {
        return (0, utils_1.defineJoinerConfig)("module-service", {
            alias: [
                {
                    name: ["custom_name"],
                    entity: "Custom",
                },
            ],
        });
    }
}
exports.ModuleService = ModuleService;
//# sourceMappingURL=module-service.js.map