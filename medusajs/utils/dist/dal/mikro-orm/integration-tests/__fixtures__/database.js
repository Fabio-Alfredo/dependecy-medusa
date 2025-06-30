"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgGodCredentials = void 0;
exports.getDatabaseURL = getDatabaseURL;
const DB_HOST = process.env.DB_HOST ?? "localhost";
const DB_USERNAME = process.env.DB_USERNAME ?? "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD;
exports.pgGodCredentials = {
    user: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
};
function getDatabaseURL(dbName) {
    return `postgres://${DB_USERNAME}${DB_PASSWORD ? `:${DB_PASSWORD}` : ""}@${DB_HOST}/${dbName}`;
}
//# sourceMappingURL=database.js.map