"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdatedWorkflow = exports.productWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
exports.productWorkflowId = "product-notifier-workflow";
const step = (0, workflows_sdk_1.createStep)("product-step", () => {
    return {};
});
exports.productUpdatedWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.productWorkflowId, () => {
    step();
    return new workflows_sdk_1.WorkflowResponse(void 0);
});
//# sourceMappingURL=product-updater.js.map