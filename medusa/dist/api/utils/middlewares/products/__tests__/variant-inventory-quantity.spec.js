"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const variant_inventory_quantity_1 = require("../variant-inventory-quantity");
jest.mock("@medusajs/framework/utils", () => {
    const originalModule = jest.requireActual("@medusajs/framework/utils");
    return {
        ...originalModule,
        getTotalVariantAvailability: jest.fn(),
        getVariantAvailability: jest.fn(),
    };
});
describe("variant-inventory-quantity", () => {
    let req;
    let mockQuery;
    let variants;
    beforeEach(() => {
        mockQuery = jest.fn();
        variants = [
            { id: "variant-1", manage_inventory: true },
            { id: "variant-2", manage_inventory: true },
            { id: "variant-3", manage_inventory: false },
        ];
        req = {
            scope: {
                resolve: jest.fn().mockReturnValue(mockQuery),
            },
        };
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe("wrapVariantsWithTotalInventoryQuantity", () => {
        it("should not call getTotalVariantAvailability when variants array is empty", async () => {
            await (0, variant_inventory_quantity_1.wrapVariantsWithTotalInventoryQuantity)(req, []);
            expect(utils_1.getTotalVariantAvailability).not.toHaveBeenCalled();
        });
        it("should call getTotalVariantAvailability with correct parameters", async () => {
            const mockAvailability = {
                "variant-1": { availability: 10 },
                "variant-2": { availability: 5 },
            };
            utils_1.getTotalVariantAvailability.mockResolvedValueOnce(mockAvailability);
            await (0, variant_inventory_quantity_1.wrapVariantsWithTotalInventoryQuantity)(req, variants);
            expect(req.scope.resolve).toHaveBeenCalledWith(utils_1.ContainerRegistrationKeys.QUERY);
            expect(utils_1.getTotalVariantAvailability).toHaveBeenCalledWith(mockQuery, {
                variant_ids: ["variant-1", "variant-2", "variant-3"],
            });
        });
        it("should update inventory_quantity for variants with manage_inventory=true", async () => {
            const mockAvailability = {
                "variant-1": { availability: 10 },
                "variant-2": { availability: 5 },
                "variant-3": { availability: 20 },
            };
            utils_1.getTotalVariantAvailability.mockResolvedValueOnce(mockAvailability);
            await (0, variant_inventory_quantity_1.wrapVariantsWithTotalInventoryQuantity)(req, variants);
            expect(variants[0].inventory_quantity).toBe(10);
            expect(variants[1].inventory_quantity).toBe(5);
            expect(variants[2].inventory_quantity).toBeUndefined();
        });
    });
    describe("wrapVariantsWithInventoryQuantityForSalesChannel", () => {
        beforeEach(() => {
            req = {
                scope: {
                    resolve: jest.fn().mockReturnValue(mockQuery),
                },
                publishable_key_context: {
                    sales_channel_ids: ["sc-1"],
                },
                validatedQuery: {},
            };
        });
        it("should throw an error when multiple sales channels are available and no single one is specified", async () => {
            req.publishable_key_context.sales_channel_ids = ["sc-1", "sc-2"];
            req.validatedQuery = { sales_channel_id: ["sc-1", "sc-2"] };
            await expect((0, variant_inventory_quantity_1.wrapVariantsWithInventoryQuantityForSalesChannel)(req, variants)).rejects.toThrow(utils_1.MedusaError);
        });
        it("should use sales channel from query when single channel is specified", async () => {
            req.validatedQuery = { sales_channel_id: ["sc-2"] };
            req.publishable_key_context = {
                key: "test-key",
                sales_channel_ids: ["sc-1", "sc-2"],
            };
            const mockAvailability = {
                "variant-1": { availability: 7 },
                "variant-2": { availability: 3 },
            };
            utils_1.getVariantAvailability.mockResolvedValueOnce(mockAvailability);
            await (0, variant_inventory_quantity_1.wrapVariantsWithInventoryQuantityForSalesChannel)(req, variants);
            expect(utils_1.getVariantAvailability).toHaveBeenCalledWith(mockQuery, {
                variant_ids: ["variant-1", "variant-2", "variant-3"],
                sales_channel_id: "sc-2",
            });
        });
        it("should use sales channel from publishable key when single channel is available", async () => {
            const mockAvailability = {
                "variant-1": { availability: 12 },
                "variant-2": { availability: 8 },
            };
            utils_1.getVariantAvailability.mockResolvedValueOnce(mockAvailability);
            await (0, variant_inventory_quantity_1.wrapVariantsWithInventoryQuantityForSalesChannel)(req, variants);
            expect(utils_1.getVariantAvailability).toHaveBeenCalledWith(mockQuery, {
                variant_ids: ["variant-1", "variant-2", "variant-3"],
                sales_channel_id: "sc-1",
            });
        });
        it("should handle non-array sales_channel_id in query", async () => {
            req.validatedQuery = { sales_channel_id: "sc-2" };
            const originalPublishableKeyContext = (0, utils_1.deepCopy)(req.publishable_key_context);
            req.publishable_key_context = {
                key: "test-key",
                sales_channel_ids: ["sc-1", "sc-2"],
            };
            const mockAvailability = {
                "variant-1": { availability: 7 },
                "variant-2": { availability: 3 },
            };
            utils_1.getVariantAvailability.mockResolvedValueOnce(mockAvailability);
            await (0, variant_inventory_quantity_1.wrapVariantsWithInventoryQuantityForSalesChannel)(req, variants);
            expect(utils_1.getVariantAvailability).toHaveBeenCalledWith(mockQuery, {
                variant_ids: ["variant-1", "variant-2", "variant-3"],
                sales_channel_id: "sc-2",
            });
            req.publishable_key_context = originalPublishableKeyContext;
        });
        it("should update inventory_quantity for variants with manage_inventory=true", async () => {
            const mockAvailability = {
                "variant-1": { availability: 15 },
                "variant-2": { availability: 9 },
                "variant-3": { availability: 25 },
            };
            utils_1.getVariantAvailability.mockResolvedValueOnce(mockAvailability);
            await (0, variant_inventory_quantity_1.wrapVariantsWithInventoryQuantityForSalesChannel)(req, variants);
            expect(variants[0].inventory_quantity).toBe(15);
            expect(variants[1].inventory_quantity).toBe(9);
            expect(variants[2].inventory_quantity).toBeUndefined();
        });
        it("should not call getVariantAvailability when variants array is empty", async () => {
            await (0, variant_inventory_quantity_1.wrapVariantsWithInventoryQuantityForSalesChannel)(req, []);
            expect(utils_1.getVariantAvailability).not.toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=variant-inventory-quantity.spec.js.map