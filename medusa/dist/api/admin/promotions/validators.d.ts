import { ApplicationMethodAllocation, ApplicationMethodTargetType, ApplicationMethodType, PromotionRuleOperator, PromotionStatus, PromotionType } from "@medusajs/framework/utils";
import { z } from "zod";
export type AdminGetPromotionParamsType = z.infer<typeof AdminGetPromotionParams>;
export declare const AdminGetPromotionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const AdminGetPromotionsParamsFields: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>]>>;
    campaign_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    application_method: z.ZodOptional<z.ZodObject<{
        currency_code: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    }, "strip", z.ZodTypeAny, {
        currency_code?: string | string[] | undefined;
    }, {
        currency_code?: string | string[] | undefined;
    }>>;
    created_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    updated_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    deleted_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    q?: string | undefined;
    code?: any;
    campaign_id?: string | string[] | undefined;
    application_method?: {
        currency_code?: string | string[] | undefined;
    } | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}, {
    q?: string | undefined;
    code?: any;
    campaign_id?: string | string[] | undefined;
    application_method?: {
        currency_code?: string | string[] | undefined;
    } | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}>;
export type AdminGetPromotionsParamsType = z.infer<typeof AdminGetPromotionsParams>;
export declare const AdminGetPromotionsParams: z.ZodObject<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    $and: z.ZodOptional<z.ZodLazy<z.ZodArray<z.ZodObject<any, z.UnknownKeysParam, z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
    $or: z.ZodOptional<z.ZodLazy<z.ZodArray<z.ZodObject<any, z.UnknownKeysParam, z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
}, "strict", z.ZodTypeAny, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    $and?: {
        [x: string]: any;
    }[] | undefined;
    $or?: {
        [x: string]: any;
    }[] | undefined;
}, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    $and?: {
        [x: string]: any;
    }[] | undefined;
    $or?: {
        [x: string]: any;
    }[] | undefined;
}>;
export type AdminGetPromotionRuleParamsType = z.infer<typeof AdminGetPromotionRuleParams>;
export declare const AdminGetPromotionRuleParams: z.ZodObject<{
    promotion_type: z.ZodOptional<z.ZodString>;
    application_method_type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    promotion_type?: string | undefined;
    application_method_type?: string | undefined;
}, {
    promotion_type?: string | undefined;
    application_method_type?: string | undefined;
}>;
export type AdminGetPromotionRuleTypeParamsType = z.infer<typeof AdminGetPromotionRuleTypeParams>;
export declare const AdminGetPromotionRuleTypeParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    promotion_type: z.ZodOptional<z.ZodString>;
    application_method_type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
    promotion_type?: string | undefined;
    application_method_type?: string | undefined;
}, {
    fields?: string | undefined;
    promotion_type?: string | undefined;
    application_method_type?: string | undefined;
}>;
export type AdminGetPromotionsRuleValueParamsType = z.infer<typeof AdminGetPromotionsRuleValueParams>;
export declare const AdminGetPromotionsRuleValueParams: z.ZodObject<{
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    q: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    order?: string | undefined;
    fields?: string | undefined;
    q?: string | undefined;
    value?: string | string[] | undefined;
}, {
    order?: string | undefined;
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    q?: string | undefined;
    value?: string | string[] | undefined;
}>;
export type AdminCreatePromotionRuleType = z.infer<typeof AdminCreatePromotionRule>;
export declare const AdminCreatePromotionRule: z.ZodObject<{
    operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attribute: z.ZodString;
    values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
}, "strict", z.ZodTypeAny, {
    values: (string | string[]) & (string | string[] | undefined);
    attribute: string;
    operator: PromotionRuleOperator;
    description?: string | null | undefined;
}, {
    values: (string | string[]) & (string | string[] | undefined);
    attribute: string;
    operator: PromotionRuleOperator;
    description?: string | null | undefined;
}>;
export type AdminUpdatePromotionRuleType = z.infer<typeof AdminUpdatePromotionRule>;
export declare const AdminUpdatePromotionRule: z.ZodObject<{
    id: z.ZodString;
    operator: z.ZodOptional<z.ZodNativeEnum<typeof PromotionRuleOperator>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attribute: z.ZodOptional<z.ZodString>;
    values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
}, "strict", z.ZodTypeAny, {
    values: (string | string[]) & (string | string[] | undefined);
    id: string;
    operator?: PromotionRuleOperator | undefined;
    description?: string | null | undefined;
    attribute?: string | undefined;
}, {
    values: (string | string[]) & (string | string[] | undefined);
    id: string;
    operator?: PromotionRuleOperator | undefined;
    description?: string | null | undefined;
    attribute?: string | undefined;
}>;
export type AdminCreateApplicationMethodType = z.infer<typeof AdminCreateApplicationMethod>;
export declare const AdminCreateApplicationMethod: z.ZodObject<{
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodNumber;
    currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    type: z.ZodNativeEnum<typeof ApplicationMethodType>;
    target_type: z.ZodNativeEnum<typeof ApplicationMethodTargetType>;
    allocation: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodAllocation>>;
    target_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attribute: z.ZodString;
        values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }>, "many">>;
    buy_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attribute: z.ZodString;
        values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }>, "many">>;
    apply_to_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    buy_rules_min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strict", z.ZodTypeAny, {
    type: ApplicationMethodType;
    value: number;
    target_type: ApplicationMethodTargetType;
    description?: string | null | undefined;
    currency_code?: string | null | undefined;
    max_quantity?: number | null | undefined;
    allocation?: ApplicationMethodAllocation | undefined;
    target_rules?: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }[] | undefined;
    buy_rules?: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }[] | undefined;
    apply_to_quantity?: number | null | undefined;
    buy_rules_min_quantity?: number | null | undefined;
}, {
    type: ApplicationMethodType;
    value: number;
    target_type: ApplicationMethodTargetType;
    description?: string | null | undefined;
    currency_code?: string | null | undefined;
    max_quantity?: number | null | undefined;
    allocation?: ApplicationMethodAllocation | undefined;
    target_rules?: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }[] | undefined;
    buy_rules?: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }[] | undefined;
    apply_to_quantity?: number | null | undefined;
    buy_rules_min_quantity?: number | null | undefined;
}>;
export type AdminUpdateApplicationMethodType = z.infer<typeof AdminUpdateApplicationMethod>;
export declare const AdminUpdateApplicationMethod: z.ZodObject<{
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodOptional<z.ZodNumber>;
    max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodType>>;
    target_type: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodTargetType>>;
    allocation: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodAllocation>>;
    apply_to_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    buy_rules_min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strict", z.ZodTypeAny, {
    description?: string | null | undefined;
    value?: number | undefined;
    max_quantity?: number | null | undefined;
    currency_code?: string | null | undefined;
    type?: ApplicationMethodType | undefined;
    target_type?: ApplicationMethodTargetType | undefined;
    allocation?: ApplicationMethodAllocation | undefined;
    apply_to_quantity?: number | null | undefined;
    buy_rules_min_quantity?: number | null | undefined;
}, {
    description?: string | null | undefined;
    value?: number | undefined;
    max_quantity?: number | null | undefined;
    currency_code?: string | null | undefined;
    type?: ApplicationMethodType | undefined;
    target_type?: ApplicationMethodTargetType | undefined;
    allocation?: ApplicationMethodAllocation | undefined;
    apply_to_quantity?: number | null | undefined;
    buy_rules_min_quantity?: number | null | undefined;
}>;
export type AdminCreatePromotionType = z.infer<typeof CreatePromotion>;
export declare const CreatePromotion: z.ZodObject<{
    code: z.ZodString;
    is_automatic: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodNativeEnum<typeof PromotionType>;
    status: z.ZodDefault<z.ZodNativeEnum<typeof PromotionStatus>>;
    campaign_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    campaign: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        campaign_identifier: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        budget: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodObject<{
            type: z.ZodNativeEnum<typeof import("@medusajs/framework/utils").CampaignBudgetType>;
            limit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strict", z.ZodTypeAny, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }>, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }>, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }>>>;
        starts_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
        ends_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        campaign_identifier: string;
        description?: string | null | undefined;
        budget?: {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        } | null | undefined;
        starts_at?: Date | null | undefined;
        ends_at?: Date | null | undefined;
    }, {
        name: string;
        campaign_identifier: string;
        description?: string | null | undefined;
        budget?: {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        } | null | undefined;
        starts_at?: Date | null | undefined;
        ends_at?: Date | null | undefined;
    }>>;
    application_method: z.ZodObject<{
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodNumber;
        currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        type: z.ZodNativeEnum<typeof ApplicationMethodType>;
        target_type: z.ZodNativeEnum<typeof ApplicationMethodTargetType>;
        allocation: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodAllocation>>;
        target_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            attribute: z.ZodString;
            values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        }, "strict", z.ZodTypeAny, {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }, {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }>, "many">>;
        buy_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            attribute: z.ZodString;
            values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        }, "strict", z.ZodTypeAny, {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }, {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }>, "many">>;
        apply_to_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        buy_rules_min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strict", z.ZodTypeAny, {
        type: ApplicationMethodType;
        value: number;
        target_type: ApplicationMethodTargetType;
        description?: string | null | undefined;
        currency_code?: string | null | undefined;
        max_quantity?: number | null | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }[] | undefined;
        buy_rules?: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }[] | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    }, {
        type: ApplicationMethodType;
        value: number;
        target_type: ApplicationMethodTargetType;
        description?: string | null | undefined;
        currency_code?: string | null | undefined;
        max_quantity?: number | null | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }[] | undefined;
        buy_rules?: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }[] | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    }>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attribute: z.ZodString;
        values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    type: PromotionType;
    code: string;
    status: PromotionStatus;
    application_method: {
        type: ApplicationMethodType;
        value: number;
        target_type: ApplicationMethodTargetType;
        description?: string | null | undefined;
        currency_code?: string | null | undefined;
        max_quantity?: number | null | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }[] | undefined;
        buy_rules?: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }[] | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    };
    is_automatic?: boolean | undefined;
    campaign_id?: string | null | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | null | undefined;
        budget?: {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        } | null | undefined;
        starts_at?: Date | null | undefined;
        ends_at?: Date | null | undefined;
    } | undefined;
    rules?: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }[] | undefined;
}, {
    type: PromotionType;
    code: string;
    application_method: {
        type: ApplicationMethodType;
        value: number;
        target_type: ApplicationMethodTargetType;
        description?: string | null | undefined;
        currency_code?: string | null | undefined;
        max_quantity?: number | null | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }[] | undefined;
        buy_rules?: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: PromotionRuleOperator;
            description?: string | null | undefined;
        }[] | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    };
    is_automatic?: boolean | undefined;
    status?: PromotionStatus | undefined;
    campaign_id?: string | null | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | null | undefined;
        budget?: {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        } | null | undefined;
        starts_at?: Date | null | undefined;
        ends_at?: Date | null | undefined;
    } | undefined;
    rules?: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: PromotionRuleOperator;
        description?: string | null | undefined;
    }[] | undefined;
}>;
export declare const AdminCreatePromotion: (additionalDataValidator?: z.ZodOptional<z.ZodNullable<z.ZodObject<any, any>>>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export type AdminUpdatePromotionType = z.infer<typeof UpdatePromotion>;
export declare const UpdatePromotion: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    is_automatic: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof PromotionType>>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof PromotionStatus>>;
    campaign_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    application_method: z.ZodOptional<z.ZodObject<{
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodNumber>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodType>>;
        target_type: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodTargetType>>;
        allocation: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodAllocation>>;
        apply_to_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        buy_rules_min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strict", z.ZodTypeAny, {
        description?: string | null | undefined;
        value?: number | undefined;
        max_quantity?: number | null | undefined;
        currency_code?: string | null | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    }, {
        description?: string | null | undefined;
        value?: number | undefined;
        max_quantity?: number | null | undefined;
        currency_code?: string | null | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    code?: string | undefined;
    is_automatic?: boolean | undefined;
    type?: PromotionType | undefined;
    status?: PromotionStatus | undefined;
    campaign_id?: string | null | undefined;
    application_method?: {
        description?: string | null | undefined;
        value?: number | undefined;
        max_quantity?: number | null | undefined;
        currency_code?: string | null | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    } | undefined;
}, {
    code?: string | undefined;
    is_automatic?: boolean | undefined;
    type?: PromotionType | undefined;
    status?: PromotionStatus | undefined;
    campaign_id?: string | null | undefined;
    application_method?: {
        description?: string | null | undefined;
        value?: number | undefined;
        max_quantity?: number | null | undefined;
        currency_code?: string | null | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    } | undefined;
}>;
export declare const AdminUpdatePromotion: (additionalDataValidator?: z.ZodOptional<z.ZodNullable<z.ZodObject<any, any>>>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
//# sourceMappingURL=validators.d.ts.map