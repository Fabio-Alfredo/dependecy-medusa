"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.POST = exports.GET = void 0;
const GET = async (req, res) => {
    throw {
        code: "NOT_ALLOWED",
        message: "Not allowed to perform this action",
    };
};
exports.GET = GET;
const POST = async (req, res) => {
    throw {
        code: "INVALID_DATA",
        message: "Invalid data provided",
    };
};
exports.POST = POST;
const PUT = async (req, res) => {
    throw {
        code: "CONFLICT",
        message: "Conflict with another request",
    };
};
exports.PUT = PUT;
const DELETE = async (req, res) => {
    throw {
        code: "TEAPOT",
        message: "I'm a teapot",
    };
};
exports.DELETE = DELETE;
//# sourceMappingURL=route.js.map