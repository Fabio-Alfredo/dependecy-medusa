"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const middlewares_1 = require("../__fixtures__/routers/middlewares");
const server_1 = require("../__fixtures__/server");
const index_1 = require("../index");
const utils_1 = require("@medusajs/framework/utils");
jest.setTimeout(30000);
jest.mock("../../commands/start", () => {
    return {};
});
describe("HTTP Instrumentation", () => {
    let request;
    afterEach(function () {
        jest.clearAllMocks();
    });
    beforeAll(async function () {
        (0, index_1.instrumentHttpLayer)();
        const rootDir = (0, path_1.resolve)(__dirname, "../__fixtures__/routers");
        const { request: request_ } = await (0, server_1.createServer)(rootDir);
        request = request_;
    });
    describe("traceRoute", () => {
        it("should be handled by the error handler when a route fails", async () => {
            const res = await request("GET", "/admin/fail", {
                adminSession: {
                    jwt: {
                        userId: "admin_user",
                    },
                },
            });
            expect(res.status).toBe(400);
            expect(middlewares_1.errorHandlerMock).toHaveBeenCalled();
            expect(middlewares_1.errorHandlerMock).toHaveBeenCalledWith(new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Failed"), expect.anything(), expect.anything(), expect.anything());
        });
    });
});
//# sourceMappingURL=index.spec.js.map