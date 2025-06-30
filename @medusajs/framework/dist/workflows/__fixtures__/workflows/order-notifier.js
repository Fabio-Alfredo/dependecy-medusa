"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderNotifierWorkflow = exports.orderWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
exports.orderWorkflowId = "order-notifier-workflow";
const step = (0, workflows_sdk_1.createStep)("order-step", () => {
    return {};
});
exports.orderNotifierWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.orderWorkflowId, () => {
    step();
    return new workflows_sdk_1.WorkflowResponse(void 0);
});
//# sourceMappingURL=order-notifier.js.map