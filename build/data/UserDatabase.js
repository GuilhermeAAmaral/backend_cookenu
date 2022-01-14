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
exports.UserDataBase = void 0;
const User_1 = require("../entites/User");
const BaseDatabase_1 = require("./BaseDatabase");
class UserDataBase extends BaseDatabase_1.BaseDatabase {
    findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield BaseDatabase_1.BaseDatabase.connection('user_cookenu')
                    .select('*')
                    .where({ email: email });
                return user[0] && User_1.User.toUserModel(user[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection('user_cookenu')
                    .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    searchUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield BaseDatabase_1.BaseDatabase.connection('user_cookenu')
                    .select('*')
                    .where({ id: id });
                return user[0] && User_1.User.toUserModel(user[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getUser(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield BaseDatabase_1.BaseDatabase.connection('user_cookenu')
                    .select('*')
                    .where({ id: token });
                return user[0] && User_1.User.toUserModel(user[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.UserDataBase = UserDataBase;
//# sourceMappingURL=UserDatabase.js.map