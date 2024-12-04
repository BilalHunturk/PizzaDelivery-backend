const PizzaRepository = require('./repositories/pizzaRepository');
const pizzaRepository = new PizzaRepository()


class PizzaService {

    static async createPizza(data) {
        return await pizzaRepository.create(data);
    }

    static async getPizzaById(id) {
        return await pizzaRepository.getById(id);
    }

    static async getAllPizzas() {
        return await pizzaRepository.getAll();
    }
    static async deletePizzaById(id) {
        return await pizzaRepository.deleteById(id);
    }

    static async updatePizzaById(params) {
        return await pizzaRepository.updatePizzaById(params);
    }
}
module.exports = PizzaService;