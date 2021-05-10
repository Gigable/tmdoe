"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const PORT = 8000;
const app = express_1.default();
app.use(morgan_1.default('combined'));
app.use(express_1.default.json({ limit: '1mb' }));
app.use(express_1.default.urlencoded({ extended: false, limit: '1mb' }));
app.get('/', (_, res) => {
    res.status(200).json({
        test: true
    });
});
app.post('/', (req, res) => {
    res.status(200).json({
        params: isNaN(Number(req.body.val) / 0)
    });
});
app.put('/', () => {
    process.nextTick(() => { throw new Error; });
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running on port: [${PORT}]`);
});
exports.default = app;
