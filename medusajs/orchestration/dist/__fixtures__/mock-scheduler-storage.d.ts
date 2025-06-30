import { IDistributedSchedulerStorage, SchedulerOptions } from "../../src";
export declare class MockSchedulerStorage implements IDistributedSchedulerStorage {
    schedule(jobDefinition: string | {
        jobId: string;
    }, schedulerOptions: SchedulerOptions): Promise<void>;
    remove(jobId: string): Promise<void>;
    removeAll(): Promise<void>;
}
//# sourceMappingURL=mock-scheduler-storage.d.ts.map