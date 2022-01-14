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
exports.login = void 0;
const UserDatabase_1 = require("../data/UserDatabase");
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).send("Inseria corretamente o 'email', 'password'.");
        }
        const userDataBase = new UserDatabase_1.UserDataBase();
        const user = yield userDataBase.findUserByEmail(email);
        if (!user) {
            res.status(409).send('Email não cadastrado');
        }
        const hashManager = new HashManager_1.HashManager();
        const passwordIsCorrect = yield hashManager.compare(password, user.getPassword());
        if (!passwordIsCorrect) {
            res.status(401).send("Email ou senha incorretos.");
        }
        const authenticator = new Authenticator_1.Authenticator();
        const token = authenticator.generate({ id: user.getId() });
        res.status(200).send({ message: "Usuário logado com sucesso!", token });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
exports.login = login;
//# sourceMappingURL=login.js.map