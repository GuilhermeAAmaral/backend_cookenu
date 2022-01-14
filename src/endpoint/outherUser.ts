import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const outherUser = async (req: Request, res: Response) => {
    
    try {

        const token = req.headers.authorization 
        
        if(!token) {
            throw new Error ("Esse endpoint exige uma autorização a ser passada nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(!tokenData.id) {
            res.status(401).send("Insira o token de usuário para acessar essa funcionalidade.")
        }

        const userBaseDatabase = new UserDataBase()

        const {id} = req.params

        if(!id) {
            res.status(401).send("Insira o id Correto para buscar o usuário")
        }

        const searchUser = await userBaseDatabase.searchUser(id)

        res.status(200).send(searchUser)
            
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}