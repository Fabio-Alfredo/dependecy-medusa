"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityModel = void 0;
const utils_1 = require("@medusajs/utils");
exports.entityModel = utils_1.model.define("entityModel", {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text(),
});
//# sourceMappingURL=dml-entity-model.js.map