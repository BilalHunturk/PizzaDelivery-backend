const SQLiteBaseRepository = require('./sqliteBaseRepository');
const CartItem = require('../../../models/cartItemDTO');
const modelName = 'cart_item' + 's';

class CartItemRepository extends SQLiteBaseRepository {
    constructor() {
        super(CartItem, modelName);
    }
    // data = { ingTypeId,pizzaId,totalPrice,totalAmount }
    async createCartItem(data) {
        const sql = 'INSERT INTO ' + modelName + ' (cart_id,pizza_id,quantity,total_price) VALUES (?,?,?,?)';
        const params = [data.cartId, data.pizzaId, data.quantity, data.totalPrice];
        const id = this.create({ sql, params });
        return new CartItem(id,data.cartId, data.pizzaId, data.quantity, data.totalPrice);

    }
    // params = {id,ingTypeId,pizzaId,totalPrice,totalAmount}
    async updateCartItemById(data) {
        const sql = 'UPDATE ' + modelName + ' SET cart_id = ?, pizza_id = ?, quantity = ?, total_price = ? WHERE id = ?';
        const params = [data.cartId, data.pizzaId, data.quantity, data.totalPrice, data.id]
        const updatedPizza = this.updateById({ sql, params });
        return new CartItem(data.id,data.cartId,data.pizzaId,data.quantity,data.totalPrice);
    }

    async getCartItemsByUserId(userId) {
        const sql = `SELECT 
        ci.id,
        ci.pizza_id as pizzaId,
        p.name as pizzaName,
        p.pizzaImg,
        p.price as pizzaPrice,
        ci.quantity,
        ci.total_price as totalPrice
       
               FROM cart_items as ci
               JOIN carts as c ON ci.cart_id = c.id
               JOIN pizzas as p on ci.pizza_id = p.id
               WHERE c.user_id = ?;`
        const params = [userId];
        const result = await this.create({ sql, params });
        return result;
    }
}

module.exports = CartItemRepository;