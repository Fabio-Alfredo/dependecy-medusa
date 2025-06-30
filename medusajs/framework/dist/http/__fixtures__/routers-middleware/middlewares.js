"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mocks_1 = require("../mocks");
const zod_1 = __importDefault(require("zod"));
const define_middlewares_1 = require("../../utils/define-middlewares");
const customersGlobalMiddleware = (req, res, next) => {
    (0, mocks_1.customersGlobalMiddlewareMock)();
    next();
};
const customersCreateMiddleware = (req, res, next) => {
    if (req.additionalDataValidator) {
        (0, mocks_1.customersCreateMiddlewareValidatorMock)();
    }
    (0, mocks_1.customersCreateMiddlewareMock)();
    next();
};
const storeGlobal = (req, res, next) => {
    (0, mocks_1.storeGlobalMiddlewareMock)();
    next();
};
const middlewares = (0, define_middlewares_1.defineMiddlewares)([
    {
        matcher: "/customers",
        middlewares: [customersGlobalMiddleware],
    },
    {
        method: ["ALL"],
        matcher: "/v1*",
        bodyParser: {
            sizeLimit: "500kb",
        },
        middlewares: [],
    },
    {
        method: "POST",
        matcher: "/customers",
        additionalDataValidator: {
            group_id: zod_1.default.string(),
        },
        middlewares: [customersCreateMiddleware],
    },
    {
        matcher: "/store/*",
        middlewares: [storeGlobal],
    },
    {
        matcher: "/webhooks",
        bodyParser: {
            preserveRawBody: true,
        },
    },
    {
        matcher: "/webhooks/*",
        method: "POST",
        bodyParser: false,
        middlewares: [(0, express_1.raw)({ type: "application/json" })],
    },
]);
exports.default = middlewares;
//# sourceMappingURL=middlewares.js.map