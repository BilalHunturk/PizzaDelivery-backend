const MongoDbBaseRepository = require('./mongoDbBaseRepository');
const Ingredient = require('../../../models/mongoDb/ingredient');

class IngredientRepository extends MongoDbBaseRepository {
    constructor() {
        super(Ingredient);
    }
    // {id,ingTypeId,pizzaId,totalPrice,totalAmount }
    async updateIngredientById(params){
        const { id, ingTypeId, pizzaId, totalPrice ,totalAmount } = params;
        return await Ingredient.findByIdAndUpdate(id, {ingTypeId: ingTypeId, pizzaId: pizzaId, totalPrice: totalPrice,totalAmount:totalAmount})
    }
}

module.exports = IngredientRepository;