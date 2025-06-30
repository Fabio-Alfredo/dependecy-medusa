"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const utils_1 = require("@medusajs/utils");
const awilix_1 = require("awilix");
const express_1 = __importDefault(require("express"));
const querystring_1 = __importDefault(require("querystring"));
const supertest_1 = __importDefault(require("supertest"));
const mocks_1 = require("../mocks");
const config_1 = require("../../../config");
const container_1 = require("../../../container");
const feature_flags_1 = require("../../../feature-flags");
const logger_1 = require("../../../logger");
const router_1 = require("../../router");
function asArray(resolvers) {
    return {
        resolve: (container) => resolvers.map((resolver) => container.build(resolver)),
    };
}
/**
 * Sets up a test server that injects API Routes using the RoutesLoader
 *
 * @param {String} rootDir - The root directory of the project
 */
const createServer = async (rootDir) => {
    const app = (0, express_1.default)();
    const moduleResolutions = {};
    Object.entries(modules_sdk_1.ModulesDefinition).forEach(([moduleKey, module]) => {
        moduleResolutions[moduleKey] = (0, modules_sdk_1.registerMedusaModule)(moduleKey, module.defaultModuleDeclaration, undefined, module)[moduleKey];
    });
    config_1.configManager.loadConfig({
        projectConfig: mocks_1.config,
        baseDir: rootDir,
    });
    container_1.container.registerAdd = function (name, registration) {
        const storeKey = name + "_STORE";
        if (this.registrations[storeKey] === undefined) {
            this.register(storeKey, (0, awilix_1.asValue)([]));
        }
        const store = this.resolve(storeKey);
        if (this.registrations[name] === undefined) {
            this.register(name, asArray(store));
        }
        store.unshift(registration);
        return this;
    }.bind(container_1.container);
    container_1.container.register(utils_1.ContainerRegistrationKeys.PG_CONNECTION, (0, awilix_1.asValue)({}));
    container_1.container.register("configModule", (0, awilix_1.asValue)(mocks_1.config));
    container_1.container.register({
        logger: (0, awilix_1.asValue)({
            error: () => { },
        }),
        manager: (0, awilix_1.asValue)({}),
    });
    app.set("trust proxy", 1);
    app.use((req, _res, next) => {
        req["session"] = {};
        const data = req.get("Cookie");
        if (data) {
            req["session"] = {
                ...req["session"],
                ...JSON.parse(data),
            };
        }
        next();
    });
    await (0, feature_flags_1.featureFlagsLoader)();
    await (0, modules_sdk_1.moduleLoader)({ container: container_1.container, moduleResolutions, logger: logger_1.logger });
    app.use((req, res, next) => {
        ;
        req.scope = container_1.container.createScope();
        next();
    });
    await new router_1.ApiLoader({
        app,
        sourceDir: rootDir,
    }).load();
    const superRequest = (0, supertest_1.default)(app);
    return {
        request: async (method, url, opts = {}) => {
            const { payload, query, headers = {} } = opts;
            const queryParams = query && querystring_1.default.stringify(query);
            const req = superRequest[method.toLowerCase()](`${url}${queryParams ? "?" + queryParams : ""}`);
            headers.Cookie = headers.Cookie || "";
            if (opts.adminSession) {
                const token = (0, utils_1.generateJwtToken)({
                    actor_id: opts.adminSession.userId || opts.adminSession.jwt?.userId,
                    actor_type: "user",
                    app_metadata: {
                        user_id: opts.adminSession.userId || opts.adminSession.jwt?.userId,
                    },
                }, {
                    secret: mocks_1.config.projectConfig.http.jwtSecret,
                    expiresIn: "1d",
                });
                headers.Authorization = `Bearer ${token}`;
            }
            if (opts.clientSession) {
                const token = (0, utils_1.generateJwtToken)({
                    actor_id: opts.clientSession.customer_id ||
                        opts.clientSession.jwt?.customer_id,
                    actor_type: "customer",
                    app_metadata: {
                        customer_id: opts.clientSession.customer_id ||
                            opts.clientSession.jwt?.customer_id,
                    },
                }, { secret: mocks_1.config.projectConfig.http.jwtSecret, expiresIn: "1d" });
                headers.Authorization = `Bearer ${token}`;
            }
            for (const name in headers) {
                if ({}.hasOwnProperty.call(headers, name)) {
                    req.set(name, headers[name]);
                }
            }
            if (payload && !req.get("content-type")) {
                req.set("Content-Type", "application/json");
            }
            if (!req.get("accept")) {
                req.set("Accept", "application/json");
            }
            req.set("Host", "localhost");
            let res;
            try {
                res = await req.send(JSON.stringify(payload));
            }
            catch (e) {
                if (e.response) {
                    res = e.response;
                }
                else {
                    throw e;
                }
            }
            return res;
        },
    };
};
exports.createServer = createServer;
//# sourceMappingURL=index.js.map