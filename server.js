import "dotenv/config";
import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;

import recipeRoutes from "./routes/recipe-routes.js"


app.use("/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});