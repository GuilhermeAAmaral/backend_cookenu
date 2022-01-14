import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDatabase";
import { User } from "../entites/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGeneration } from "../services/IdGeneration";

export const signup = async (req: Request, res: Response) => {

    try {

        const {name, email, password} = req.body

        if (!name || !email || !password) {
            res.status(422).send("Inseria corretamente 'name', 'email', 'password'.")
        }

        if (!password || password.length < 6) {
            throw new Error ("A senha deve conter mais de 6 caracteres")
        }

        const userDataBase = new UserDataBase() 
        const user = userDataBase.findUserByEmail(email)
        
        if (await user) {
            res.status(409).send('Email já cadastrado')
        }

        const idGenerator = new IdGeneration()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User (id, name, email, hashPassword)
        await userDataBase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id})

        res.status(200).send({message:"Usuário criado com sucesso!", token})


    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}