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

export {
    index,
    searchByName
};