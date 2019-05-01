"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class App extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "Hello"),
            react_1.default.createElement("h2", null, "Ready for some super very serious business"),
            react_1.default.createElement("p", null, "All of these super duper cool businesses")));
    }
}
exports.default = App;
