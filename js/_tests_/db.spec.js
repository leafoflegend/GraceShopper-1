"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../server/models/user"));
const db_1 = require("../server/db");
let sequelize;
describe("our models", () => {
    beforeAll(() => {
        return db_1.sync().then(conn => {
            sequelize = conn;
        });
    });
    afterAll(() => {
        return sequelize.close().then(() => {
            console.log('Exited connection successfully!');
        });
    });
    test("user model creates a user", () => {
        return user_1.default.create({ name: "moe" }).then(user => expect(user.name).toBe("moe"));
    });
});
