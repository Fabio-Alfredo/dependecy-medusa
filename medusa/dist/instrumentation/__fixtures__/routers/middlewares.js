"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMock = void 0;
const framework_1 = require("@medusajs/framework");
exports.errorHandlerMock = jest
    .fn()
    .mockImplementation((err, req, res, next) => {
    console.log("errorHandlerMock", err);
    return res.status(400).json({
        type: err.code.toLowerCase(),
        message: err.message,
    });
});
exports.default = (0, framework_1.defineMiddlewares)({
    errorHandler: (err, req, res, next) => (0, exports.errorHandlerMock)(err, req, res, next),
});
//# sourceMappingURL=middlewares.js.map