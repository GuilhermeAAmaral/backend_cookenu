"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGeneration = void 0;
const uuid_1 = require("uuid");
class IdGeneration {
    generate() {
        return (0, uuid_1.v4)();
    }
}
exports.IdGeneration = IdGeneration;
//# sourceMappingURL=IdGeneration.js.map