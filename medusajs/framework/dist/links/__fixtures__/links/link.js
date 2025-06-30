"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module1And2Link = void 0;
const utils_1 = require("@medusajs/utils");
const model1 = utils_1.model.define("model-1", {
    id: utils_1.model.id().primaryKey(),
});
const model2 = utils_1.model.define("model-2", {
    id: utils_1.model.id().primaryKey(),
});
const module1 = (0, utils_1.Module)("module-1", {
    service: class Service1 extends (0, utils_1.MedusaService)({ model1 }) {
    },
});
const module2 = (0, utils_1.Module)("module-2", {
    service: class Service2 extends (0, utils_1.MedusaService)({ model2 }) {
    },
});
exports.module1And2Link = (0, utils_1.defineLink)(module1.linkable.model1, module2.linkable.model2);
//# sourceMappingURL=link.js.map