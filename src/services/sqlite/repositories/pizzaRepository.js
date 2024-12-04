const SQLiteBaseRepository = require('./sqliteBaseRepository');
const Pizza = require('../../../models/pizzaDTO');
const modelName = 'pizza'+'s';

class PizzaRepository extends SQLiteBaseRepository {
    constructor() {
        super(Pizza,modelName);
    }

    // const data = {name, pizzaImg, size, dough_size, price}
    async createPizza(parameters){
        const sql = 'INSERT INTO '+modelName+' (name,size,dough_size,pizzaImg,price) VALUES (?,?,?,?,?)';
        const params = [parameters.name, parameters.size, parameters.dough_size, parameters.pizzaImg, parameters.price];
        const id = this.create({sql,params});
        return new Pizza(99,parameters.name,parameters.size,parameters.dough_size,parameters.price,parameters.pizzaImg);
    }

    // const params = { id, name, size, dough_size, price, pizzaImg}
    async updatePizzaById(parameters){
        const sql = 'UPDATE '+modelName+' SET name = ?, size = ?, dough_size = ?, price = ?, pizzaImg = ? WHERE id = ?';
        const params = [parameters.name, parameters.size, parameters.dough_size, parameters.price, parameters.pizzaImg, parameters.id]
        const updatedPizza = this.updateById({sql,params});
        return updatedPizza;
    }
}

module.exports = PizzaRepository;