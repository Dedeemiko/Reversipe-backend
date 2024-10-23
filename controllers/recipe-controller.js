import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


const index = async (_req, res) => {
  try {
    const data = await knex("recipes");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
}

const searchByName = async (req, res) => {
    const { name } = req.query;
    try {
        const recipeFound = await knex("recipes")
        .where('title', 'like', `%${name}%`);
        res.status(200).json(recipeFound);
    } catch (err) {
        res.status(400).send(`Error searching for recipes: ${err}`);
    }
} 

const searchByIngredients = async (req, res) => {
    const { ingredients } = req.query;
    if (!ingredients) {
        return res.status(400).send("Please provide ingredients to search for");
    }

    const ingredientsArray = ingredients.split(",").map(item => item.trim());

    try {
        const ingredientsFound = await knex("recipes")
        .where(function() {
            ingredientsArray.forEach((ingredient) => {
                this.orWhere("ingredients", "like", `%${ingredient}%`);
            });
        });
        res.status(200).json(ingredientsFound);
    } catch (err) {
        res.status(400).send(`Error searching for recipes by ingredients: ${err}`);
    }
};

export {
    index,
    searchByName,
    searchByIngredients
};