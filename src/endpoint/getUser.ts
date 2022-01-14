import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


export const getUser = async (req: Request, res: Response) => {

    try {

        const token = req.headers.authorization as string
       
        if (!token) {
            throw new Error ("Esse endpoint exige uma autorização a ser passada nos headers")
        }

        const authentication = new Authenticator()
        const tokenData = authentication.getTokenData(token)

        if (!tokenData.id) {
            res.status(401).send("Insira o token de usuário para acessar essa funcionalidade.")
        }

        const userBaseDatabase = new UserDataBase()
        const user = await userBaseDatabase.getUser(tokenData.id)

        res.status(200).send(user)

    } catch (error :any) {
        res.status(400).send(error.message)
    }
}