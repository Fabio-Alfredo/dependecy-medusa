"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = handler;
async function handler(container) {
    console.log(`You have received 5 orders today`);
}
exports.config = {
    name: "summarize-orders",
    schedule: "* * * * * *",
    numberOfExecutions: 2,
};
//# sourceMappingURL=order-summary.js.map