"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const UserDatabase_1 = require("../data/UserDatabase");
const Authenticator_1 = require("../services/Authenticator");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        if (!token) {
            throw new Error("Esse endpoint exige uma autorização a ser passada nos headers");
        }
        const authentication = new Authenticator_1.Authenticator();
        const tokenData = authentication.getTokenData(token);
        if (!tokenData.id) {
            res.status(401).send("Insira o token de usuário para acessar essa funcionalidade.");
        }
        const userBaseDatabase = new UserDatabase_1.UserDataBase();
        const user = yield userBaseDatabase.getUser(tokenData.id);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.getUser = getUser;
//# sourceMappingURL=getUser.js.map