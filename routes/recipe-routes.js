import express from "express";
import * as recipeController from "../controllers/recipe-controller.js"


const router = express.Router();



router.get("/", recipeController.index)
router.get("/search", recipeController.searchByName);
router.get("/ingredients-search", recipeController.searchByIngredients);

export default router;