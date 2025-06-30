"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const filter_by_valid_sales_channels_1 = require("../filter-by-valid-sales-channels");
describe("filter-by-valid-sales-channels", () => {
    describe("transformAndValidateSalesChannelIds", () => {
        let req;
        beforeEach(() => {
            req = {
                publishable_key_context: {
                    key: "test-key",
                    sales_channel_ids: ["sc-1", "sc-2"],
                },
                validatedQuery: {},
            };
        });
        it("should return sales channel ids from request when they exist and are in publishable key", () => {
            req.validatedQuery = { sales_channel_id: ["sc-1"] };
            const result = (0, filter_by_valid_sales_channels_1.transformAndValidateSalesChannelIds)(req);
            expect(result).toEqual(["sc-1"]);
        });
        it("should handle sales_channel_id as string and transform to array", () => {
            req.validatedQuery = { sales_channel_id: "sc-2" };
            const result = (0, filter_by_valid_sales_channels_1.transformAndValidateSalesChannelIds)(req);
            expect(result).toEqual(["sc-2"]);
        });
        it("should throw error when requested sales channel is not in publishable key", () => {
            req.validatedQuery = { sales_channel_id: ["sc-3"] };
            expect(() => {
                (0, filter_by_valid_sales_channels_1.transformAndValidateSalesChannelIds)(req);
            }).toThrow(utils_1.MedusaError);
        });
        it("should return sales channel ids from publishable key when no ids in request", () => {
            req.validatedQuery = {};
            const result = (0, filter_by_valid_sales_channels_1.transformAndValidateSalesChannelIds)(req);
            expect(result).toEqual(["sc-1", "sc-2"]);
        });
        it("should return empty array when no sales channel ids in publishable key or request", () => {
            req.publishable_key_context = {
                key: "test-key",
                sales_channel_ids: [],
            };
            req.validatedQuery = {};
            const result = (0, filter_by_valid_sales_channels_1.transformAndValidateSalesChannelIds)(req);
            expect(result).toEqual([]);
        });
    });
    describe("filterByValidSalesChannels", () => {
        let req;
        let res;
        let next;
        let middleware;
        beforeEach(() => {
            req = {
                publishable_key_context: {
                    key: "test-key",
                    sales_channel_ids: ["sc-1", "sc-2"],
                },
                validatedQuery: {},
                filterableFields: {},
            };
            res = {};
            next = jest.fn();
            middleware = (0, filter_by_valid_sales_channels_1.filterByValidSalesChannels)();
        });
        it("should set filterableFields.sales_channel_id and call next", async () => {
            await middleware(req, res, next);
            expect(req.filterableFields.sales_channel_id).toEqual(["sc-1", "sc-2"]);
            expect(next).toHaveBeenCalled();
        });
        it("should throw error when no sales channels available", async () => {
            req.publishable_key_context = {
                key: "test-key",
                sales_channel_ids: [],
            };
            await expect(middleware(req, res, next)).rejects.toThrow("Publishable key needs to have a sales channel configured");
            expect(next).not.toHaveBeenCalled();
        });
        it("should use only sales channels from request that are in publishable key", async () => {
            req.validatedQuery = { sales_channel_id: ["sc-1"] };
            await middleware(req, res, next);
            expect(req.filterableFields.sales_channel_id).toEqual(["sc-1"]);
            expect(next).toHaveBeenCalled();
        });
        it("should handle sales_channel_id as string in request", async () => {
            req.validatedQuery = { sales_channel_id: "sc-2" };
            await middleware(req, res, next);
            expect(req.filterableFields.sales_channel_id).toEqual(["sc-2"]);
            expect(next).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=filter-by-valid-sales-channels.spec.js.map