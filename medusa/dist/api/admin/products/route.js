"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const framework_1 = require("@medusajs/framework");
const http_1 = require("@medusajs/framework/http");
const utils_1 = require("@medusajs/framework/utils");
const index_engine_1 = __importDefault(require("../../../loaders/feature-flags/index-engine"));
const helpers_1 = require("./helpers");
const GET = async (req, res) => {
    if (framework_1.featureFlagRouter.isFeatureEnabled(index_engine_1.default.key)) {
        // Use regular list when no filters are provided
        // TODO: Tags and categories are not supported by the index engine yet
        if (Object.keys(req.filterableFields).length === 0 ||
            (0, utils_1.isPresent)(req.filterableFields.tags) ||
            (0, utils_1.isPresent)(req.filterableFields.categories)) {
            return await getProducts(req, res);
        }
        return await getProductsWithIndexEngine(req, res);
    }
    return await getProducts(req, res);
};
exports.GET = GET;
async function getProducts(req, res) {
    const selectFields = (0, helpers_1.remapKeysForProduct)(req.queryConfig.fields ?? []);
    const { rows: products, metadata } = await (0, http_1.refetchEntities)("product", req.filterableFields, req.scope, selectFields, req.queryConfig.pagination);
    res.json({
        products: products.map(helpers_1.remapProductResponse),
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
}
async function getProductsWithIndexEngine(req, res) {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const filters = req.filterableFields;
    if ((0, utils_1.isPresent)(filters.sales_channel_id)) {
        const salesChannelIds = filters.sales_channel_id;
        filters["sales_channels"] ??= {};
        filters["sales_channels"]["id"] = salesChannelIds;
        delete filters.sales_channel_id;
    }
    const { data: products, metadata } = await query.index({
        entity: "product",
        fields: req.queryConfig.fields ?? [],
        filters: filters,
        pagination: req.queryConfig.pagination,
    });
    res.json({
        products: products.map(helpers_1.remapProductResponse),
        count: metadata.estimate_count,
        estimate_count: metadata.estimate_count,
        offset: metadata.skip,
        limit: metadata.take,
    });
}
const POST = async (req, res) => {
    const { additional_data, ...products } = req.validatedBody;
    const { result } = await (0, core_flows_1.createProductsWorkflow)(req.scope).run({
        input: { products: [products], additional_data },
    });
    const product = await (0, http_1.refetchEntity)("product", result[0].id, req.scope, (0, helpers_1.remapKeysForProduct)(req.queryConfig.fields ?? []));
    res.status(200).json({ product: (0, helpers_1.remapProductResponse)(product) });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map