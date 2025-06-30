"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
function GET(req, res) {
    /* const customerId = req.params.id;
      const orderId = req.params.id;*/
    res.send("list customers " + JSON.stringify(req.params));
}
//# sourceMappingURL=route.js.map