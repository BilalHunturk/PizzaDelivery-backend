// src/controllers/pizzaController.js
const PizzaService = require('../services/pizzaservice')

class PizzaController {
  static async createPizza(req, res) {
    const { name, size, dough_size } = req.body;
    try {
      const pizza = await PizzaService.createPizza(name, size, dough_size);
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
      next(error);
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
    const { name, size, dough_size } = req.body;
    try {
      const updatedPizza = await PizzaService.updatePizzaById(id, name, size, dough_size);
      res.status(200).json(updatedPizza);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Diğer CRUD işlemleri buraya eklenebilir
}

module.exports = PizzaController;
