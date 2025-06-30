export declare const remoteJoinerData: {
    user: ({
        id: number;
        email: string;
        name: string;
        fullname: string;
        products: {
            id: number;
            product_id: number;
        }[];
        nested: {
            lala: string;
            multiple: {
                abc: number;
            }[];
        };
    } | {
        id: number;
        email: string;
        name: string;
        products: {
            id: number;
            product_id: number[];
        }[];
        nested: {
            lala: string;
            multiple: {
                a: number;
            }[];
        };
        fullname?: undefined;
    } | {
        id: number;
        email: string;
        name: string;
        fullname: string;
        nested: {
            lala: string;
            multiple: {
                a: number;
            }[];
        };
        products?: undefined;
    } | {
        id: number;
        email: string;
        name: string;
        fullname: string;
        products: {
            id: number;
            product_id: number;
        }[];
        nested: {
            lala: string;
            multiple: {
                a: number;
            }[];
        };
    })[];
    product: {
        rows: {
            id: number;
            name: string;
            handler: string;
            user_id: number;
        }[];
        limit: number;
        skip: number;
    };
    variant: {
        id: number;
        name: string;
        product_id: number;
    }[];
    order_variant: {
        order_id: number;
        product_id: number;
        variant_id: number;
        quantity: number;
    }[];
    order: {
        id: number;
        number: string;
        date: string;
        products: {
            product_id: number;
            variant_id: number;
            quantity: number;
        }[];
        user_id: number;
    }[];
};
//# sourceMappingURL=data.d.ts.map