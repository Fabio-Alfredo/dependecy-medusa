"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
exports.POST = POST;
async function GET(req, res) {
    try {
        res.send(`GET order ${req.params.id}`);
    }
    catch (err) {
        res.status(400).send(err);
    }
}
async function POST(req, res) {
    try {
        res.send(`POST order ${req.params.id}`);
    }
    catch (err) {
        res.status(400).send(err);
    }
}
//# sourceMappingURL=route.js.map