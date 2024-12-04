const SQLiteBaseRepository = require('./sqliteBaseRepository');
const IngredientType = require('../../../models/ingredientTypeDTO');
const modelName = 'ingredient_type'+'s'

class IngredientTypeRepository extends SQLiteBaseRepository {
    constructor() {
        super(IngredientType,modelName);
    }
    // data = { name, imageUrl, pricePerMinAmount, minAmount }
    async createIngredientType(data) {
        const sql = 'INSERT INTO '+modelName+' ( image_url, name, price_per_min_amount, min_amount) VALUES (?,?,?,?)';
        const params = [data.imageUrl, data.name, data.pricePerMinAmount, data.minAmount];
        console.log()
        const id = this.create({sql,params});
        return new IngredientType(id,data.imageUrl,data.name,data.pricePerMinAmount,data.minAmount);

    }
    // params = {id, name, imageUrl, pricePerMinAmount, minAmount}
    async updateIngredientTypeById(data) {
        const sql = 'UPDATE '+modelName+' SET image_url = ?, name = ?, price_per_min_amount = ?, min_amount = ? WHERE id = ?';
        const params = [data.imageUrl, data.name, data.pricePerMinAmount, data.minAmount, data.id]
        const updatedPizza = this.updateById({sql,params});
        return updatedPizza;    
    }
}

module.exports = IngredientTypeRepository;