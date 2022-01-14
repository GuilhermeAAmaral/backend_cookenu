import app from "./app"
import { getRecipe } from "./endpoint/getRecipe"
import { getUser } from "./endpoint/getUser"
import { login } from "./endpoint/login"
import { outherUser } from "./endpoint/outherUser"
import { recipes } from "./endpoint/recipes"
import { signup } from "./endpoint/signup"


app.post("/signup", signup)
app.post("/login", login)
app.get("/user/profile", getUser)
app.get("/user/:id", outherUser)

app.post("/recipes", recipes)
app.get("/recipe/:id", getRecipe)

