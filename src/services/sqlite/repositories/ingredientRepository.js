const SQLiteBaseRepository = require('./sqliteBaseRepository');
const Ingredient = require('../../../models/ingredientDTO');
const modelName = 'ingredient' + 's';

class IngredientRepository extends SQLiteBaseRepository {
    constructor() {
        super(Ingredient, modelName);
    }
    // data = { ingTypeId,pizzaId,totalPrice,totalAmount }
    async createIngredient(data) {
        const sql = 'INSERT INTO ' + modelName + ' (ing_type_id,pizza_id,total_price,total_amount) VALUES (?,?,?,?)';
        const params = [data.ingTypeId, data.pizzaId, data.totalPrice, data.totalAmount];
        const id = this.create({ sql, params });
        return new Ingredient(data.ingTypeId, data.pizzaId, data.totalPrice, data.totalAmount);

    }
    // params = {id,ingTypeId,pizzaId,totalPrice,totalAmount}
    async updateIngredientById(data) {
        const sql = 'UPDATE ' + modelName + ' SET ing_type_id = ?, pizza_id = ?, total_price = ?, total_amount = ? WHERE id = ?';
        const params = [data.ingTypeId, data.pizzaId, data.totalPrice, data.totalAmount, data.id]
        const updatedPizza = this.updateById({ sql, params });
        return updatedPizza;
    }

    async getIngredientsByPizzaId(pizzaId) {
        const sql = `SELECT 
        it.name AS name,
        it.image_url AS ingredientImg,
        i.total_amount AS totalAmount,
        i.total_price as totalPrice
    FROM 
        ingredients i
    JOIN 
        ingredient_types it ON i.ing_type_id = it.id
    WHERE 
        i.pizza_id = ?;`
        console.log('SQL is ', sql);
        const params = [pizzaId];
        const result = await this.create({ sql, params });
        console.log('params ', params, 'result ', result)
        return result;
    }
}

module.exports = IngredientRepository;