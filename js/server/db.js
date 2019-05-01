"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
// @ts-ignore
const conn = new sequelize_typescript_1.Sequelize({
    database: process.env.DATABASE_NAME || 'graceshopper_test',
    dialect: 'postgres',
    logging: process.env.DATABASE_LOGGING || false,
    modelPaths: [`${__dirname}/models`],
});
exports.conn = conn;
const sync = () => {
    return new Promise((res, rej) => {
        conn
            .sync()
            .then(() => {
            res(conn);
        })
            .catch((e) => {
            rej(e);
        });
    });
};
exports.sync = sync;
