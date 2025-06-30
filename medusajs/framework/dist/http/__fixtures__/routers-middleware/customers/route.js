"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
exports.POST = POST;
function GET(req, res) {
    res.send("list customers");
}
function POST(req, res) {
    res.send("create customer");
}
//# sourceMappingURL=route.js.map