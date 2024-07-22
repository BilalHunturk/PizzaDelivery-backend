const IngredientTypeService = require('../services/ingredientTypeService');

class IngredientTypeController {
  static async createIngredientType(req, res) {
    const { name, imageUrl, pricePerMinAmount, minAmount } = req.body;
    try {
      const ingredientType = await IngredientTypeService.createIngredientType(name, imageUrl, pricePerMinAmount, minAmount);
      res.status(201).json(ingredientType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllIngredientTypes(req, res) {
    try {
      const ingredientTypes = await IngredientTypeService.getAllIngredientTypes();
      res.status(200).json(ingredientTypes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getIngredientTypeById(req, res) {
    const { id } = req.params;
    try {
      const ingredientType = await IngredientTypeService.getIngredientTypeById(id);
      if (!ingredientType) {
        res.status(404).json({ message: 'Ingredient type not found' });
      } else {
        res.status(200).json(ingredientType);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteIngredientTypeById(req, res) {
    const { id } = req.params;
    try {
      await IngredientTypeService.deleteIngredientTypeById(id);
      res.status(200).json({ message: `Ingredient type with id ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateIngredientTypeById(req, res) {
    const { id } = req.params;
    const { name, imageUrl, pricePerMinAmount, minAmount } = req.body;
    try {
      const ingredientType = await IngredientTypeService.updateIngredientTypeById(id, name, imageUrl, pricePerMinAmount, minAmount);
      res.status(200).json(ingredientType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = IngredientTypeController;
