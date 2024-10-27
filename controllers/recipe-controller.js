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
        const allIngredientsMatch = await knex("recipes")
            .where(function() {
                ingredientsArray.forEach((ingredient) => {
                    this.andWhere("ingredients", "like", `%${ingredient}%`);
                });
            });

        const allIngredientsIds = allIngredientsMatch.map(recipe => recipe.id);

        const anyIngredientMatch = await knex("recipes")
            .where(function() {
                ingredientsArray.forEach((ingredient) => {
                    this.orWhere("ingredients", "like", `%${ingredient}%`);
                });
            })
            .whereNotIn("id", allIngredientsIds);

        const results = [...allIngredientsMatch, ...anyIngredientMatch];       
        res.status(200).json(results);

    } catch (err) {
        res.status(400).send(`Error searching for recipes by ingredients: ${err}`);
    }
};

const getRecipeById = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await knex("recipes").where({ id }).first();

        if (!recipe) {
            return res.status(404).send("Recipe not found");
        }

        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).send(`Error retrieving recipe by ID: ${err}`);
    }
};

export {
    index,
    searchByName,
    searchByIngredients,
    getRecipeById
};