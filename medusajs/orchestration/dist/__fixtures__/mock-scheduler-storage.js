"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockSchedulerStorage = void 0;
class MockSchedulerStorage {
    async schedule(jobDefinition, schedulerOptions) {
        return await Promise.resolve();
    }
    async remove(jobId) {
        return await Promise.resolve();
    }
    async removeAll() {
        return await Promise.resolve();
    }
}
exports.MockSchedulerStorage = MockSchedulerStorage;
//# sourceMappingURL=mock-scheduler-storage.js.map