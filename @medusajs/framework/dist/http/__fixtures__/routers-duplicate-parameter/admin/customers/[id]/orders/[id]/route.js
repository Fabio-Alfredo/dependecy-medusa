"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const GET = (req, res) => {
    res.send("get customer order");
};
exports.GET = GET;
const POST = (req, res) => {
    res.send("update customer order");
};
exports.POST = POST;
//# sourceMappingURL=route.js.map