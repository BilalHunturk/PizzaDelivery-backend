const IngredientRepository = require('./repositories/ingredientRepository');
const ingredientRepository = new IngredientRepository();


class IngredientService {

    static async createIngredient(data) {
        return await ingredientRepository.create(data);
    }

    static async getIngredientById(id) {
        return await ingredientRepository.getById(id);
    }

    static async getAllIngredients() {
        return await ingredientRepository.getAll();
    }
    static async deleteIngredientById(id) {
        return await ingredientRepository.deleteById(id);
    }

    static async updateIngredientById(params) {
        return await ingredientRepository.updateIngredientById(params);
    }
}
module.exports = IngredientService;