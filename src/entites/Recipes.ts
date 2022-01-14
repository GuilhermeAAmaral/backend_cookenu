export class Recipes {

    private id: string
    private title: string
    private description: string
    private date: string

    constructor (
        id: string,
        title: string,
        description: string,
        date: string
    ) {

        this.id = id,
        this.title = title,
        this.description = description,
        this.date = date
    }

    public getId = () => {
        return this.id
    }

    public getTitle = () => {
        return this.title
    }

    public getDescription = () => {
        return this.description
    }

    public getDate = () => {
        return this.date
    }

    static toRecipesModel (data: any) : Recipes {

        return new Recipes (
            data.id,
            data.title,
            data.description,
            data.data
        )
    }

}