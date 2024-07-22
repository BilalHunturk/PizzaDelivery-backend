const express = require('express');
const PizzaController = require('../contollers/pizzaController'); // Adjust the path as needed

const router = express.Router();

router.post('/pizza', PizzaController.createPizza);
router.get('/pizzas', PizzaController.getAllPizzas);
router.get('/pizza/:id', PizzaController.getPizza);
router.delete('/pizza/:id', PizzaController.deletePizza);
router.put('/pizza/:id', PizzaController.updatePizza);

module.exports = router;