const MongoDbBaseRepository = require('./mongoDbBaseRepository');
const IngredientType = require('../../../models/mongoDb/ingredientType');

class IngredientTypeRepository extends MongoDbBaseRepository {
    constructor() {
        super(IngredientType);
    }
    // {id, name, imageUrl, pricePerMinAmount, minAmount}
    async updateIngredientTypeById(params){
        const { id, name, imageUrl, pricePerMinAmount ,minAmount } = params;
        return await IngredientType.findByIdAndUpdate(id, {imageUrl: imageUrl, name: name, pricePerMinAmount: pricePerMinAmount,minAmount:minAmount})
    }
}

module.exports = IngredientTypeRepository;