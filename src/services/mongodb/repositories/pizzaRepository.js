const MongoDbBaseRepository = require('./mongoDbBaseRepository');
const Pizza = require('../../../models/mongoDb/pizza');

class PizzaRepository extends MongoDbBaseRepository {
    constructor() {
        super(Pizza);
    }

    async updatePizzaById(params) {
        const { id, name, size, doughSize, price, pizzaImg } = params;
        return await Pizza.findByIdAndUpdate(id, { name: name, size: size, doughSize: doughSize, price: price, pizzaImg: pizzaImg })
    }
}

module.exports = PizzaRepository;