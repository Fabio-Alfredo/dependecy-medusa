"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const POST = (req, res) => {
    if (!(req.body instanceof Buffer)) {
        res.status(400).send("Invalid body");
    }
    res.send("OK");
};
exports.POST = POST;
//# sourceMappingURL=route.js.map