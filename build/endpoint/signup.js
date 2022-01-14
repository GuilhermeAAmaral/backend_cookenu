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
exports.signup = void 0;
const UserDatabase_1 = require("../data/UserDatabase");
const User_1 = require("../entites/User");
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const IdGeneration_1 = require("../services/IdGeneration");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(422).send("Inseria corretamente 'name', 'email', 'password'.");
        }
        if (!password || password.length < 6) {
            throw new Error("A senha deve conter mais de 6 caracteres");
        }
        const userDataBase = new UserDatabase_1.UserDataBase();
        const user = userDataBase.findUserByEmail(email);
        if (yield user) {
            res.status(409).send('Email já cadastrado');
        }
        const idGenerator = new IdGeneration_1.IdGeneration();
        const id = idGenerator.generate();
        const hashManager = new HashManager_1.HashManager();
        const hashPassword = yield hashManager.hash(password);
        const newUser = new User_1.User(id, name, email, hashPassword);
        yield userDataBase.createUser(newUser);
        const authenticator = new Authenticator_1.Authenticator();
        const token = authenticator.generate({ id });
        res.status(200).send({ message: "Usuário criado com sucesso!", token });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
exports.signup = signup;
//# sourceMappingURL=signup.js.map