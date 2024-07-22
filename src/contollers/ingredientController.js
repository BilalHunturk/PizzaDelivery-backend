const IngredientService = require('../services/ingredientService');


// Create Ingredient and others should be redesign
class IngredientController {
  static async createIngredientType(req, res) {
    const { ingTypeId,pizzaId,totalPrice,totalAmount } = req.body;
    try {
      const ingredient = await IngredientService.createIngredient(ingTypeId,pizzaId,totalPrice,totalAmount);
      res.status(201).json(ingredient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllIngredientTypes(req, res) {
    try {
      const ingredients = await IngredientService.getAllIngredients();
      res.status(200).json(ingredients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getIngredientTypeById(req, res) {
    const { id } = req.params;
    try {
      const ingredient = await IngredientService.getIngredientById(id);
      if (!ingredient) {
        res.status(404).json({ message: 'Ingredient not found' });
      } else {
        res.status(200).json(ingredient);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteIngredientById(req, res) {
    const { id } = req.params;
    try {
      await IngredientService.deleteIngredientById(id);
      res.status(200).json({ message: `Ingredient with id ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateIngredientTypeById(req, res) {
    const { id } = req.params;
    const { ingTypeId,pizzaId,totalPrice,totalAmount } = req.body;
    try {
      const ingredient = await IngredientService.updateIngredientById(id,ingTypeId,pizzaId,totalPrice,totalAmount);
      res.status(200).json(ingredient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = IngredientController;
