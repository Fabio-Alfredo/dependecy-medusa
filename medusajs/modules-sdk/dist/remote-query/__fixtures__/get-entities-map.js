"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntitiesMap = getEntitiesMap;
const utils_1 = require("@medusajs/utils");
function getEntitiesMap(loadedSchema) {
    const defaultMedusaSchema = `
    scalar DateTime
    scalar JSON
  `;
    const { schema } = utils_1.GraphQLUtils.cleanGraphQLSchema(defaultMedusaSchema + loadedSchema);
    const mergedSchema = utils_1.GraphQLUtils.mergeTypeDefs(schema);
    return utils_1.GraphQLUtils.makeExecutableSchema({
        typeDefs: mergedSchema,
    }).getTypeMap();
}
//# sourceMappingURL=get-entities-map.js.map