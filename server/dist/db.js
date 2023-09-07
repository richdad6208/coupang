"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const node_process_1 = require("node:process");
main().catch((err) => console.log(err));
async function main() {
    if (typeof node_process_1.env.DB_URL === "string")
        await mongoose_1.default.connect(node_process_1.env.DB_URL);
    console.log("DB ON 💚");
}
