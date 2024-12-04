const SQLiteBaseRepository = require('./sqliteBaseRepository');
const Cart = require('../../../models/cartDTO');
const modelName = 'cart' + 's';

class CartRepository extends SQLiteBaseRepository {
    constructor() {
        super(Cart, modelName);
    }
    // data = { ingTypeId,pizzaId,totalPrice,totalAmount }
    async createCart(data) {
        const sql = 'INSERT INTO ' + modelName + ' (user_id,total_price,discount) VALUES (?,?,?)';
        const params = [data.userId, data.totalPrice, data.discount];
        const id = this.create({ sql, params });
        return new Cart(id, data.userId, data.totalPrice, data.discount);

    }
    // params = {id,ingTypeId,pizzaId,totalPrice,totalAmount}
    async updateCartById(data) {
        const sql = 'UPDATE ' + modelName + ' SET user_id = ?, total_price = ?, discount = ? WHERE id = ?';
        const params = [data.userId, data.totalPrice, data.discount, data.id]
        const updatedPizza = this.updateById({ sql, params });
        return updatedPizza[0];
    }

    async getCartByUserId(userId){
        const sql = 'SELECT * FROM carts where user_id = ?'
        const params = [userId];
        const cart = await this.create({sql, params});
        return cart[0];
    }
}

module.exports = CartRepository;