"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
const PORT = process.env.PORT || 3000;
db_1.sync()
    .then(() => {
    console.log('DB Connected.');
    app_1.default.listen(PORT, () => console.log(`Listening on port ${PORT}...\n`));
})
    .catch(e => {
    console.log('Failed to start server or db.', e);
});
