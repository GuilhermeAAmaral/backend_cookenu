import { User } from "../entites/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {

    public async findUserByEmail(email: string): Promise <User> {

        try {

            const user = await BaseDatabase.connection('user_cookenu')
            .select ('*')
            .where ({email: email})

            return user[0] && User.toUserModel(user[0]);


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

   public async createUser (user: User) {
       
       try {
        await BaseDatabase.connection('user_cookenu')
        .insert ({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        })

       } catch (error: any) {
        throw new Error (error.sqlMessage || error.message)
       }
   }

   public async searchUser (id: any): Promise <User> {

    try {

        const user = await BaseDatabase.connection('user_cookenu')
        .select ('*')
        .where ({id: id})

        return user[0] && User.toUserModel(user[0]);


    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
    }

    public async getUser (token: string): Promise <User> {

        try {
    
            const user = await BaseDatabase.connection('user_cookenu')
            .select ('*')
            .where ({id: token})
    
            return user[0] && User.toUserModel(user[0]);
    
    
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
        }

}