"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
app_1.default.get("/", (req, res) => {
    res.send("Hello");
});
const port = process.env.PORT || 9000;
app_1.default.listen(port, () => console.log(`http://localhost:${port}`));
