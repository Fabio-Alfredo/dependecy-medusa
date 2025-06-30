"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module3And4Link = void 0;
const utils_1 = require("@medusajs/utils");
const model3 = utils_1.model.define("model-3", {
    id: utils_1.model.id().primaryKey(),
});
const model4 = utils_1.model.define("model-4", {
    id: utils_1.model.id().primaryKey(),
});
const module3 = (0, utils_1.Module)("module-3", {
    service: class Service3 extends (0, utils_1.MedusaService)({ model3 }) {
    },
});
const module4 = (0, utils_1.Module)("module-4", {
    service: class Service4 extends (0, utils_1.MedusaService)({ model4 }) {
    },
});
exports.module3And4Link = (0, utils_1.defineLink)(module3.linkable.model3, module4.linkable.model4);
//# sourceMappingURL=link.js.map