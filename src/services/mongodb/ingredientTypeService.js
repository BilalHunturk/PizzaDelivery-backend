const IngredientTypeRepository = require('./repositories/ingredientTypeRepository');
const ingredientTypeRepository = new IngredientTypeRepository();


class IngredientTypeService {

    static async createIngredientType(data) {
        return await ingredientTypeRepository.create(data);
    }

    static async getIngredientTypeById(id) {
        return await ingredientTypeRepository.getById(id);
    }

    static async getAllIngredientTypes() {
        return await ingredientTypeRepository.getAll();
    }
    static async deleteIngredientTypeById(id) {
        return await ingredientTypeRepository.deleteById(id);
    }

    static async updateIngredientTypeById(params) {
        return await ingredientTypeRepository.updateIngredientTypeById(params);
    }
}
module.exports = IngredientTypeService;