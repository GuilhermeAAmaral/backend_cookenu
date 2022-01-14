import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export const login = async (req: Request, res: Response) => {

    try {

        const {email, password} = req.body

        if (!email || !password) {
            res.status(422).send("Inseria corretamente o 'email', 'password'.")
        }

        const userDataBase = new UserDataBase() 
        const user = await userDataBase.findUserByEmail(email)

        if  (!user) {
            res.status(409).send('Email não cadastrado')
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if (!passwordIsCorrect) {
            res.status(401).send("Email ou senha incorretos.")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId()})

        res.status(200).send({message:"Usuário logado com sucesso!", token})

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}