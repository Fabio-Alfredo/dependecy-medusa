"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dmlEntity = void 0;
const utils_1 = require("@medusajs/utils");
exports.dmlEntity = utils_1.model.define("dmlEntity", {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text(),
});
//# sourceMappingURL=dml-entity.js.map