"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
require("./db");
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 4000;
app.listen(port, () => {
    console.log(`SERVER ON💚 in port: ${port}`);
});
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../client/build")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    console.log("hi");
    res.sendFile(path_1.default.join(__dirname, "../../client/build/index.html"));
});
app.post("/api", (req, res) => {
    res.status(200).json({ success: true, name: "good" });
});
