"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = orderNotifier;
async function orderNotifier(_) {
    return await Promise.resolve();
}
exports.config = {
    event: ["order.placed", "order.canceled", "order.completed"],
    context: { subscriberId: "order-notifier" },
};
//# sourceMappingURL=order-notifier.js.map