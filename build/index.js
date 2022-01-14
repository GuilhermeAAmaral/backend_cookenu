"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const getRecipe_1 = require("./endpoint/getRecipe");
const getUser_1 = require("./endpoint/getUser");
const login_1 = require("./endpoint/login");
const outherUser_1 = require("./endpoint/outherUser");
const recipes_1 = require("./endpoint/recipes");
const signup_1 = require("./endpoint/signup");
app_1.default.post("/signup", signup_1.signup);
app_1.default.post("/login", login_1.login);
app_1.default.get("/user/profile", getUser_1.getUser);
app_1.default.get("/user/:id", outherUser_1.outherUser);
app_1.default.post("/recipes", recipes_1.recipes);
app_1.default.get("/recipe/:id", getRecipe_1.getRecipe);
//# sourceMappingURL=index.js.map