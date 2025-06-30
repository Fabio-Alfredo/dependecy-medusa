"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const define_middlewares_1 = require("../define-middlewares");
describe("defineMiddlewares", function () {
    test("define custom middleware for a route", () => {
        const config = (0, define_middlewares_1.defineMiddlewares)([
            {
                matcher: "/admin/products",
                middlewares: [() => { }],
            },
        ]);
        expect(config).toMatchObject({
            routes: [
                {
                    matcher: "/admin/products",
                    middlewares: [expect.any(Function)],
                },
            ],
        });
    });
});
//# sourceMappingURL=define-routes-config.spec.js.map