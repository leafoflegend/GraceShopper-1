"use strict";
// Typically, you should be able to use "import ... from ..." syntax
// However, built in modules (like path) and modules that are built with older version in mind (express)
// need special syntaxes for import, like you see below.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = __importStar(require("path"));
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
app.get('/boo', (req, res, next) => {
    res.send('Heres a sample route');
});
exports.default = app;
