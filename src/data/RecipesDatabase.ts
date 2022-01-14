import { Recipes } from "../entites/Recipes";
import { BaseDatabase } from "./BaseDatabase";


export class RecipesDatabase extends BaseDatabase {
    public async createRecipes (recipes: Recipes) {

        try {

            await BaseDatabase.connection ('recipes_cookenu')
            .insert ({
                id: recipes.getId(),
                title: recipes.getTitle(),
                description: recipes.getDescription(),
                date: recipes.getDate()
            })

        } catch (error : any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getRecipe (id: any) : Promise <Recipes[]> {

        try{

            const recipe = await BaseDatabase.connection ('recipes_cookenu')
            .select ('*')
            .where ({id})
            
            return recipe[0] && Recipes.toRecipesModel(recipe[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}