"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.getEmail = () => {
            return this.email;
        };
        this.getPassword = () => {
            return this.password;
        };
        this.id = id,
            this.name = name,
            this.email = email,
            this.password = password;
    }
    static toUserModel(data) {
        return new User(data.id, data.name, data.email, data.password);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map