import "dotenv/config";
import express from "express";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 5050;


import recipeRoutes from "./routes/recipe-routes.js"

app.use(cors());


app.use("/api/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});