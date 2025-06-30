"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = productUpdater;
async function productUpdater(_) {
    return await Promise.resolve();
}
exports.config = {
    event: "product.updated",
    context: {
        subscriberId: "product-updater",
    },
};
//# sourceMappingURL=product-updater.js.map