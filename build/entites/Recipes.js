"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipes = void 0;
class Recipes {
    constructor(id, title, description, date) {
        this.getId = () => {
            return this.id;
        };
        this.getTitle = () => {
            return this.title;
        };
        this.getDescription = () => {
            return this.description;
        };
        this.getDate = () => {
            return this.date;
        };
        this.id = id,
            this.title = title,
            this.description = description,
            this.date = date;
    }
    static toRecipesModel(data) {
        return new Recipes(data.id, data.title, data.description, data.data);
    }
}
exports.Recipes = Recipes;
//# sourceMappingURL=Recipes.js.map