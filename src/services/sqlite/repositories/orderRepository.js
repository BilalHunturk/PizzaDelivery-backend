const SQLiteBaseRepository = require('./sqliteBaseRepository');
const Order = require('../../../models/orderDTO');
const modelName = "order"+'s';

class OrderRepository extends SQLiteBaseRepository {
    constructor() {
        super(Order,modelName);
    }

    // const data = { pizzaId, userId, amount, date, status, paymentMethod }
    async createOrder(parameters){
        const sql = 'INSERT INTO '+modelName+' (userId,totalPrice,paymentMethod,date,status) VALUES (?,?,?,?,?)';
        const params = [parameters.userId, parameters.totalPrice, parameters.paymentMethod, parameters.date, parameters.status];
        const id = this.create({sql,params});
        return new Order(id,parameters.pizzaId,parameters.userId,parameters.amount,parameters.date,parameters.status,parameters.paymentMethod);
    }

    // const params = { id, pizzaId, userId, amount, date, status, paymentMethod }
    async updateOrderById(parameters){
        const sql = 'UPDATE '+modelName+' SET userId = ?, totalPrice = ?, paymentMethod = ?, date = ?, status = ?  WHERE id = ?';
        const params = [parameters.userId, parameters.totalPrice, parameters.paymentMethod, parameters.date, parameters.status, parameters.id];
        const updatedPizza = this.updateById({sql,params});
        return updatedPizza;
    }
}

module.exports = OrderRepository;