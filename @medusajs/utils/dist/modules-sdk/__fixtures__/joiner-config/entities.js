"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dmlShippingOptionRule = exports.dmlGeoZone = exports.dmlServiceZone = exports.dmlFulfillmentProvider = exports.dmlFulfillment = exports.dmlShippingProfile = exports.dmlShippingOption = exports.dmlFulfillmentSet = exports.ShippingOptionRule = exports.GeoZone = exports.ServiceZone = exports.FulfillmentProvider = exports.Fulfillment = exports.ShippingProfile = exports.ShippingOption = exports.FulfillmentSet = void 0;
const dml_1 = require("../../../dml");
exports.FulfillmentSet = {
    name: "FulfillmentSet",
};
exports.ShippingOption = {
    name: "ShippingOption",
};
exports.ShippingProfile = {
    name: "ShippingProfile",
};
exports.Fulfillment = {
    name: "Fulfillment",
};
exports.FulfillmentProvider = {
    name: "FulfillmentProvider",
};
exports.ServiceZone = {
    name: "ServiceZone",
};
exports.GeoZone = {
    name: "GeoZone",
};
exports.ShippingOptionRule = {
    name: "ShippingOptionRule",
};
exports.dmlFulfillmentSet = dml_1.model.define(exports.FulfillmentSet.name, {
    id: dml_1.model.id().primaryKey(),
});
exports.dmlShippingOption = dml_1.model.define(exports.ShippingOption.name, {
    id: dml_1.model.id().primaryKey(),
});
exports.dmlShippingProfile = dml_1.model.define(exports.ShippingProfile.name, {
    id: dml_1.model.id().primaryKey(),
});
exports.dmlFulfillment = dml_1.model.define(exports.Fulfillment.name, {
    id: dml_1.model.id().primaryKey(),
});
exports.dmlFulfillmentProvider = dml_1.model.define(exports.FulfillmentProvider.name, {
    id: dml_1.model.id().primaryKey(),
});
exports.dmlServiceZone = dml_1.model.define(exports.ServiceZone.name, {
    id: dml_1.model.id().primaryKey(),
});
exports.dmlGeoZone = dml_1.model.define(exports.GeoZone.name, {
    id: dml_1.model.id().primaryKey(),
});
exports.dmlShippingOptionRule = dml_1.model.define(exports.ShippingOptionRule.name, {
    id: dml_1.model.id().primaryKey(),
});
//# sourceMappingURL=entities.js.map