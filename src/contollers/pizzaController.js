const PizzaService = require('../services/pizzaService') 

class PizzaController {

  // {name, size, dough_size, pizzaImg, price}
  static async createPizza(req, res) {
    try {
      const pizza = await PizzaService.createPizza(req.body);
      res.status(201).json(pizza);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPizza(req, res) {
    const { id } = req.params;
    try {
      const pizza = await PizzaService.getPizzaById(id);
      if (pizza) {
        res.status(200).json(pizza);
      } else {
        res.status(404).json({ message: 'Pizza not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllPizzas(req, res) {
    const { id } = req.params;
    try {
      const pizzas = await PizzaService.getAllPizzas();
      res.json(pizzas);
    } catch (error) {
      throw Error(error)
    }
  }

  static async deletePizza(req, res) {
    const { id } = req.params;
    try {
      await PizzaService.deletePizzaById(id);
      res.status(200).json({ message: `Pizza with id ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updatePizza(req, res) {
    const { id } = req.params;
    const { name, size, dough_size, price, pizzaImg } = req.body;
    const params = { id, name, size, dough_size, price, pizzaImg }
    try {
      const updatedPizza = await PizzaService.updatePizzaById(params);
      res.status(200).json(updatedPizza);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Diğer CRUD işlemleri buraya eklenebilir
}

module.exports = PizzaController;
