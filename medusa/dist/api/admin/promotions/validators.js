"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdatePromotion = exports.UpdatePromotion = exports.AdminCreatePromotion = exports.CreatePromotion = exports.AdminUpdateApplicationMethod = exports.AdminCreateApplicationMethod = exports.AdminUpdatePromotionRule = exports.AdminCreatePromotionRule = exports.AdminGetPromotionsRuleValueParams = exports.AdminGetPromotionRuleTypeParams = exports.AdminGetPromotionRuleParams = exports.AdminGetPromotionsParams = exports.AdminGetPromotionsParamsFields = exports.AdminGetPromotionParams = void 0;
const utils_1 = require("@medusajs/framework/utils");
const zod_1 = require("zod");
const common_validators_1 = require("../../utils/common-validators");
const validators_1 = require("../../utils/validators");
const validators_2 = require("../campaigns/validators");
exports.AdminGetPromotionParams = (0, validators_1.createSelectParams)();
exports.AdminGetPromotionsParamsFields = zod_1.z.object({
    q: zod_1.z.string().optional(),
    code: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    campaign_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    application_method: zod_1.z
        .object({
        currency_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    })
        .optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
});
exports.AdminGetPromotionsParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
})
    .merge(exports.AdminGetPromotionsParamsFields)
    .merge((0, common_validators_1.applyAndAndOrOperators)(exports.AdminGetPromotionsParamsFields))
    .strict();
exports.AdminGetPromotionRuleParams = zod_1.z.object({
    promotion_type: zod_1.z.string().optional(),
    application_method_type: zod_1.z.string().optional(),
});
exports.AdminGetPromotionRuleTypeParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    promotion_type: zod_1.z.string().optional(),
    application_method_type: zod_1.z.string().optional(),
}));
exports.AdminGetPromotionsRuleValueParams = (0, validators_1.createFindParams)({
    limit: 100,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
}));
exports.AdminCreatePromotionRule = zod_1.z
    .object({
    operator: zod_1.z.nativeEnum(utils_1.PromotionRuleOperator),
    description: zod_1.z.string().nullish(),
    attribute: zod_1.z.string(),
    values: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]),
})
    .strict();
exports.AdminUpdatePromotionRule = zod_1.z
    .object({
    id: zod_1.z.string(),
    operator: zod_1.z.nativeEnum(utils_1.PromotionRuleOperator).optional(),
    description: zod_1.z.string().nullish(),
    attribute: zod_1.z.string().optional(),
    values: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]),
})
    .strict();
exports.AdminCreateApplicationMethod = zod_1.z
    .object({
    description: zod_1.z.string().nullish(),
    value: zod_1.z.number(),
    currency_code: zod_1.z.string().nullish(),
    max_quantity: zod_1.z.number().nullish(),
    type: zod_1.z.nativeEnum(utils_1.ApplicationMethodType),
    target_type: zod_1.z.nativeEnum(utils_1.ApplicationMethodTargetType),
    allocation: zod_1.z.nativeEnum(utils_1.ApplicationMethodAllocation).optional(),
    target_rules: zod_1.z.array(exports.AdminCreatePromotionRule).optional(),
    buy_rules: zod_1.z.array(exports.AdminCreatePromotionRule).optional(),
    apply_to_quantity: zod_1.z.number().nullish(),
    buy_rules_min_quantity: zod_1.z.number().nullish(),
})
    .strict();
exports.AdminUpdateApplicationMethod = zod_1.z
    .object({
    description: zod_1.z.string().nullish(),
    value: zod_1.z.number().optional(),
    max_quantity: zod_1.z.number().nullish(),
    currency_code: zod_1.z.string().nullish(),
    type: zod_1.z.nativeEnum(utils_1.ApplicationMethodType).optional(),
    target_type: zod_1.z.nativeEnum(utils_1.ApplicationMethodTargetType).optional(),
    allocation: zod_1.z.nativeEnum(utils_1.ApplicationMethodAllocation).optional(),
    apply_to_quantity: zod_1.z.number().nullish(),
    buy_rules_min_quantity: zod_1.z.number().nullish(),
})
    .strict();
const promoRefinement = (promo) => {
    if (promo.campaign && promo.campaign_id) {
        return false;
    }
    if (promo.type === utils_1.PromotionType.BUYGET) {
        const appMethod = promo.application_method;
        return ((appMethod?.buy_rules?.length ?? 0) > 0 &&
            appMethod?.apply_to_quantity !== undefined &&
            appMethod?.buy_rules_min_quantity !== undefined);
    }
    return true;
};
exports.CreatePromotion = zod_1.z
    .object({
    code: zod_1.z.string(),
    is_automatic: zod_1.z.boolean().optional(),
    type: zod_1.z.nativeEnum(utils_1.PromotionType),
    status: zod_1.z.nativeEnum(utils_1.PromotionStatus).default(utils_1.PromotionStatus.DRAFT),
    campaign_id: zod_1.z.string().nullish(),
    campaign: validators_2.CreateCampaign.optional(),
    application_method: exports.AdminCreateApplicationMethod,
    rules: zod_1.z.array(exports.AdminCreatePromotionRule).optional(),
})
    .strict();
exports.AdminCreatePromotion = (0, validators_1.WithAdditionalData)(exports.CreatePromotion, (schema) => {
    return schema.refine(promoRefinement, {
        message: "Buyget promotions require at least one buy rule and quantities to be defined",
    });
});
exports.UpdatePromotion = zod_1.z
    .object({
    code: zod_1.z.string().optional(),
    is_automatic: zod_1.z.boolean().optional(),
    type: zod_1.z.nativeEnum(utils_1.PromotionType).optional(),
    status: zod_1.z.nativeEnum(utils_1.PromotionStatus).optional(),
    campaign_id: zod_1.z.string().nullish(),
    application_method: exports.AdminUpdateApplicationMethod.optional(),
})
    .strict();
exports.AdminUpdatePromotion = (0, validators_1.WithAdditionalData)(exports.UpdatePromotion, (schema) => {
    return schema.refine(promoRefinement, {
        message: "Buyget promotions require at least one buy rule and quantities to be defined",
    });
});
//# sourceMappingURL=validators.js.map