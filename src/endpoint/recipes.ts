import { Request, Response } from "express";
import { RecipesDatabase } from "../data/RecipesDatabase";
import { Recipes } from "../entites/Recipes";
import { Authenticator } from "../services/Authenticator";
import { IdGeneration } from "../services/IdGeneration";

export const recipes = async (req: Request, res: Response) => {

    try{ 

        const token = req.headers.authorization

        if (!token) {
            throw new Error ("Esse endpoint exige uma autorização a ser passada nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if (! tokenData.id) {
            res.status(401).send("Insira o token de usuário acessar essa funcionalidade.");
        }

        const recipesBaseDatabase = new RecipesDatabase()

        const {title, description, date} = req.body

        if (!title || !description || !date) {
            res.status(422).send("Inseria corretamente 'title', 'description'.")
        }

        const idGenerator = new IdGeneration()
        const id = idGenerator.generate()

        const newRecipes = new Recipes (id, title, description, date)
        await recipesBaseDatabase.createRecipes (newRecipes)

        res.status(200).send("Receita criada com sucesso")

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}