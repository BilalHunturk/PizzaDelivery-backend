const IngredientRepository = require('./repositories/ingredientRepository');
const ingredientRepository = new IngredientRepository();


class IngredientService {

    static async createIngredient(data) {
        return await ingredientRepository.createIngredient(data);
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

    static async getIngredientsByPizzaId(pizzaId){
        return await ingredientRepository.getIngredientsByPizzaId(pizzaId);
    }
}
module.exports = IngredientService;